import React from 'react';
import BaseLayout from "../frame/Base";
import pathName from "routes/pathName";
import { titleNameByPathUrl } from "utils";

export default (props) => {
  const { home } = pathName;
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
      <div className="content">
        <div className="main">{titleNameByPathUrl(props.location.pathname)}</div>
        <div className="extra">Page</div>
      </div>
    </BaseLayout>
  )
}