import React from "react";
import { ScContainer, ScHeader, ScLayout } from "./styled";
import { NavLink, Outlet } from "react-router-dom";
import Player from "../Player";

interface HeaderItem {
  title: string;
  link: string;
}

const headerItems: HeaderItem[] = [
  { title: "tracks", link: "/" },
  { title: "create track", link: "/create" },
];

const Layout = () => {
  return (
    <ScLayout>
      <ScHeader>
        {headerItems.map(({ title, link }) => (
          <NavLink to={link} className="header-item" key={link}>
            {title}
          </NavLink>
        ))}
      </ScHeader>
      <ScContainer>
        <Outlet />
      </ScContainer>
      <Player />
    </ScLayout>
  );
};

export default Layout;
