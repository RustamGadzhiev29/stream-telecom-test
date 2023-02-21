import { FC } from "react";

import { DomainDataType } from "../../../store/types/types";

import Row from "./row/Row";

type PropsType = {
  items: DomainDataType[];
};
const Rows: FC<PropsType> = ({ items }) => {
  return (
    <>
      {items.map((d) => {
        return <Row key={d.id} name={d.name} value={d.value} id={d.id} />;
      })}
    </>
  );
};

export default Rows;
