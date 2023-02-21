import { FC } from "react";

import { Card, Space } from "antd";

import img from "../../common/assets/images/example.png";

import style from "./SecondTask.module.scss";

const SecondTask: FC = () => {
  // const example = {
  //   backgroundImage: `url(${img})`,
  // };

  return (
    <div className={style.container}>
      <Space direction="horizontal" size={16}>
        <Card
          style={{ width: 900 }}
          title="Для чего используется метод preventDefault объекта события при работе с DOM
          (event.preventDefault())?"
        >
          <p>
            preventDefault() — метод события. Этот метод отменяет поведение
            браузера по умолчанию, которое происходит при обработке события.
          </p>
          <b>Пример:</b>
          <p>
            Стандартное поведение callback onSubmit в теге form это перезагрузка
            страницы при вводе данных. Чтобы избежать перезагрузку страницы и
            произвести определенную валедацию данных в callback используют метод
            preventDefault для отмены дефолтного поведения submit
          </p>
          <img alt="example" src={img} />
        </Card>
      </Space>
    </div>
  );
};

export default SecondTask;
