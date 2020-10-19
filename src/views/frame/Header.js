import React from 'react';
import { Avatar, Button, Dropdown, Tooltip,
  Layout, Menu, Space, Typography } from "antd";
import { connect } from 'react-redux';
import styled from "styled-components";
import { noImagePath } from "../../utils";
import pathName from "../../routes/pathName";
import { clearAuth } from "../../redux/auth/action";
import { changeTheme } from "../../redux/theme/action";
import { UserOutlined,BulbOutlined, BulbFilled } from '@ant-design/icons';

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
  background-color: #fff;
  color: darkolivegreen;
`;
const HeaderStyled = styled(Header)`
  background-color: ${props => props.color};
`;
const SpaceStyled = styled(Space)`
  float:right;
`;
const WrapperMenuHeader = styled.div`
  float:right;
`;

const menu = (props,handleLogout) => {
  const changeTheme = () => {
    const newTheme = props.theme.theme === 'light' ? 'dark' : 'light';
    const newColor = props.theme.colorheader === '#001529' ? 'rgb(255, 241, 184)' : '#001529';
    props.changeTheme({theme : newTheme, colorheader : newColor});
  }
  const changeMode = () => {
    const newMode = props.theme.mode === 'vertical' ? 'inline' : 'vertical';
    props.changeTheme({mode : newMode });
  }
  
  return(
  <Menu style={{}}>
    <Menu.Item key="3"><Button type="text" onClick={changeMode}>Sidebar : {props.theme.mode}</Button></Menu.Item>
    <Menu.Item key="4"><Button type="text" onClick={handleLogout}>LOGOUT</Button></Menu.Item>
  </Menu>
)};

const App = (props) => {
  // const {state,setState} = React.useContext(LayoutContext);
  const changeTheme = () => {
    const newTheme = props.theme.theme === 'light' ? 'dark' : 'light';
    const newColor = props.theme.colorheader === '#001529' ? 'rgb(255, 241, 184)' : '#001529';
    props.changeTheme({theme : newTheme, colorheader : newColor});
  }

  const handleLogout = () => {
    props.loggedOut();
    window.location.replace(pathName.login);
  }

  return(<>
    <HeaderStyled color={props.theme.colorheader}>
      <ImageHead src={noImagePath} />
      <WrapperMenuHeader>
        <Tooltip title="Change theme">
          <Button 
            type="text" 
            shape="circle" 
            size="large"
            icon={props.theme.theme === 'light' ? <BulbOutlined /> : <BulbFilled/>} 
            onClick={changeTheme} 
            style={props.theme.theme === 'light' ? {color : 'inherit'} : {color : '#fff'}}
          />
        </Tooltip>
        <Dropdown trigger={['click']} placement="bottomRight" overlay={() => menu(props,handleLogout)}>
          <SpaceStyled direction="horizontal">
          <Typography.Text style={props.theme.theme === 'light' ? {color : 'inherit'} : {color : '#fff'}}>Hi, <strong>{props?.auth?.user?.user?.username}</strong></Typography.Text>
          <AvatarStyled 
            size={30} 
            icon={<UserOutlined />}
          />
          </SpaceStyled>
        </Dropdown>
      </WrapperMenuHeader>
    </HeaderStyled>
  </>);
};

const mapStateToProps = ({auth,theme}) => ({auth,theme});
const mapDispatchToProps = dispatch => ({
  loggedOut : () => dispatch(clearAuth()),
  changeTheme : (value) => dispatch(changeTheme(value)), //passing value {theme : ,colorheader : } from action menu above
})

export default connect(mapStateToProps,mapDispatchToProps)(App);