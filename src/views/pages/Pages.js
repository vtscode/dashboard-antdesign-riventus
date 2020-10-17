import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "../../routes/pathName";

export default (props) => {
  const { home } = pathName;
  console.log(props);

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : 'Page' },
    ],
    title : 'Page 1',
    subtitle : 'This is Subtitle page 1',
  }

  return(
    <BaseLayout {...contentProps}>
      <div className="content">
        <div className="main">'asdas'</div>
        <div className="extra">'qwoijklasd/</div>
      </div>
    </BaseLayout>
  )
}