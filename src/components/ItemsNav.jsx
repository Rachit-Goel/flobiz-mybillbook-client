import React from "react";
import styled from "styled-components";
import UserStorage from "../utils/userStorage";

const Menu = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    position: relative;
    padding: 0.75em 1em;
    background: white;
    color: var(--white);
    justify-content: space-between;
    display: block;
`;
const MenuItems1 = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    color: black;
    padding-right: 2em;
`;
const MenuItem = styled.div`
    padding: 0.5em 0.75em;
    margin-right: 0.25em;
    font-weight: 600;
    font-size: 1em;
    transition: color 0.06s linear;
    user-select: none;
`;

const ItemsNav = () => {
  const { mobileNo, storeData } = UserStorage();
  const logOut = () => {
    window.location.reload(false);
    storeData({});
  };

  return (
    <Menu>
      <MenuItems1>
        <MenuItem id="username" style={{alignSelf: "flex-start"}}>
          {mobileNo}
        </MenuItem>
        <MenuItem onClick={logOut}>
          Logout
        </MenuItem>
      </MenuItems1>
    </Menu>
  );
};

export default ItemsNav;
