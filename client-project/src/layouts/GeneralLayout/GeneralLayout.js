import { Layout } from "antd";
import React, { useState } from "react";
import { MenuSider } from "../../components/NewComponent/MenuSider/MenuSider";
import { MenuTop } from "../../components/NewComponent/MenuTop/MenuTop";
import { FooterPage } from "../../components/Footer/FooterPage";
import { Logout } from "../../components/NewComponent/Logout/Logout";
import "./GeneralLayout.scss";

export const GeneralLayout = (props) => {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="general-layout"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="general-layout-header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
          <Logout className="general-layout-header-logout"></Logout>
        </Header>
        <Content className="general-layout-content" t>
          {children}
        </Content>
        <Footer className="general-layout-footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};
