import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import styled from "styled-components";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
import { Card,Typography,Row,Col,Space,Statistic,Table } from 'antd';

export default props => {
  const { home } = pathName;
  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : `This is Subtitle page ${titleNameByPathUrl(props.location.pathname)}`,
  }

  const WrapperTitle = styled.div`
    background-image : url(assets/family.png);
    height : 10em;
    display : flex;
    justify-content : center;
    align-items : center;
  `;

  return(
    <BaseLayout {...contentProps}>
      <WrapperTitle>
        <Typography.Title level={3}>Budget Overview</Typography.Title>
      </WrapperTitle>
      <Row>
        <Col xs={24} md={12} lg={12} xl={12}>
          <Row>
            <Col span={24}>
              <Typography.Title level={5}>Overview</Typography.Title>
              <hr/>
              <Table
                pagination={{
                  total : 10,
                  hideOnSinglePage : true,
                }}
                dataSource={[]}
              />
            </Col>
            <Col span={24}>
              <Typography.Title level={5}>Income Summary</Typography.Title>
              <hr/>
              <Table
                pagination={{
                  total : 10,
                  hideOnSinglePage : true,
                }}
                dataSource={[]}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} lg={12} xl={12}>
          <ReactEcharts
            option={{}}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onChartReady={(e) => {}}
            opts={{}} 
          />
        </Col>
      </Row>
    </BaseLayout>
  );
};