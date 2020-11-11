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
  {name: '湛江', value: 33},
  {name: '揭阳', value: 34},
  {name: '荣成', value: 34},
  {name: '连云港', value: 35},
  {name: '葫芦岛', value: 35},
  {name: '常熟', value: 36},
  {name: '东莞', value: 36},
  {name: '河源', value: 36},
  {name: '淮安', value: 36},
  {name: '泰州', value: 36},
  {name: '南宁', value: 37},
  {name: '营口', value: 37},
  {name: '惠州', value: 37},
  {name: '江阴', value: 37},
  {name: '蓬莱', value: 37},
  {name: '韶关', value: 38},
  {name: '嘉峪关', value: 38},
  {name: '广州', value: 38},
  {name: '延安', value: 38},
  {name: '太原', value: 39},
  {name: '清远', value: 39},
  {name: '中山', value: 39},
  {name: '昆明', value: 39},
  {name: '寿光', value: 40},
  {name: '盘锦', value: 40},
  {name: '长治', value: 41},
  {name: '深圳', value: 41},
  {name: '珠海', value: 42},
  {name: '宿迁', value: 43},
  {name: '咸阳', value: 43},
  {name: '铜川', value: 44},
  {name: '平度', value: 44},
  {name: '佛山', value: 44},
  {name: '海口', value: 44},
  {name: '江门', value: 45},
  {name: '章丘', value: 45},
  {name: '肇庆', value: 46},
  {name: '大连', value: 47},
  {name: '临汾', value: 47},
  {name: '吴江', value: 47},
  {name: '石嘴山', value: 49},
  {name: '沈阳', value: 50},
  {name: '苏州', value: 50},
  {name: '茂名', value: 50},
  {name: '嘉兴', value: 51},
  {name: '长春', value: 51},
  {name: '胶州', value: 52},
  {name: '银川', value: 52},
  {name: '张家港', value: 52},
  {name: '三门峡', value: 53},
  {name: '锦州', value: 54},
  {name: '南昌', value: 54},
  {name: '柳州', value: 54},
  {name: '三亚', value: 54},
  {name: '自贡', value: 56},
  {name: '吉林', value: 56},
  {name: '阳江', value: 57},
  {name: '泸州', value: 57},
  {name: '西宁', value: 57},
  {name: '宜宾', value: 58},
  {name: '呼和浩特', value: 58},
  {name: '成都', value: 58},
  {name: '大同', value: 58},
  {name: '镇江', value: 59},
  {name: '桂林', value: 59},
  {name: '张家界', value: 59},
  {name: '宜兴', value: 59},
  {name: '北海', value: 60},
  {name: '西安', value: 61},
  {name: '金坛', value: 62},
  {name: '东营', value: 62},
  {name: '牡丹江', value: 63},
  {name: '遵义', value: 63},
  {name: '绍兴', value: 63},
  {name: '扬州', value: 64},
  {name: '常州', value: 64},
  {name: '潍坊', value: 65},
  {name: '重庆', value: 66},
  {name: '台州', value: 67},
  {name: '南京', value: 67},
  {name: '滨州', value: 70},
  {name: '贵阳', value: 71},
  {name: '无锡', value: 71},
  {name: '本溪', value: 71},
  {name: '克拉玛依', value: 72},
  {name: '渭南', value: 72},
  {name: '马鞍山', value: 72},
  {name: '宝鸡', value: 72},
  {name: '焦作', value: 75},
  {name: '句容', value: 75},
  {name: '北京', value: 79},
  {name: '徐州', value: 79},
  {name: '衡水', value: 80},
  {name: '包头', value: 80},
  {name: '绵阳', value: 80},
  {name: '乌鲁木齐', value: 84},
  {name: '枣庄', value: 84},
  {name: '杭州', value: 84},
  {name: '淄博', value: 85},
  {name: '鞍山', value: 86},
  {name: '溧阳', value: 86},
  {name: '库尔勒', value: 86},
  {name: '安阳', value: 90},
  {name: '开封', value: 90},
  {name: '济南', value: 92},
  {name: '德阳', value: 93},
  {name: '温州', value: 95},
  {name: '九江', value: 96},
  {name: '邯郸', value: 98},
  {name: '临安', value: 99},
  {name: '兰州', value: 99},
  {name: '沧州', value: 100},
  {name: '临沂', value: 103},
  {name: '南充', value: 104},
  {name: '天津', value: 105},
  {name: '富阳', value: 106},
  {name: '泰安', value: 112},
  {name: '诸暨', value: 112},
  {name: '郑州', value: 113},
  {name: '哈尔滨', value: 114},
  {name: '聊城', value: 116},
  {name: '芜湖', value: 117},
  {name: '唐山', value: 119},
  {name: '平顶山', value: 119},
  {name: '邢台', value: 119},
  {name: '德州', value: 120},
  {name: '济宁', value: 120},
  {name: '荆州', value: 127},
  {name: '宜昌', value: 130},
  {name: '义乌', value: 132},
  {name: '丽水', value: 133},
  {name: '洛阳', value: 134},
  {name: '秦皇岛', value: 136},
  {name: '株洲', value: 143},
  {name: '石家庄', value: 147},
  {name: '莱芜', value: 148},
  {name: '常德', value: 152},
  {name: '保定', value: 153},
  {name: '湘潭', value: 154},
  {name: '金华', value: 157},
  {name: '岳阳', value: 169},
  {name: '长沙', value: 175},
  {name: '衢州', value: 177},
  {name: '廊坊', value: 193},
  {name: '菏泽', value: 194},
  {name: '合肥', value: 229},
  {name: '武汉', value: 273},
  {name: '大庆', value: 279}
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
 '湛江':[110.359377,21.270708],
 '揭阳':[116.35,23.55],
 '荣成':[122.41,37.16],
 '连云港':[119.16,34.59],
 '葫芦岛':[120.836932,40.711052],
 '常熟':[120.74,31.64],
 '东莞':[113.75,23.04],
 '河源':[114.68,23.73],
 '淮安':[119.15,33.5],
 '泰州':[119.9,32.49],
 '南宁':[108.33,22.84],
 '营口':[122.18,40.65],
 '惠州':[114.4,23.09],
 '江阴':[120.26,31.91],
 '蓬莱':[120.75,37.8],
 '韶关':[113.62,24.84],
 '嘉峪关':[98.289152,39.77313],
 '广州':[113.23,23.16],
 '延安':[109.47,36.6],
 '太原':[112.53,37.87],
 '清远':[113.01,23.7],
 '中山':[113.38,22.52],
 '昆明':[102.73,25.04],
 '寿光':[118.73,36.86],
 '盘锦':[122.070714,41.119997],
 '长治':[113.08,36.18],
 '深圳':[114.07,22.62],
 '珠海':[113.52,22.3],
 '宿迁':[118.3,33.96],
 '咸阳':[108.72,34.36],
 '铜川':[109.11,35.09],
 '平度':[119.97,36.77],
 '佛山':[113.11,23.05],
 '海口':[110.35,20.02],
 '江门':[113.06,22.61],
 '章丘':[117.53,36.72],
 '肇庆':[112.44,23.05],
 '大连':[121.62,38.92],
 '临汾':[111.5,36.08],
 '吴江':[120.63,31.16],
 '石嘴山':[106.39,39.04],
 '沈阳':[123.38,41.8],
 '苏州':[120.62,31.32],
 '茂名':[110.88,21.68],
 '嘉兴':[120.76,30.77],
 '长春':[125.35,43.88],
 '胶州':[120.03336,36.264622],
 '银川':[106.27,38.47],
 '张家港':[120.555821,31.875428],
 '三门峡':[111.19,34.76],
 '锦州':[121.15,41.13],
 '南昌':[115.89,28.68],
 '柳州':[109.4,24.33],
 '三亚':[109.511909,18.252847],
 '自贡':[104.778442,29.33903],
 '吉林':[126.57,43.87],
 '阳江':[111.95,21.85],
 '泸州':[105.39,28.91],
 '西宁':[101.74,36.56],
 '宜宾':[104.56,29.77],
 '呼和浩特':[111.65,40.82],
 '成都':[104.06,30.67],
 '大同':[113.3,40.12],
 '镇江':[119.44,32.2],
 '桂林':[110.28,25.29],
 '张家界':[110.479191,29.117096],
 '宜兴':[119.82,31.36],
 '北海':[109.12,21.49],
 '西安':[108.95,34.27],
 '金坛':[119.56,31.74],
 '东营':[118.49,37.46],
 '牡丹江':[129.58,44.6],
 '遵义':[106.9,27.7],
 '绍兴':[120.58,30.01],
 '扬州':[119.42,32.39],
 '常州':[119.95,31.79],
 '潍坊':[119.1,36.62],
 '重庆':[106.54,29.59],
 '台州':[121.420757,28.656386],
 '南京':[118.78,32.04],
 '滨州':[118.03,37.36],
 '贵阳':[106.71,26.57],
 '无锡':[120.29,31.59],
 '本溪':[123.73,41.3],
 '克拉玛依':[84.77,45.59],
 '渭南':[109.5,34.52],
 '马鞍山':[118.48,31.56],
 '宝鸡':[107.15,34.38],
 '焦作':[113.21,35.24],
 '句容':[119.16,31.95],
 '北京':[116.46,39.92],
 '徐州':[117.2,34.26],
 '衡水':[115.72,37.72],
 '包头':[110,40.58],
 '绵阳':[104.73,31.48],
 '乌鲁木齐':[87.68,43.77],
 '枣庄':[117.57,34.86],
 '杭州':[120.19,30.26],
 '淄博':[118.05,36.78],
 '鞍山':[122.85,41.12],
 '溧阳':[119.48,31.43],
 '库尔勒':[86.06,41.68],
 '安阳':[114.35,36.1],
 '开封':[114.35,34.79],
 '济南':[117,36.65],
 '德阳':[104.37,31.13],
 '温州':[120.65,28.01],
 '九江':[115.97,29.71],
 '邯郸':[114.47,36.6],
 '临安':[119.72,30.23],
 '兰州':[103.73,36.03],
 '沧州':[116.83,38.33],
 '临沂':[118.35,35.05],
 '南充':[106.110698,30.837793],
 '天津':[117.2,39.13],
 '富阳':[119.95,30.07],
 '泰安':[117.13,36.18],
 '诸暨':[120.23,29.71],
 '郑州':[113.65,34.76],
 '哈尔滨':[126.63,45.75],
 '聊城':[115.97,36.45],
 '芜湖':[118.38,31.33],
 '唐山':[118.02,39.63],
 '平顶山':[113.29,33.75],
 '邢台':[114.48,37.05],
 '德州':[116.29,37.45],
 '济宁':[116.59,35.38],
 '荆州':[112.239741,30.335165],
 '宜昌':[111.3,30.7],
 '义乌':[120.06,29.32],
 '丽水':[119.92,28.45],
 '洛阳':[112.44,34.7],
 '秦皇岛':[119.57,39.95],
 '株洲':[113.16,27.83],
 '石家庄':[114.48,38.03],
 '莱芜':[117.67,36.19],
 '常德':[111.69,29.05],
 '保定':[115.48,38.85],
 '湘潭':[112.91,27.87],
 '金华':[119.64,29.12],
 '岳阳':[113.09,29.37],
 '长沙':[113,28.21],
 '衢州':[118.88,28.97],
 '廊坊':[116.7,39.53],
 '菏泽':[115.480656,35.23375],
 '合肥':[117.27,31.86],
 '武汉':[114.31,30.52],
 '大庆':[125.03,46.58]
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