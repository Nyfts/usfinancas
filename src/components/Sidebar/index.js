import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaPlus,
  FaTag,
  FaGithub,
  FaTags,
} from "react-icons/fa";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "./style.scss";

const Sidebar = ({ sidebarCollapsed }) => {
  return (
    <ProSidebar collapsed={sidebarCollapsed}>
      <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 16,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textDecoration: 'none',
              color: "#fff",
            }}
          >
            USFinanças
          </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem style={{ color: "#fff" }} icon={<FaClipboardList />}>
            <Link style={{ color: "#fff" }} to="/dashboard">
              Inicio
            </Link>
          </MenuItem>
          <MenuItem style={{ color: "#fff" }} icon={<FaPlus />}>
            <Link style={{ color: "#fff" }} to="/transacoes">
              Transações
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/Nyfts/TeixeiraFinancas"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ marginLeft: 5 }} />
            Github
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
