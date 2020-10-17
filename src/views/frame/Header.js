import React from 'react';
import { Avatar, Button, Dropdown, 
  Layout, Menu } from "antd";
import { connect } from 'react-redux';
import styled from "styled-components";
import { noImagePath } from "../../utils";
import pathName from "../../routes/pathName";
import { UserOutlined } from '@ant-design/icons';
import { clearAuth } from "../../redux/auth/action";

const ImageHead = styled.div`
  width: 120px;
  height: 31px;
  margin: 16px 28px 16px 0;
  float: left;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url(${props => props.src && props.src}) no-repeat center center; 
`
const menu = (props,handleLogout) => (
  <Menu mode="horizontal">
    <Menu.Item key="1"><Button type="text" onClick={() => {}}>{props?.auth?.user?.user?.username}</Button></Menu.Item>
    <Menu.Item key="2"><Button type="text" onClick={handleLogout}>LOGOUT</Button></Menu.Item>
  </Menu>
);

const {Header} = Layout;
const App = (props) => {

  const handleLogout = () => {
    props.loggedOut();
    window.location.replace(pathName.login);
  }

  return(<>
    <Header className="header">
      <ImageHead src={noImagePath} />
      <Dropdown overlay={() => menu(props,handleLogout)}>
        <Avatar 
          className="header__avatar"
          size={50} 
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Header>
  </>);
};

const mapStateToProps = ({auth}) => ({auth});
const mapDispatchToProps = dispatch => ({
  loggedOut : () => dispatch(clearAuth())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
