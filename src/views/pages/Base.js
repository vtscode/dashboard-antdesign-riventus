import React from 'react';
import { Result, Button} from "antd";

export default (props) => {
  console.log(props);
  
  return(
    <Result
      status="success"
      title={`Anda sedang di page : ${props.location.pathname}`}
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console" onClick={() => {}}>
          Logout
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};