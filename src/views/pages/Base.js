import React from 'react';
import { Result, Button} from "antd";
import { connect } from 'react-redux';
import { clearAuth } from "../../redux/auth/action";

const Base = (props) => {
  const {loggedOut,auth} = props;
  console.log(props);
  
  return(<>
    <Result
      status="success"
      title={`Anda sedang di page : ${props.location.pathname}`}
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console" onClick={loggedOut}>
          Logout
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
    <pre>
      {JSON.stringify(auth?.user,undefined,2)}
    </pre>
    </>
  );
};
const mapStateToProps = ({auth}) => ({auth});
const mapDispatchToProps = dispatch => ({
  loggedOut : () => dispatch(clearAuth())
})
export default connect(mapStateToProps,mapDispatchToProps)(Base);