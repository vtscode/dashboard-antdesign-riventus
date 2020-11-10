import React from 'react';
import { Row,Col } from 'antd';
import pathName from "routes/pathName";
import BaseLayout from "views/frame/Base";
import { titleNameByPathUrl } from "utils";
import buslineData from "./dummy/busline.json";
// import ReactEcharts from 'echarts-for-react';
import 'echarts/extension/bmap/bmap';
import echarts from 'echarts';
// import BMap from 'BMap';
/* eslint-disable */

export default (props) => {
  const { home } = pathName;
  const [data,] = React.useState(buslineData);

  let hStep = 300 / (data.length - 1);
  let busLines = [].concat.apply([], data.map(function (busLine, idx) {
    let prevPt;
    let points = [];
    for (let i = 0; i < busLine.length; i += 2) {
      let pt = [busLine[i], busLine[i + 1]];
      if (i > 0) {
        pt = [
          prevPt[0] + pt[0],
          prevPt[1] + pt[1]
        ];
      }
      prevPt = pt;

      points.push([pt[0] / 1e4, pt[1] / 1e4]);
    }
    return {
      coords: points,
      lineStyle: {
        normal: {
          color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
        }
      }
    };
  }));

  const option = {
    bmap: {
      center: [116.46, 39.92],
      zoom: 10,
      roam: true,
      mapStyle: {
        'styleJson': [
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': {
              'color': '#031628'
            }
          },
          {
            'featureType': 'land',
            'elementType': 'geometry',
            'stylers': {
              'color': '#000102'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#0b3d51'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#08304b'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -70
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry.fill',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#857f7f'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#000000'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
              'color': '#022338'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'color': '#062032'
            }
          },
          {
            'featureType': 'boundary',
            'elementType': 'all',
            'stylers': {
              'color': '#465b6c'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'all',
            'stylers': {
              'color': '#022338'
            }
          },
          {
            'featureType': 'label',
            'elementType': 'all',
            'stylers': {
              'visibility': 'off'
            }
          }
        ]
      }
    },
    series: [{
      type: 'lines',
      coordinateSystem: 'bmap',
      polyline: true,
      data: busLines,
      silent: true,
      lineStyle: {
        // color: '#c23531',
        // color: 'rgb(200, 35, 45)',
        opacity: 0.2,
        width: 1
      },
      progressiveThreshold: 500,
      progressive: 200
    }, {
      type: 'lines',
      coordinateSystem: 'bmap',
      polyline: true,
      data: busLines,
      lineStyle: {
        width: 0
      },
      effect: {
        constantSpeed: 20,
        show: true,
        trailLength: 0.1,
        symbolSize: 1.5
      },
      zlevel: 1
    }]
  };

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
        <Col xs={24} md={12} lg={12} xl={12}>
          {/* <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            onChartReady={(e) => {}}
            opts={{}}
            style={{height:'97%'}}
          /> */}
        </Col>
      </Row>
    </BaseLayout>
  )
}