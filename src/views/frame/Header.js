import React from 'react';
import { Avatar, Button, Dropdown, 
  Layout, Menu } from "antd";
import { connect } from 'react-redux';
import styled from "styled-components";
import { noImagePath } from "../../utils";
import pathName from "../../routes/pathName";
import { UserOutlined } from '@ant-design/icons';
import { clearAuth } from "../../redux/auth/action";
import { changeTheme } from "../../redux/theme/action";

const {Header} = Layout;
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
`;
const AvatarStyled = styled(Avatar)`
  float:right;
  transform:translateY(.3em);
  background-color: #fff;
  color: darkolivegreen;
`;
const HeaderStyled = styled(Header)`
  background-color: ${props => props.color};
`;

const menu = (props,handleLogout) => {
  const changeTheme = () => {
    const newTheme = props.theme.theme === 'light' ? 'dark' : 'light';
    const newColor = props.theme.colorheader === '#001529' ? '#e0a453' : '#001529';
    props.changeTheme({theme : newTheme, colorheader : newColor});
  }
  const changeMode = () => {
    const newMode = props.theme.mode === 'vertical' ? 'inline' : 'vertical';
    props.changeTheme({mode : newMode });
  }
  
  return(
  <Menu>
    <Menu.Item key="1"><Button type="text">{props?.auth?.user?.user?.username?.toUpperCase()}</Button></Menu.Item>
    <Menu.Item key="2"><Button type="text" onClick={changeTheme}>Theme : {props.theme.theme}</Button></Menu.Item>
    <Menu.Item key="3"><Button type="text" onClick={changeMode}>Sidebar : {props.theme.mode}</Button></Menu.Item>
    <Menu.Item key="4"><Button type="text" onClick={handleLogout}>LOGOUT</Button></Menu.Item>
  </Menu>
)};

const App = (props) => {
  // const {state,setState} = React.useContext(LayoutContext);
  const handleLogout = () => {
    props.loggedOut();
    window.location.replace(pathName.login);
  }

  return(<>
    <HeaderStyled color={props.theme.colorheader}>
      <ImageHead src={noImagePath} />
      <Dropdown overlay={() => menu(props,handleLogout)}>
        <AvatarStyled 
          size={50} 
          icon={<UserOutlined />}
        />
      </Dropdown>
    </HeaderStyled>
  </>);
};

const mapStateToProps = ({auth,theme}) => ({auth,theme});
const mapDispatchToProps = dispatch => ({
  loggedOut : () => dispatch(clearAuth()),
  changeTheme : (value) => dispatch(changeTheme(value)), //passing value {theme : ,colorheader : } from action menu above
})

export default connect(mapStateToProps,mapDispatchToProps)(App);