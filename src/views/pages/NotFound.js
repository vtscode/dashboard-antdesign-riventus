import React from 'react';
import { Result } from 'antd';
import BaseLayout from "../frame/Base";

const NotFound = (props) => {
  
  return (<BaseLayout>
    <Result
      status="404"
      title="404"
      subTitle="Maaf, Halaman yang Anda cari tidak ada."
      extra=""
    />
  </BaseLayout>
  );
}

export default NotFound;