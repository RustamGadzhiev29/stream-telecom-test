import React, { FC, useMemo, useState } from "react";

import {
  PlusOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

import { addData } from "../../store/slice/slice";
import { useAppSelector, useTypedDispatch } from "../../store/store";
import { DataType, DomainDataType } from "../../store/types/types";
import FormComponent from "../form/FormComponent";

import Rows from "./rows/Rows";
import style from "./Table.module.scss";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useSortableData = (items: DomainDataType[], config = null) => {
  const [sortConfig, setSortConfig] = useState<null | {
    key: string;
    direction: string;
  }>(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (
          a[sortConfig.key as keyof typeof a] <
          b[sortConfig.key as keyof typeof b]
        ) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (
          a[sortConfig.key as keyof typeof a] >
          b[sortConfig.key as keyof typeof b]
        ) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }

        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const requestSort = (key: string) => {
    let direction = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  console.log(items);

  return { items: sortedItems, requestSort, sortConfig };
};

const Table: FC = () => {
  const dispatch = useTypedDispatch();

  const data = useAppSelector((state) => state.data);
  const dataForTable = data.map((d: DataType, index: number) => ({
    ...d,
    id: index,
  }));

  const { items, requestSort, sortConfig } = useSortableData(dataForTable);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type

  const onAddClickHandler = (): void => {
    dispatch(addData([{ name: "", value: "" }]));
  };

  const tableHeaders = [
    { id: "1th", title: "Нименование", key: "name", sortConfig },
    { id: "2th", title: "Значение", key: "value", sortConfig },
  ];

  return (
    <div className={style.tableConteainer}>
      <table className={style.table}>
        <thead>
          <tr>
            {tableHeaders.map(({ id, title, key, sortConfig }) => (
              <th key={id}>
                {title}{" "}
                {sortConfig?.direction === "ascending" ? (
                  <SortAscendingOutlined
                    style={{ color: "#5da1fa" }}
                    onClick={() => requestSort(key)}
                  />
                ) : (
                  <SortDescendingOutlined
                    style={{ color: "#5da1fa" }}
                    onClick={() => requestSort(key)}
                  />
                )}
              </th>
            ))}
            <th>
              <PlusOutlined
                style={{ color: "#5da1fa" }}
                onClick={onAddClickHandler}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <Rows items={items} />
        </tbody>
      </table>
      <FormComponent />
    </div>
  );
};

export default Table;
