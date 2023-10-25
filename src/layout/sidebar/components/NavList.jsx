import React from "react";
import "../Sidebar.css";
import {
  FaTachometerAlt,
  FaAddressBook,
  FaUsers,
  FaCopy,
  FaExchangeAlt,
} from "react-icons/fa";
import NavItem from "./NavItem";

const NavList = ({ isOpen, route, setClose }) => {
  const role = localStorage.getItem("role");

  const navItems = [
    { path: "dashboard", text: "Dashboard", icon: <FaTachometerAlt /> },
    role === "Administrator"
      ? { path: "librarians", text: "Bibliotekari", icon: <FaAddressBook /> }
      : null, 
    { path: "students", text: "Ucenici", icon: <FaUsers /> },
    { path: "books", text: "Knjige", icon: <FaCopy /> },
    { path: "authors", text: "Autori", icon: <FaAddressBook /> },
    {
      path: "rentingBooks/izdate-knjige",
      text: "Izdavanje Knjiga",
      icon: <FaExchangeAlt />,
    },
  ].filter(Boolean);

  return (
    <>
      {navItems.map((item) => (
        <li key={item.path}>
          <NavItem
            isOpen={isOpen}
            setClose={setClose}
            active={route === item.path}
            path={item.path}
            text={item.text}
            icon={React.cloneElement(item.icon, {
              className: route === item.path ? "icon activeIcon" : "icon",
            })}
          />
        </li>
      ))}
    </>
  );
};

export default NavList;
