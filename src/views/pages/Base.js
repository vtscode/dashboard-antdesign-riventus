import React from 'react';
import { Menu,Layout,Breadcrumb, Button} from "antd";
import { connect } from 'react-redux';
import { clearAuth } from "../../redux/auth/action";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Sider,Header,Content,Footer} = Layout;

const Base = (props) => {
  const {loggedOut,auth} = props;
  console.log(props);
  const [collapsed,setcollapsed] = React.useState(false);

  const onCollapse = collapsed => {
    setcollapsed(collapsed);
  };
  
  return(
  <Layout style={{ minHeight: '100vh' }}>
    <Sider
      collapsible 
      collapsed={collapsed} 
      onCollapse={onCollapse}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{auth?.user?.username ?? 'Login'}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ minHeight: '100%' }}>
          <pre>
            {JSON.stringify(auth?.user,undefined,2)}
          </pre>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Baked with <span role="img" aria-label="&#x1F49C;">&#x1F49C;</span> by <Button type="text" onClick={() => window.location.replace('https://rhivent.github.io')}>Riventus</Button>
      </Footer>
    </Layout>
  </Layout>
  );
};
const mapStateToProps = ({auth}) => ({auth});
const mapDispatchToProps = dispatch => ({
  loggedOut : () => dispatch(clearAuth())
})
export default connect(mapStateToProps,mapDispatchToProps)(Base);