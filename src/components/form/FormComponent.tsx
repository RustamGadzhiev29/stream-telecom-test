import React, { ChangeEvent, useState } from "react";

import { Input, Button, Form } from "antd";

import { addData } from "../../store/slice/slice";
import { useAppSelector, useTypedDispatch } from "../../store/store";
import { DataType } from "../../store/types/types";

import style from "./TextArea.module.scss";

const FormComponent: React.FC = () => {
  const data = useAppSelector((state) => state.data);
  const dispatch = useTypedDispatch();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = e.currentTarget.value;

    setError(false);

    setValue(newValue);
  };

  const onClickHandler = (): void => {
    setValue(JSON.stringify(data));
  };

  const addFormData = (value: string): void => {
    try {
      if (Array.isArray(JSON.parse(value))) {
        const modData = [...JSON.parse(value)].map((item) => {
          const newItem: DataType = {
            name: item.name,
            value: item.value,
          };

          return newItem;
        });

        dispatch(addData(modData));
      } else if (typeof JSON.parse(value) === "object") {
        const modData = JSON.parse(value);

        dispatch(addData(modData));
      }
      setValue("");
    } catch (e: any) {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <Form>
        <Form.Item
          {...(error && {
            help: "enter data in json format",
            validateStatus: "error",
          })}
        >
          <Input.TextArea
            rows={4}
            value={value}
            onChange={onChangeHandler}
            placeholder="enter data in json"
          />
        </Form.Item>
      </Form>
      <div className={style.allButtons}>
        <div>
          <Button type="primary" onClick={onClickHandler}>
            Сохранить
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={() => addFormData(value)}>
            Загрузить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
