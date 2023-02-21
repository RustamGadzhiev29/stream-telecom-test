import { FC, ChangeEvent, useState, useCallback, FocusEvent } from "react";

import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

// import { EditableForm } from "../../editable/EditableForm";

import {
  changeNameTitle,
  changeValueTitle,
  removeData,
} from "../../../../store/slice/slice";
import { useTypedDispatch } from "../../../../store/store";

import style from "./Row.module.scss";

type PropsType = {
  name: string;
  value: string;
  id: number;
};

const Row: FC<PropsType> = ({ name, value, id }) => {
  const [edit, setEdit] = useState(false);
  const [nameTitle, setNameTitle] = useState(name);
  const [valueTitle, setValueTitle] = useState(value);
  const dispatch = useTypedDispatch();

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const newTitle = e.currentTarget.value;

    setNameTitle(newTitle);
  };
  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const newTitle = e.currentTarget.value;

    setValueTitle(newTitle);
  };

  const onClickHandler = (): void => {
    setEdit(true);
  };
  const contains = (parent: any, child: any): boolean => {
    if (!child || !child.parentElement) return false;
    if (child.parentElement === parent) return true;

    return contains(parent, child.parentElement);
  };

  const handleBlur = (e: FocusEvent<HTMLTableRowElement, Element>): void => {
    const target = e.relatedTarget;
    const parent = e.currentTarget;

    if (!contains(parent, target)) {
      setEdit(false);
    }
  };
  const onPressEnter = (e: FocusEvent<HTMLInputElement, Element>): void => {
    console.log(e.target.tagName);
    if (e.target.tagName === "INPUT") {
      return;
    }
    setEdit(false);
    editNameTitle(nameTitle, id);
    editValueTitle(valueTitle, id);
  };

  const editNameTitle = useCallback(
    (title: string, id: number) => {
      return dispatch(changeNameTitle({ name: title, id }));
    },
    [dispatch]
  );
  const editValueTitle = useCallback(
    (title: string, id: number) => {
      return dispatch(changeValueTitle({ value: title, id }));
    },
    [dispatch]
  );
  const onDeleteHandler = useCallback(
    (id: number) => {
      return dispatch(removeData({ id }));
    },
    [dispatch]
  );

  return (
    <tr onBlur={handleBlur}>
      {" "}
      {edit ? (
        <>
          <td>
            <Form>
              <Form.Item name="name" initialValue={name}>
                <Input
                  // onPressEnter={onPressEnter}
                  onChange={onChangeNameHandler}
                  size="large"
                />
              </Form.Item>
            </Form>
          </td>
          <td>
            <Form onFinish={onPressEnter}>
              <Form.Item name="value" initialValue={value}>
                <Input
                  // onPressEnter={onPressEnter}
                  onChange={onChangeValueHandler}
                  size="large"
                />
              </Form.Item>
            </Form>
          </td>
          <td>
            <div className={style.allButtons}>
              <EditOutlined
                className={style.icon}
                style={{ color: "#5da1fa" }}
                onClick={onClickHandler}
              />
              <DeleteFilled
                onClick={() => onDeleteHandler(id)}
                className={style.icon}
                style={{ color: "#DF4444" }}
              />
            </div>
          </td>
        </>
      ) : (
        <>
          <td>{name}</td>
          <td>{value}</td>
          <td>
            <div className={style.allButtons}>
              <EditOutlined
                className={style.icon}
                style={{ color: "#5da1fa" }}
                onClick={onClickHandler}
              />
              <DeleteFilled
                onClick={() => onDeleteHandler(id)}
                className={style.icon}
                style={{ color: "#DF4444" }}
              />
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
