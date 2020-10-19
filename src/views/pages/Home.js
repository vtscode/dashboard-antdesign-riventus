import React from 'react';
import BaseLayout from "../frame/Base";

export default (props) => {
  const contentProps = {
    breadcrumb : [
      { text : 'Home' },
    ],
    title : 'Home',
  }

  return(
  <BaseLayout {...contentProps}>
    <div className="content">
      <div className="main">Home page</div>
      <div className="extra">WHATS !</div>
    </div>
  </BaseLayout>
  );
}
