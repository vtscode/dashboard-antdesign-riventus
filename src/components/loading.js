import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default (props) => {
  return (
    <Spin 
      spinning={props.loading} 
      indicator={<LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />} 
      delay={400} 
      size="large" 
      tip="Loading data..."
    >
      {props.children}
    </Spin>
  );
};