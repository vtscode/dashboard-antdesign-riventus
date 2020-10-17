import React from 'react';
import { Layout,Menu } from "antd";
import { Link } from 'react-router-dom';
import menus from "../../routes/menus";

const {SubMenu} = Menu;

export default () => {
  const [collapsed,setcollapsed] = React.useState(false);

  const onCollapse = collapsed => {
    setcollapsed(collapsed);
  };

  return(
    <Layout.Sider
      collapsible 
      collapsed={collapsed} 
      onCollapse={onCollapse}
      className="site-layout-background"
    >
      <Menu
        mode="vertical"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
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
      </Menu>
    </Layout.Sider>
  );
};