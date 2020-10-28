import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { titleNameByPathUrl } from "utils";
import useCustomReducer from "hooks/useCustomReducer";
import { Card,Typography,Row,Col,Space,Statistic } from 'antd';
import { TableData,ExampleData } from "../sampleData/EventBudget";

export const DataContext = React.createContext({});
const initialData = {
  total : {
    expense : 0,
    income : 0,
    profit : 0,
  },
};
export default (props) => {
  const { home } = pathName;
  const [dataReducer,reducerFunc] = useCustomReducer(initialData);
  console.log(props);

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : `This is Subtitle page ${titleNameByPathUrl(props.location.pathname)}`,
  }

  return(
    <BaseLayout {...contentProps}>
      <DataContext.Provider value={{dataReducer,reducerFunc}}>
        <Typography.Title level={3}>EVENT NAME</Typography.Title>
        <Row gutter={16}>
          <Col xs={24} md={12} lg={8} xl={8}>
            <Card title="Expense">
              <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
                <Statistic title="Estimated ($)" value={ExampleData.totalExpenses.estimated} />
                <Statistic title="Actual ($)" value={ExampleData.totalExpenses.actual} />
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <Card title="Income">
              <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
                <Statistic title="Estimated ($)" value={ExampleData.totalIncome.estimated} />
                <Statistic title="Actual ($)" value={ExampleData.totalIncome.actual} />
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8} xl={8}>
            <Card title="Profit - Loss Summary">
              <Space direction="horizontal" style={{display:'flex',justifyContent:'space-evenly'}}>
                <Statistic title="Estimated ($)" value={ExampleData.totalIncome.estimated - ExampleData.totalExpenses.estimated} />
                <Statistic title="Actual ($)" value={ExampleData.totalIncome.actual - ExampleData.totalExpenses.actual} />
              </Space>
            </Card>
          </Col>
        </Row>
        <hr/>
        <TableData type="expense" dataSource={ExampleData.expense} />
        <hr/>
        <TableData type="income" dataSource={ExampleData.income} />
      </DataContext.Provider>
    </BaseLayout>
  )
}