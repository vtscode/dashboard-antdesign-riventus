import React from 'react';
import { connect } from 'react-redux';
import BaseLayout from "../frame/Base";
import { getAuth } from "redux/reselect";
import { Button,Menu, Dropdown, Typography,Space,
  Statistic, Row, Col,Tag,Card,Tabs } from "antd";
import { TableView } from '../sampleData/Home';
import { EllipsisOutlined,FolderOpenTwoTone } from '@ant-design/icons';

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
  };
  const operations = {
    right: <Button>Last Month</Button>,
  }

  return(
  <BaseLayout {...contentProps}>
    <>
    <Row>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            title={<Space direction="horizontal"><Typography>Total Revenue</Typography><Tag color="green">+12.5%</Tag></Space>} 
            value={32621.72} 
            precision={2} 
          />
          <Typography.Text>433 Orders</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            title={<Space direction="horizontal"><Typography>Subscribers</Typography><Tag color="green">+32.5%</Tag></Space>} 
            value={484205} 
            precision={2} 
          />
          <Typography.Text>$56 Average Order</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            title={<Space direction="horizontal"><Typography>Conversations</Typography><Tag color="red">-3.4%</Tag></Space>} 
            value={552553} 
            precision={2} 
          />
          <Typography.Text>5min Average Response Time</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8} lg={6} xl={6}>
        <Card bordered="false">
          <Statistic 
            formatter={val => `${val}%`} 
            title={<Space direction="horizontal"><Typography>Popup Conversation Rate</Typography><Tag color="green">+32.5%</Tag></Space>} 
            value={25} 
            precision={0} 
          />
          <Typography.Text>5% Sales Conversation Rate</Typography.Text>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col></Col>
    </Row>
    <Row>
      <Col xs={24} md={24} lg={6} xl={6}>
        {/* https://echarts.apache.org/examples/en/editor.html?c=line-marker&theme=light */}
      </Col>
      <Col xs={24} md={24} lg={18} xl={18}>
        <Tabs tabBarExtraContent={operations}>
          <Tabs.TabPane tab="Automations" key="1">
            <TableView />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Campaigns" key="2">
            <Typography.Text strong>Campaigns</Typography.Text>
            <TableView />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Segments" key="3">
            <Typography.Text strong>Segments</Typography.Text>
            <TableView />
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
    </>
  </BaseLayout>
  );
};

const mapStateToProps = (state) => ({
  userLogin : getAuth(state),
});

export default connect(mapStateToProps)(Home);