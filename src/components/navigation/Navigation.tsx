import { FC } from "react";

import { QuestionCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import style from "./Navigation.module.scss";

const items = [
  {
    label: (
      <Link to="/first">
        <QuestionCircleOutlined className={style.navIcon} />
        <span>Вопрос 1</span>
      </Link>
    ),
    key: "Вопрос 1",
  },
  {
    label: (
      <Link to="/second">
        <QuestionCircleOutlined className={style.navIcon} />
        <span>Вопрос 2</span>
      </Link>
    ),
    key: "Вопрос 2",
  },
  {
    label: (
      <Link to="/third">
        <QuestionCircleOutlined className={style.navIcon} />
        <span>Тестовая задача</span>
      </Link>
    ),
    key: "Вопрос 3",
  },
];

const Navigation: FC = () => {
  return (
    <div className={style.menuContainer}>
      <Menu style={{ width: 256 }} mode="vertical" items={items} />
    </div>
  );
};

export default Navigation;
