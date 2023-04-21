import { LogoutOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React from "react";

export const Logout = () => {
  const handleLogout = () => {
    Modal.confirm({
      title: "Cerrar sesión",
      content: "¿Estás seguro de que quieres cerrar sesión?",
      onOk: () => {
        console.log("Cerrando sesión");
      },
    });
  };
  return (
    <Button type="link" onClick={handleLogout}>
      <LogoutOutlined />
    </Button>
  );
};
