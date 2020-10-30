import React from 'react';
import { UserOutlined, 
  LaptopOutlined,WindowsOutlined,
  NotificationOutlined,
  FormOutlined,SnippetsOutlined,UsergroupAddOutlined
} from '@ant-design/icons';
import pathName from "./pathName";

const { home,pages } = pathName;

export default {
  items: [
    { name: 'Home', url: home, icon: <UserOutlined/> },
    {
      name: 'Pages',
      icon: <WindowsOutlined />,
      url: pages.page1,
      children: [
        { name: 'Online Sales Tracking', url: pages.onlinesalestracker, icon: <SnippetsOutlined /> },
        { name: 'Website Budget Tool', url: pages.websitebudgettool, icon: <LaptopOutlined /> },
        { name: 'Event Budget', url: pages.eventbudget, icon: <SnippetsOutlined /> },
        { name: 'Family Budget', url: pages.familybudget, icon: <UsergroupAddOutlined /> },
      ]
    },
    { name: 'Forms', url: pages.forms, icon: <FormOutlined/> },
    { name: 'PDF Example', url: pages.pdfexample, icon: <FormOutlined/> },
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