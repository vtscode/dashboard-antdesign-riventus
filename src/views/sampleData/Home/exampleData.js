const option = {
  title: {
    text:'Temperature change in the next week',
    subtext:'Purely fictitious'
  },
  tooltip: {
    trigger:'axis'
  },
  legend: {
    data: ['Highest Temperature','Lowest Temperature']
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex:'none'
      },
      dataView: {readOnly: false},
      magicType: {type: ['line','bar']},
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type:'category',
    boundaryGap: false,
    data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  },
  yAxis: {
    type:'value',
    axisLabel: {
      formatter:'{value} °C'
    }
  },
  series: [
    {
      name:'Highest Temperature',
      type:'line',
      data: [11, 11, 15, 13, 12, 13, 10],
      markPoint: {
        data: [
          {type:'max', name:'Maximum Value'},
          {type:'min', name:'Minimum Value'}
        ]
      },
      markLine: {
        data: [
          {type:'average', name:'average'}
        ]
      }
    },
    {
      name:'Lowest Temperature',
      type:'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [
          {name:'Weekly lowest', value: -2, xAxis: 1, yAxis: -1.5}
        ]
      },
      markLine: {
        data: [
          {type:'average', name:'average'},
          [{
              symbol:'none',
              x: '90%',
              yAxis:'max'
          }, {
            symbol:'circle',
            label: {
              position:'start',
              formatter:'Maximum Value'
            },
            type:'max',
            name:'Highest point'
          }]
        ]
      }
    }
  ]
};