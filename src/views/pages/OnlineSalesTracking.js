/* eslint-disable */
import React from 'react';
import Highcharts from 'highcharts';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { Row,Col,Table } from "antd";
import { colorGenerator } from "utils";
import { OnlineSalesTracking } from "../sampleData";
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis,
Title, Legend, ColumnSeries, SplineSeries, PieSeries } from 'react-jsx-highcharts';
const App = (props) => {
  const { home } = pathName;
  console.log(props);

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : 'Online Sales Tracking' },
    ],
    title : 'Online Sales Tracking',
    subtitle : 'Keeps you up to speed by tracking metrics of your business such as sales and profits. This dashboard provides a very simplistic view of your business and yet it is very powerful.',
  }
  console.log(colorGenerator());

  return(
    <BaseLayout {...contentProps}>
      <Row>
        <Col xs={24} md={12} lg={12} xl={12}>
          <HighchartsChart>
            <Chart />
            <Title>Product Profit per Product</Title>
            <Legend />
            <XAxis categories={['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5']} />
            <YAxis labels={{format: '${value}.00'}} colors={colorGenerator()}>
              {OnlineSalesTracking.barData.map((column,idx) => <ColumnSeries key={idx} name={column.name} data={column.data}/>)}
              {/* <SplineSeries name="Average" data={[3, 2.67, 3, 6.33, 3.33]} /> */}
              {/* <PieSeries name="Total consumption" data={OnlineSalesTracking.pieData} center={[100, 0]} size={100} showInLegend={false} /> */}
            </YAxis>
          </HighchartsChart>
        </Col>
        <Col xs={24} md={24} lg={12} xl={12}>
          <HighchartsChart>
            <Chart />
            <Title>% Income per Product</Title>
            <Legend />
            <PieSeries 
              name="Income per Product"
              data={OnlineSalesTracking.pieData} 
              center={[200, 100]} 
              size={100} showInLegend
            />
            </HighchartsChart>
        </Col>
        <Col span={24}>
        <Table
          pagination={{
            hideOnSinglePage : true,
          }}
          dataSource={OnlineSalesTracking.tableData}
          columns={OnlineSalesTracking.columnTable}
        />
        </Col>
      </Row>
    </BaseLayout>
  )
}

export default withHighcharts(App, Highcharts);