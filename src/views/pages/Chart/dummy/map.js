import echarts from 'echarts';
import buslineJson from "./busline.json";

let hStep = 300 / (buslineJson.length - 1);
  let busLines = [].concat.apply([], buslineJson.map(function (busLine, idx) {
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
const buslineOpt = {
  backgroundColor: '#222',
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

const populationOpt = {
  title: {
    left : 'center',
    text: `Population Density of Hong Kong's 18 Districts (2011)`,
    subtext: 'Population density data comes from Wikipedia',
    sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c} (p / km2)'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
  visualMap: {
    min: 800,
    max: 50000,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered']
    }
  },
  series: [
    {
      name: 'Population density of 18 districts in Hong Kong',
      type: 'map',
      mapType: 'HK', // Custom extended chart type
      label: {
        show: true
      },
      data: [
        {name: 'Central and Western District', value: 20057.34},
        {name: 'Wanchai', value: 15477.48},
        {name: 'East District', value: 31686.1},
        {name: 'South area', value: 6992.6},
        {name: 'Yau Tsim Mong', value: 44045.49},
        {name: 'Sham Shui Po', value: 40689.64},
        {name: 'Kowloon City', value: 37659.78},
        {name: 'Wong Tai Sin', value: 45180.97},
        {name: 'Kwun Tong', value: 55204.26},
        {name: 'Kwai Tsing', value: 21900.9},
        {name: 'Tsuen Wan', value: 4918.26},
        {name: 'Tuen Mun', value: 5881.84},
        {name: 'Yuen Long', value: 4178.01},
        {name: 'North District', value: 2227.92},
        {name: 'Tai Po', value: 2180.98},
        {name: 'Sha Tin', value: 9172.94},
        {name: 'Saigon', value: 3368},
        {name: 'Outlying islands', value: 806.98}
      ],
      //Custom name mapping
      nameMap: {
        'Central and Western': 'Central and Western District',
        'Eastern': 'East District',
        'Islands': 'Outlying islands',
        'Kowloon City': 'Kowloon City',
        'Kwai Tsing': 'Kwai Tsing',
        'Kwun Tong': 'Kwun Tong',
        'North': 'North District',
        'Sai Kung': 'Saigon',
        'Sha Tin': 'Sha Tin',
        'Sham Shui Po': 'Sham Shui Po',
        'Southern': 'South area',
        'Tai Po': 'Tai Po',
        'Tsuen Wan': 'Tsuen Wan',
        'Tuen Mun': 'Tuen Mun',
        'Wan Chai': 'Wanchai',
        'Wong Tai Sin': 'Wong Tai Sin',
        'Yau Tsim Mong': 'Yau Tsim Mong',
        'Yuen Long': 'Yuen Long'
      }
    }
  ]
}

let dataAirQuality = [
  {name: 'Sea Gate', value: 9},
  {name: 'Ordos', value: 12},
  {name: 'Zhaoyuan', value: 12},
  {name: 'Zhoushan', value: 12},
  {name: 'Qiqihar', value: 14},
  {name: 'Yancheng', value: 15},
  {name: 'Chifeng', value: 16},
  {name: 'Qingdao', value: 18},
  {name: 'Rushan', value: 18},
  {name: 'Jinchang', value: 19},
  {name: 'Quanzhou', value: 21},
  {name: 'Lacey', value: 21},
  {name: 'Sunshine', value: 21},
  {name: 'Jiaonan', value: 22},
  {name: 'Nantong', value: 23},
  {name: 'Lhasa', value: 24},
  {name: 'Yunfu', value: 24},
  {name: 'Meizhou', value: 25},
  {name: 'Wendeng', value: 25},
  {name: 'Shanghai', value: 25},
  {name: 'Panzhihua', value: 25},
  {name: 'Weihai', value: 25},
  {name: 'Chengde', value: 25},
  {name: 'Xiamen', value: 26},
  {name: 'Shanwei', value: 26},
  {name: 'Chaozhou', value: 26},
  {name: 'Dandong', value: 27},
  {name: 'Taicang', value: 27},
  {name: 'Qujing', value: 27},
  {name: 'Yantai', value: 28},
  {name: 'Fuzhou', value: 29},
  {name: 'Wafangdian', value: 30},
  {name: 'Jimo', value: 30},
  {name: 'Fushun', value: 31},
  {name: 'Yuxi', value: 31},
  {name: 'Zhangjiakou', value: 31},
  {name: 'Yangquan', value: 31},
  {name: 'Laizhou', value: 32},
  {name: 'Huzhou', value: 32},
  {name: 'Shantou', value: 32},
  {name: 'Kunshan', value: 33},
  {name: 'Ningbo', value: 33},
  {name: 'Zhanjiang', value: 33},
  {name: 'Jieyang', value: 34},
  {name: 'Rongcheng', value: 34},
  {name: 'Lianyungang', value: 35},
  {name: 'Huludao', value: 35},
  {name: 'Changshu', value: 36},
  {name: 'Dongguan', value: 36},
  {name: 'Heyuan', value: 36},
  {name: 'Huaian', value: 36},
  {name: 'Taizhou', value: 36},
  {name: 'Nanning', value: 37},
  {name: 'Yingkou', value: 37},
  {name: 'Huizhou', value: 37},
  {name: 'Jiangyin', value: 37},
  {name: 'Penglai', value: 37},
  {name: 'Shaoguan', value: 38},
  {name: 'Jiayuguan', value: 38},
  {name: 'Guangzhou', value: 38},
  {name: 'Yanan', value: 38},
  {name: 'Taiyuan', value: 39},
  {name: 'Qingyuan', value: 39},
  {name: 'Zhongshan', value: 39},
  {name: 'Kunming', value: 39},
  {name: 'Shouguang', value: 40},
  {name: 'Panjin', value: 40},
  {name: 'Changzhi', value: 41},
  {name: 'Shenzhen', value: 41},
  {name: 'Zhuhai', value: 42},
  {name: 'Suqian', value: 43},
  {name: 'Xianyang', value: 43},
  {name: 'Tongchuan', value: 44},
  {name: 'Flatness', value: 44},
  {name: 'Foshan', value: 44},
  {name: 'Haikou', value: 44},
  {name: 'Jiangmen', value: 45},
  {name: 'Zhangqiu', value: 45},
  {name: 'Zhaoqing', value: 46},
  {name: 'Dalian', value: 47},
  {name: 'Linfen', value: 47},
  {name: 'Wujiang', value: 47},
  {name: 'Shizuishan', value: 49},
  {name: 'Shenyang', value: 50},
  {name: 'Suzhou', value: 50},
  {name: 'Maoming', value: 50},
  {name: 'Jiaxing', value: 51},
  {name: 'Changchun', value: 51},
  {name: 'Jiaozhou', value: 52},
  {name: 'Yinchuan', value: 52},
  {name: 'Zhangjiagang', value: 52},
  {name: 'Sanmenxia', value: 53},
  {name: 'Jinzhou', value: 54},
  {name: 'Nanchang', value: 54},
  {name: 'Liuzhou', value: 54},
  {name: 'Sanya', value: 54},
  {name: 'Zigong', value: 56},
  {name: 'Jilin', value: 56},
  {name: 'Yangjiang', value: 57},
  {name: 'Luzhou', value: 57},
  {name: 'Xining', value: 57},
  {name: 'Yibin', value: 58},
  {name: 'Hohhot', value: 58},
  {name: 'Chengdu', value: 58},
  {name: 'Datong', value: 58},
  {name: 'Zhenjiang', value: 59},
  {name: 'Guilin', value: 59},
  {name: 'Zhangjiajie', value: 59},
  {name: 'Yixing', value: 59},
  {name: 'North Sea', value: 60},
  {name: 'Xi-an', value: 61},
  {name: 'Jintan', value: 62},
  {name: 'Dongying', value: 62},
  {name: 'Mudanjiang', value: 63},
  {name: 'Zunyi', value: 63},
  {name: 'Shaoxing', value: 63},
  {name: 'Yangzhou', value: 64},
  {name: 'Changzhou', value: 64},
  {name: 'Weifang', value: 65},
  {name: 'Chongqing', value: 66},
  {name: 'Taizhou', value: 67},
  {name: 'Nanjing', value: 67},
  {name: 'Binzhou', value: 70},
  {name: 'Guiyang', value: 71},
  {name: 'Wuxi', value: 71},
  {name: 'Benxi', value: 71},
  {name: 'Karamay', value: 72},
  {name: 'Weinan', value: 72},
  {name: 'Maanshan', value: 72},
  {name: 'Baoji', value: 72},
  {name: 'Jiaozuo', value: 75},
  {name: 'Jurong', value: 75},
  {name: 'Beijing', value: 79},
  {name: 'Xuzhou', value: 79},
  {name: 'Hengshui', value: 80},
  {name: 'Baotou', value: 80},
  {name: 'Mianyang', value: 80},
  {name: 'Urumqi', value: 84},
  {name: 'Zaozhuang', value: 84},
  {name: 'Hangzhou', value: 84},
  {name: 'Zibo', value: 85},
  {name: 'Anshan', value: 86},
  {name: 'Liyang', value: 86},
  {name: 'Korla', value: 86},
  {name: 'Anyang', value: 90},
  {name: 'Kaifeng', value: 90},
  {name: 'Jinan', value: 92},
  {name: 'Deyang', value: 93},
  {name: 'Wenzhou', value: 95},
  {name: 'Jiujiang', value: 96},
  {name: 'Handan', value: 98},
  {name: 'Lin-an', value: 99},
  {name: 'Lanzhou', value: 99},
  {name: 'Cangzhou', value: 100},
  {name: 'Linyi', value: 103},
  {name: 'Nanchong', value: 104},
  {name: 'Tianjin', value: 105},
  {name: 'Fuyang', value: 106},
  {name: 'Tai-an', value: 112},
  {name: 'Zhuji', value: 112},
  {name: 'Zhengzhou', value: 113},
  {name: 'Harbin', value: 114},
  {name: 'Liaocheng', value: 116},
  {name: 'Wuhu', value: 117},
  {name: 'Tangshan', value: 119},
  {name: 'Pingdingshan', value: 119},
  {name: 'Xingtai', value: 119},
  {name: 'Texas', value: 120},
  {name: 'Jining', value: 120},
  {name: 'Jingzhou', value: 127},
  {name: 'Yichang', value: 130},
  {name: 'Yiwu', value: 132},
  {name: 'Lishui', value: 133},
  {name: 'Luoyang', value: 134},
  {name: 'Qinhuangdao', value: 136},
  {name: 'Zhuzhou', value: 143},
  {name: 'Shijiazhuang', value: 147},
  {name: 'Laiwu', value: 148},
  {name: 'Changde', value: 152},
  {name: 'Baoding', value: 153},
  {name: 'Xiangtan', value: 154},
  {name: 'Jinhua', value: 157},
  {name: 'Yueyang', value: 169},
  {name: 'Changsha', value: 175},
  {name: 'Quzhou', value: 177},
  {name: 'Langfang', value: 193},
  {name: 'Heze', value: 194},
  {name: 'Hefei', value: 229},
  {name: 'Wuhan', value: 273},
  {name: 'Daqing', value: 279}
];
const geoCoordMapAirQuality = {
 'Sea Gate':[121.15,31.89],
 'Ordos':[109.781327,39.608266],
 'Zhaoyuan':[120.38,37.35],
 'Zhoushan':[122.207216,29.985295],
 'Qiqihar':[123.97,47.33],
 'Yancheng':[120.13,33.38],
 'Chifeng':[118.87,42.28],
 'Qingdao':[120.33,36.07],
 'Rushan':[121.52,36.89],
 'Jinchang':[102.188043,38.520089],
 'Quanzhou':[118.58,24.93],
 'Lacey':[120.53,36.86],
 'Sunshine':[119.46,35.42],
 'Jiaonan':[119.97,35.88],
 'Nantong':[121.05,32.08],
 'Lhasa':[91.11,29.97],
 'Yunfu':[112.02,22.93],
 'Meizhou':[116.1,24.55],
 'Wendeng':[122.05,37.2],
 'Shanghai':[121.48,31.22],
 'Panzhihua':[101.718637,26.582347],
 'Weihai':[122.1,37.5],
 'Chengde':[117.93,40.97],
 'Xiamen':[118.1,24.46],
 'Shanwei':[115.375279,22.786211],
 'Chaozhou':[116.63,23.68],
 'Dandong':[124.37,40.13],
 'Taicang':[121.1,31.45],
 'Qujing':[103.79,25.51],
 'Yantai':[121.39,37.52],
 'Fuzhou':[119.3,26.08],
 'Wafangdian':[121.979603,39.627114],
 'Jimo':[120.45,36.38],
 'Fushun':[123.97,41.97],
 'Yuxi':[102.52,24.35],
 'Zhangjiakou':[114.87,40.82],
 'Yangquan':[113.57,37.85],
 'Laizhou':[119.942327,37.177017],
 'Huzhou':[120.1,30.86],
 'Shantou':[116.69,23.39],
 'Kunshan':[120.95,31.39],
 'Ningbo':[121.56,29.86],
 'Zhanjiang':[110.359377,21.270708],
 'Jieyang':[116.35,23.55],
 'Rongcheng':[122.41,37.16],
 'Lianyungang':[119.16,34.59],
 'Huludao':[120.836932,40.711052],
 'Changshu':[120.74,31.64],
 'Dongguan':[113.75,23.04],
 'Heyuan':[114.68,23.73],
 'Huaian':[119.15,33.5],
 'Taizhou':[119.9,32.49],
 'Nanning':[108.33,22.84],
 'Yingkou':[122.18,40.65],
 'Huizhou':[114.4,23.09],
 'Jiangyin':[120.26,31.91],
 'Penglai':[120.75,37.8],
 'Shaoguan':[113.62,24.84],
 'Jiayuguan':[98.289152,39.77313],
 'Guangzhou':[113.23,23.16],
 'Yanan':[109.47,36.6],
 'Taiyuan':[112.53,37.87],
 'Qingyuan':[113.01,23.7],
 'Zhongshan':[113.38,22.52],
 'Kunming':[102.73,25.04],
 'Shouguang':[118.73,36.86],
 'Panjin':[122.070714,41.119997],
 'Changzhi':[113.08,36.18],
 'Shenzhen':[114.07,22.62],
 'Zhuhai':[113.52,22.3],
 'Suqian':[118.3,33.96],
 'Xianyang':[108.72,34.36],
 'Tongchuan':[109.11,35.09],
 'Flatness':[119.97,36.77],
 'Foshan':[113.11,23.05],
 'Haikou':[110.35,20.02],
 'Jiangmen':[113.06,22.61],
 'Zhangqiu':[117.53,36.72],
 'Zhaoqing':[112.44,23.05],
 'Dalian':[121.62,38.92],
 'Linfen':[111.5,36.08],
 'Wujiang':[120.63,31.16],
 'Shizuishan':[106.39,39.04],
 'Shenyang':[123.38,41.8],
 'Suzhou':[120.62,31.32],
 'Maoming':[110.88,21.68],
 'Jiaxing':[120.76,30.77],
 'Changchun':[125.35,43.88],
 'Jiaozhou':[120.03336,36.264622],
 'Yinchuan':[106.27,38.47],
 'Zhangjiagang':[120.555821,31.875428],
 'Sanmenxia':[111.19,34.76],
 'Jinzhou':[121.15,41.13],
 'Nanchang':[115.89,28.68],
 'Liuzhou':[109.4,24.33],
 'Sanya':[109.511909,18.252847],
 'Zigong':[104.778442,29.33903],
 'Jilin':[126.57,43.87],
 'Yangjiang':[111.95,21.85],
 'Luzhou':[105.39,28.91],
 'Xining':[101.74,36.56],
 'Yibin':[104.56,29.77],
 'Hohhot':[111.65,40.82],
 'Chengdu':[104.06,30.67],
 'Datong':[113.3,40.12],
 'Zhenjiang':[119.44,32.2],
 'Guilin':[110.28,25.29],
 'Zhangjiajie':[110.479191,29.117096],
 'Yixing':[119.82,31.36],
 'North Sea':[109.12,21.49],
 'Xi-an':[108.95,34.27],
 'Jintan':[119.56,31.74],
 'Dongying':[118.49,37.46],
 'Mudanjiang':[129.58,44.6],
 'Zunyi':[106.9,27.7],
 'Shaoxing':[120.58,30.01],
 'Yangzhou':[119.42,32.39],
 'Changzhou':[119.95,31.79],
 'Weifang':[119.1,36.62],
 'Chongqing':[106.54,29.59],
 'Taizhou':[121.420757,28.656386],
 'Nanjing':[118.78,32.04],
 'Binzhou':[118.03,37.36],
 'Guiyang':[106.71,26.57],
 'Wuxi':[120.29,31.59],
 'Benxi':[123.73,41.3],
 'Karamay':[84.77,45.59],
 'Weinan':[109.5,34.52],
 'Maanshan':[118.48,31.56],
 'Baoji':[107.15,34.38],
 'Jiaozuo':[113.21,35.24],
 'Jurong':[119.16,31.95],
 'Beijing':[116.46,39.92],
 'Xuzhou':[117.2,34.26],
 'Hengshui':[115.72,37.72],
 'Baotou':[110,40.58],
 'Mianyang':[104.73,31.48],
 'Urumqi':[87.68,43.77],
 'Zaozhuang':[117.57,34.86],
 'Hangzhou':[120.19,30.26],
 'Zibo':[118.05,36.78],
 'Anshan':[122.85,41.12],
 'Liyang':[119.48,31.43],
 'Korla':[86.06,41.68],
 'Anyang':[114.35,36.1],
 'Kaifeng':[114.35,34.79],
 'Jinan':[117,36.65],
 'Deyang':[104.37,31.13],
 'Wenzhou':[120.65,28.01],
 'Jiujiang':[115.97,29.71],
 'Handan':[114.47,36.6],
 'Lin-an':[119.72,30.23],
 'Lanzhou':[103.73,36.03],
 'Cangzhou':[116.83,38.33],
 'Linyi':[118.35,35.05],
 'Nanchong':[106.110698,30.837793],
 'Tianjin':[117.2,39.13],
 'Fuyang':[119.95,30.07],
 'Tai-an':[117.13,36.18],
 'Zhuji':[120.23,29.71],
 'Zhengzhou':[113.65,34.76],
 'Harbin':[126.63,45.75],
 'Liaocheng':[115.97,36.45],
 'Wuhu':[118.38,31.33],
 'Tangshan':[118.02,39.63],
 'Pingdingshan':[113.29,33.75],
 'Xingtai':[114.48,37.05],
 'Texas':[116.29,37.45],
 'Jining':[116.59,35.38],
 'Jingzhou':[112.239741,30.335165],
 'Yichang':[111.3,30.7],
 'Yiwu':[120.06,29.32],
 'Lishui':[119.92,28.45],
 'Luoyang':[112.44,34.7],
 'Qinhuangdao':[119.57,39.95],
 'Zhuzhou':[113.16,27.83],
 'Shijiazhuang':[114.48,38.03],
 'Laiwu':[117.67,36.19],
 'Changde':[111.69,29.05],
 'Baoding':[115.48,38.85],
 'Xiangtan':[112.91,27.87],
 'Jinhua':[119.64,29.12],
 'Yueyang':[113.09,29.37],
 'Changsha':[113,28.21],
 'Quzhou':[118.88,28.97],
 'Langfang':[116.7,39.53],
 'Heze':[115.480656,35.23375],
 'Hefei':[117.27,31.86],
 'Wuhan':[114.31,30.52],
 'Daqing':[125.03,46.58]
};
const convertData = function (data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMapAirQuality[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

const airQualityOpt = {
  title: {
    text: 'Air quality in major cities across the country-Baidu map',
    subtext: 'data from PM25.in',
    sublink: 'http://www.pm25.in',
    left: 'center'
  },
  tooltip : {
    trigger: 'item'
  },
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 5,
    roam: true,
    mapStyle: {
      styleJson: [{
          'featureType': 'water',
          'elementType': 'all',
          'stylers': {
            'color': '#d1d1d1'
          }
      },{
          'featureType': 'land',
          'elementType': 'all',
          'stylers': {
            'color': '#f3f3f3'
          }
      },{
          'featureType': 'railway',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
      },{
          'featureType': 'highway',
          'elementType': 'all',
          'stylers': {
            'color': '#fdfdfd'
          }
      },{
          'featureType': 'highway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
      },{
          'featureType': 'arterial',
          'elementType': 'geometry',
          'stylers': {
            'color': '#fefefe'
          }
      },{
          'featureType': 'arterial',
          'elementType': 'geometry.fill',
          'stylers': {
            'color': '#fefefe'
          }
      },{
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
      },{
          'featureType': 'green',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
      },{
          'featureType': 'subway',
          'elementType': 'all',
          'stylers': {
            'visibility': 'off'
          }
      },{
          'featureType': 'manmade',
          'elementType': 'all',
          'stylers': {
            'color': '#d1d1d1'
          }
      },{
          'featureType': 'local',
          'elementType': 'all',
          'stylers': {
            'color': '#d1d1d1'
          }
      },{
          'featureType': 'arterial',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
      },{
          'featureType': 'boundary',
          'elementType': 'all',
          'stylers': {
            'color': '#fefefe'
          }
      },{
          'featureType': 'building',
          'elementType': 'all',
          'stylers': {
            'color': '#d1d1d1'
          }
      },{
        'featureType': 'label',
        'elementType': 'labels.text.fill',
        'stylers': {
          'color': '#999999'
        }
      }]
    }
  },
  series : [
    {
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: convertData(dataAirQuality),
      symbolSize: function (val) {
        return val[2] / 10;
      },
      encode: {
        value: 2
      },
      label: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      itemStyle: {
        color: 'purple'
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    {
      name: 'Top 5',
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: convertData(dataAirQuality.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 6)),
      symbolSize: function (val) {
        return val[2] / 10;
      },
      encode: {
        value: 2
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        formatter: '{b}',
        position: 'right',
        show: true
      },
      itemStyle: {
        color: 'purple',
        shadowBlur: 10,
        shadowColor: '#333'
      },
      zlevel: 1
    }
  ]
};
export {buslineOpt,populationOpt,airQualityOpt};