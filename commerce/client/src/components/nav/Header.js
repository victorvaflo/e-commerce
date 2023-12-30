import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Your Brand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Menu
              onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              className="navbar-nav ml-auto align-items-center menu-bg-gray"
            >
              <Item key="shop" className="nav-item">
                <div className="nav-item-container">
                  <Link to="/shop" className="nav-link">
                    <span>
                      <ShoppingOutlined style={{ marginRight: "0.25rem", fontSize: "1.2rem" }} />
                      <span>Shop</span>
                    </span>
                  </Link>
                </div>
              </Item>

              <Item key="cart" className="nav-item">
                <div className="nav-item-container">
                  <Link to="/cart" className="nav-link">
                    <span>
                      <ShoppingCartOutlined style={{ marginRight: "0.25rem", fontSize: "1.2rem" }} />
                      {/* <Badge count={cart.length} offset={[9, 0]}> */}
                        <span>Cart</span>
                      {/* </Badge> */}
                    </span>
                  </Link>
                </div>
              </Item>

              {!user && (
                <Item key="register" icon={<UserAddOutlined />} className="nav-item">
                  <div className="nav-item-container">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </div>
                </Item>
              )}

              {!user && (
                <Item key="login" icon={<UserOutlined />} className="nav-item">
                  <div className="nav-item-container">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </div>
                </Item>
              )}

              {user && (
                <SubMenu
                  icon={<SettingOutlined />}
                  title={user.email && user.email.split("@")[0]}
                >
                  {user && user.role === "subscriber" && (
                    <Item>
                      <div className="nav-item-container">
                        <Link to="/user/history" className="dropdown-item">
                          Dashboard
                        </Link>
                      </div>
                    </Item>
                  )}

                  {user && user.role === "admin" && (
                    <Item>
                      <div className="nav-item-container">
                        <Link to="/admin/dashboard" className="dropdown-item">
                          Dashboard
                        </Link>
                      </div>
                    </Item>
                  )}

                  <Item icon={<LogoutOutlined />} onClick={logout}>
                    <div className="nav-item-container">Logout</div>
                  </Item>
                </SubMenu>
              )}

              <div className="navbar-nav flex-grow-1">
                <Item key="search">
                  <Search />
                </Item>
              </div>
            </Menu>
          </div>
        </div>
      </nav>

      <style>
        {`
        .navbar {
          background-color: #f8f9fa;
        }

        .container {
          background-color: #f8f9fa;
        }

        .menu-bg-gray {
          background-color: #f8f9fa;
        }

        .navbar-nav .nav-item .nav-link {
          padding: 0;
        }

        .navbar-nav .nav-item .nav-link span {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          height: 100%;
        }

        .navbar-nav .anticon {
          margin-right: 0.25rem;
        }

        .nav-item-container {
          border: 2px solid #ced4da;
          border-radius: 8px;
          background-color: white;
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 1rem;
        }

        .nav-item-container:hover {
          border-color: #adb5bd;
        }
        `}
      </style>
    </header>
  );
};

export default Header;
