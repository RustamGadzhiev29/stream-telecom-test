import { FC } from "react";

import { Card, Space } from "antd";

import style from "./FirstTask.module.scss";

const FirstTask: FC = () => {
  return (
    <div className={style.container}>
      <Space direction="horizontal" size={16}>
        <Card title="Что вернут функции test1 и test2 при их выполнении?">
          <p>
            При вызове test 1() вернется Cool, т.к. первый операнд будет true,
            то следующее выражение будет вычислено.
          </p>
          <p>
            При вызове test 2() вернется true, т.к. первый операнд имеют
            значение true оператор увидит первое истинное значение и вернет его.
          </p>
        </Card>
      </Space>
    </div>
  );
};

export default FirstTask;
