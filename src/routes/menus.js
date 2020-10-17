import React from 'react';
import { UserOutlined, 
  LaptopOutlined, 
  NotificationOutlined 
} from '@ant-design/icons';
import pathName from "./pathName";

const { home,pages } = pathName;

export default {
  items: [
    { name: 'Home', url: home, icon: <UserOutlined/> },
    {
      name: 'Pages',
      icon: <NotificationOutlined />,
      url: pages.page1,
      children: [
        { name: 'Page 1', url: pages.page1, icon: <LaptopOutlined /> },
      ]
    },
  ]
}