import React from 'react';
import { Layout,Menu } from "antd";
import { connect } from 'react-redux';
import menus from "../../routes/menus";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const {SubMenu} = Menu;
const {Sider} = Layout;
const SiderStyled = styled(Sider)`
  min-height:80vh;

  .ant-layout-sider-trigger{
    position : absolute;
    color : #555;
    background-color:${props => props.color};
  }
`;

const MenuStyled = styled(Menu)`
  height: 100%; 
  border-right: 0;
`;
const Sidebar = ({theme}) => {
  const [collapsed,setcollapsed] = React.useState(false);

  const onCollapse = collapsed => {
    setcollapsed(collapsed);
  };

  return(
    <SiderStyled
      collapsible 
      collapsed={collapsed} 
      onCollapse={onCollapse}
      color={theme.colorheader}
    >
      <MenuStyled
        mode={theme.mode}
        theme={theme.theme}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        {menus.items.map((x,idx) => {
          if(x.children){
            return (
            <SubMenu key={idx} icon={x.icon} title={x.name}>
              {
                x.children.map((child,index) => 
                (<Menu.Item key={index} icon={child.icon}><Link to={child.url}>{child.name}</Link></Menu.Item>))
              }
            </SubMenu>);
          }
          return <Menu.Item key={x.name} icon={x.icon}><Link to={x.url}>{x.name}</Link></Menu.Item>;
        })}
      </MenuStyled>
    </SiderStyled>
  );
};
const mapStateToProps = ({theme}) => ({theme});
export default connect(mapStateToProps)(Sidebar);