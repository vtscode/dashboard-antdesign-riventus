import React from 'react';
import { connect } from 'react-redux';
import BaseLayout from "../frame/Base";
import { getAuth } from "redux/reselect";
import { EllipsisOutlined,FolderOpenTwoTone } from '@ant-design/icons';
import { Button,Menu, Dropdown, Typography } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.rhivent.github.io/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.rhivent.github.io/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.rhivent.github.io/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={menu}>
      <Button
        style={{
          border: 'none',
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: 'top',
          }}
        />
      </Button>
    </Dropdown>
  );
};

const Home = (props) => {
  const contentProps = {
    breadcrumb : [
      { text : 'Home' },
    ],
    title : `Hi ${props.userLogin.user.username.toUpperCase()}, Welcome Home`,
    extra : {
      avatar : { src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' },
      extra :[
        <Button key="today" type="text" icon={<FolderOpenTwoTone />}><Typography.Text strong> Today</Typography.Text></Button>,
        <DropdownMenu key="more" />,
      ]
    }
  }

  return(
  <BaseLayout {...contentProps}>
    <div className="content">
      <div className="main">Home page</div>
      <div className="extra">WHATS !</div>
    </div>
  </BaseLayout>
  );
};

const mapStateToProps = (state) => ({
  userLogin : getAuth(state),
});

export default connect(mapStateToProps)(Home);