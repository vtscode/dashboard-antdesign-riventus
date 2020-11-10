import React from 'react';
import { Row,Col, Card } from 'antd';
import optionData from "./dummy/tree";
import pathName from "routes/pathName";
import BaseLayout from "views/frame/Base";
import { titleNameByPathUrl } from "utils";
import ReactEcharts from 'echarts-for-react';
/* eslint-disable */

export default (props) => {
  const { home } = pathName;

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : 'This is Subtitle ' + titleNameByPathUrl(props.location.pathname),
  };

  return(
    <BaseLayout {...contentProps}>
      <Row>
        <Col span={24}>
          <Card>
            <ReactEcharts
              option={optionData}
              notMerge={true}
              lazyUpdate={true}
              theme={"theme_name"}
              onChartReady={(e) => {}}
              opts={{}}
              style={{height:800}}
            />
          </Card>
        </Col>
      </Row>
    </BaseLayout>
  )
}