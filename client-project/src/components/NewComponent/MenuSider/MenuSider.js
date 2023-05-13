import React from "react";
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import "./MenuSider.scss";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = (e) => {
    const path = new URL(e.key, window.location.origin).pathname;
    console.log(path);
    navigate(path);
  };

  const menuItems = [
    { key: "users", icon: <TeamOutlined />, label: "Usuarios" },
    {
      key: "products",
      icon: <AppstoreOutlined />,
      label: "Portafolio de servicios",
    },
    {
      key: "clients",
      icon: <HomeOutlined />,
      label: "Clientes",

      subMenu: [
        {
          key: "clients/list",
          icon: <TeamOutlined />,
          label: "Lista de clientes",
        },
        { key: "clients/new", icon: <TeamOutlined />, label: "Nuevo Cliente" },
      ],
    },
    {
      key: "services",
      icon: <HomeOutlined />,
      label: "Services",

      subMenu: [
        {
          key: "services/list",
          icon: <TeamOutlined />,
          label: "Lista de servicios",
        },
        { key: "services/new", icon: <TeamOutlined />, label: "Nuevo servicio" },
      ],
    },
    { key: "news", icon: <SettingOutlined />, label: "Gestión de noticias" },
  ];

  console.log("Valor de defaultSelectedKeys" + [location.pathname]);
  const itemRender = (item, index) => {
    const { icon, label, subMenu } = item;
    const isSelected = location.pathname === item.key;
    if (subMenu) {
      return (
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {subMenu.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
              {subMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        key={item.key}
        icon={React.cloneElement(icon, { className: "menu-item-icon" })}
        className={
          isSelected ? "antd-menu-item ant-item-selected" : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };
  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        mode="inline"
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={menuItems
          .filter((item) => item.subMenu)
          .map((item) => item.key)}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
