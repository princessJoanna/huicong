//update-by tangjuan on 2017-03-17

let  optionList = {
        lastYeadDeal: {
            animationDurationUpdate: 3000,
            animationEasing: 'QuadraticIn',
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                width: 380,
                height: 170,
                x: 110,
                y: 7,
                borderWidth: '0',
                axisLine: 'false'
            },
            xAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false
                },
                splitArea: { show: false },
                type: 'category',
                data: ['2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']

            },
            yAxis: {
                splitLine: {
                    show: false
                },
                splitArea: { show: false },
                splitArea: { show: false },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                min: 0,
                max: 20000000000,
                splitNumber: 5
            },
            tooltip: {
                show: true,
                zlevel: 2
            },
            series: [


                {
                    name: '家电交易额',
                    type: 'bar',
                    data: [671358156, 962256965, 1773542330, 5201036142, 9520703352, 12733609775, 15090658365, 18226032145],
                    barGap: '40%', barCategoryGap: '30%',
                    itemStyle: {
                        normal: {
                            color: '#4cbfee',
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }
                    }


                },
                {
                    name: '家电交易额',
                    type: 'line',

                    itemStyle: {  /*设置折线颜色*/
                        normal: {
                            color: '#f39801'
                        }
                    },
                    barGap: '40%', barCategoryGap: '30%',
                    data: [671358156, 962256965, 1773542330, 5201036142, 9520703352, 12733609775, 15090658365, 18226032145]
                }



            ]
        },
        trainCount: {
             animationDurationUpdate: 3000,
            animationEasing: 'QuadraticIn',
            legend: {
                orient: 'horizontal',
                data: ['导师', '课程', '培训', '参与'],
                x: 'right',
                y: 'top',
                textStyle: {
                    color: '#fff'
                },
                itemWidth: 20,
                itemGap: 1
                // itemGap:'1'

            },
            title: {
                x: 'left',
                text: '创业培训:1152场／17285人次\n培训导师1360位、497个培训课程',
                textStyle: {
                    fontSize: 15,
                    color: '#fff'
                },
                x: '12',
                y: '10'
            },
            grid: {
                width: 400,
                height: 176,
                x: 65,
                y: 50,
                borderWidth: '0',
                axisLine: 'false'
            },
            calculable: true,
            xAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    // splitArea: { show: false },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },


                }
            ],
            yAxis: [
                {
                    type: 'category',
                    data: ['运营类', '媒体类', '市场类', '金融类', '电商类', '创业类'],


                    splitLine: {
                        show: false
                    },

                    splitArea: { show: false },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize: '15'
                        }
                    }
                }
            ],
            series: [


                {
                    name: '导师',
                    type: 'bar',
                    stack: '总量',
                    barGap: '40%', barCategoryGap: '30%',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' }, color: '#f29800' } },
                    data: [206, 211, 254, 198, 252, 239],

                },

                {
                    name: '课程',
                    type: 'bar',
                    stack: '总量',
                    barGap: '40%', barCategoryGap: '30%',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    data: [75, 83, 92, 62, 97, 88],


                },
                {
                    name: '培训',
                    type: 'bar',
                    stack: '总量',
                    barGap: '40%', barCategoryGap: '30%',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight', color: '#0e6eb8' } } },
                    data: [186, 193, 208, 167, 201, 197],


                },
                {
                    name: '参与',
                    type: 'bar',
                    stack: '总量',
                    barGap: '40%', barCategoryGap: '30%',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight', color: '#4cbfee' } } },
                    data: [2706, 2805, 3108, 2721, 3023, 2922],


                }
            ]
        },
        searchRate: {
             animationDurationUpdate: 3000,
            animationEasing: 'QuadraticIn',
            title: {
                x: 'left',
                text: '聚优澳品(余姚)畅销产品昨日成交排行榜(件)',
                textStyle: {
                    color: '#fff',
                    fontSize: '22',
                    fontFamily: 'Microsoft YaHei'
                }
            },
            grid: {
                width: 260,
                height: 190,
                x: 165,
                y: 55,
                borderWidth: '0',
                axisLine: 'false'
            },
            yAxis: [
                {

                    type: 'category',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#4cbfee',
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    data: ['Swisse奶蓟草', 'A2 白金装奶粉3段', 'Swisse 钙+维生素D', 'Nutricia 爱他美金装2段', 'Swisse蔓越莓精华胶囊', 'Nutricia 爱他美金装3段']
                }
            ],
            xAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#4cbfee',
                            fontSize: '12',
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    data: ['10000', '20000', '30000', '40000', '50000', '60000']
                }
            ],
            series: [
                {
                    name: '聚优澳品畅销产品搜索率',
                    type: 'bar',
                    barGap: '40%', barCategoryGap: '30%',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#5ead30', '#6ec4d5', '#e63674', '#94c62f', '#f0d935', '#7c2886'

                                ];
                                return colorList[params.dataIndex]
                            },
                            label: {
                                show: true,
                                position: 'right',
                                formatter: '{c}'
                            }
                        }
                    },
                    data: [],

                }
            ]
        }
        ,
        chinaMap: {
            animationEasing: 'QuadraticIn',
            color: ['#11ee4a ', '#11ee4a '],
            animationDuration: 4000,
            animationDurationUpdate: 4000, // for update animation, like legend selected.

            series: [
                {
                    name: '宁波',
                    type: 'map',
                    roam: false,
                    hoverable: false,
                    mapType: 'china',
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['订单量']
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(100,149,237,1)',
                            borderWidth: 1.5,
                            areaStyle: {
                                color: '#1b1b1b'
                            },
                            label: { show: true }
                        },
                        emphasis: { label: { show: true } }
                    },
                    data: [
                    ],
                    hoverable: false,
                    markPoint: {
                        symbolSize: 10,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                        itemStyle: {
                            normal: {
                                borderColor: '#87cefa',
                                borderWidth: 3,
                                // 标注边线线宽，单位px，默认为1
                                label: {
                                    show: false
                                }
                            },
                            emphasis: {
                                borderColor: '#1e90ff',
                                borderWidth: 9,
                                label: {
                                    show: false
                                }
                            }
                        },
                        data: [
                            
                        ]
                    },
                    geoCoord: {
                        '上海': [121.4648, 31.2891],
                        '东莞': [113.8953, 22.901],
                        '东营': [118.7073, 37.5513],
                        '中山': [113.4229, 22.478],
                        '临汾': [111.4783, 36.1615],
                        '临沂': [118.3118, 35.2936],
                        '丹东': [124.541, 40.4242],
                        '丽水': [119.5642, 28.1854],
                        '乌鲁木齐': [117.9236, 43.5883],
                        '佛山': [112.8955, 23.1097],
                        '保定': [115.0488, 39.0948],
                        '兰州': [103.5901, 36.3043],
                        '包头': [110.3467, 41.4899],
                        '北京': [116.4551, 40.2539],
                        '北海': [109.314, 21.6211],
                        '南京': [118.8062, 31.9208],
                        '南宁': [108.479, 23.1152],
                        '南昌': [116.0046, 28.6633],
                        '南通': [121.1023, 32.1625],
                        '厦门': [118.1689, 24.6478],
                        '台州': [121.1353, 28.6688],
                        '合肥': [117.29, 32.0581],
                        '呼和浩特': [111.4124, 40.4901],
                        '咸阳': [108.4131, 34.8706],
                        '哈尔滨': [127.9688, 45.368],
                        '唐山': [118.4766, 39.6826],
                        '嘉兴': [120.9155, 30.6354],
                        '大同': [113.7854, 39.8035],
                        '大连': [122.2229, 39.4409],
                        '天津': [117.4219, 39.4189],
                        '太原': [112.3352, 37.9413],
                        '威海': [121.9482, 37.1393],
                        '宁波': [121.5967, 29.6466],
                        '宝鸡': [107.1826, 34.3433],
                        '宿迁': [118.5535, 33.7775],
                        '常州': [119.4543, 31.5582],
                        '广州': [113.5107, 23.2196],
                        '廊坊': [116.521, 39.0509],
                        '延安': [109.1052, 36.4252],
                        '张家口': [115.1477, 40.8527],
                        '徐州': [117.5208, 34.3268],
                        '德州': [116.6858, 37.2107],
                        '惠州': [114.6204, 23.1647],
                        '成都': [103.9526, 30.7617],
                        '扬州': [119.4653, 32.8162],
                        '承德': [117.5757, 41.4075],
                        '拉萨': [117.1865, 30.1465],
                        '无锡': [120.3442, 31.5527],
                        '日照': [119.2786, 35.5023],
                        '昆明': [102.9199, 25.4663],
                        '杭州': [119.5313, 29.8773],
                        '枣庄': [117.323, 34.8926],
                        '柳州': [109.3799, 24.9774],
                        '株洲': [113.5327, 27.0319],
                        '武汉': [114.3896, 30.6628],
                        '汕头': [117.1692, 23.3405],
                        '江门': [112.6318, 22.1484],
                        '沈阳': [123.1238, 42.1216],
                        '沧州': [116.8286, 38.2104],
                        '河源': [114.917, 23.9722],
                        '泉州': [118.3228, 25.1147],
                        '泰安': [117.0264, 36.0516],
                        '泰州': [120.0586, 32.5525],
                        '济南': [117.1582, 36.8701],
                        '济宁': [116.8286, 35.3375],
                        '海口': [110.3893, 19.8516],
                        '淄博': [118.0371, 36.6064],
                        '淮安': [118.927, 33.4039],
                        '深圳': [114.5435, 22.5439],
                        '清远': [112.9175, 24.3292],
                        '温州': [120.498, 27.8119],
                        '渭南': [109.7864, 35.0299],
                        '湖州': [119.8608, 30.7782],
                        '湘潭': [112.5439, 27.7075],
                        '滨州': [117.8174, 37.4963],
                        '潍坊': [119.0918, 36.524],
                        '烟台': [120.7397, 37.5128],
                        '玉溪': [101.9312, 23.8898],
                        '珠海': [113.7305, 22.1155],
                        '盐城': [120.2234, 33.5577],
                        '盘锦': [121.9482, 41.0449],
                        '石家庄': [114.4995, 38.1006],
                        '福州': [119.4543, 25.9222],
                        '秦皇岛': [119.2126, 40.0232],
                        '绍兴': [120.564, 29.7565],
                        '聊城': [115.9167, 36.4032],
                        '肇庆': [112.1265, 23.5822],
                        '舟山': [122.2559, 30.2234],
                        '苏州': [120.6519, 31.3989],
                        '莱芜': [117.6526, 36.2714],
                        '菏泽': [115.6201, 35.2057],
                        '营口': [122.4316, 40.4297],
                        '葫芦岛': [120.1575, 40.578],
                        '衡水': [115.8838, 37.7161],
                        '衢州': [118.6853, 28.8666],
                        '西宁': [101.4038, 36.8207],
                        '西安': [109.1162, 34.2004],
                        '贵阳': [106.6992, 26.7682],
                        '连云港': [119.1248, 34.552],
                        '邢台': [114.8071, 37.2821],
                        '邯郸': [114.4775, 36.535],
                        '郑州': [113.4668, 34.6234],
                        '鄂尔多斯': [108.9734, 39.2487],
                        '重庆': [107.7539, 30.1904],
                        '金华': [120.0037, 29.1028],
                        '铜川': [109.0393, 35.1947],
                        '银川': [106.3586, 38.1775],
                        '镇江': [119.4763, 31.9702],
                        '长春': [125.8154, 44.2584],
                        '长沙': [113.0823, 28.2568],
                        '长治': [112.8625, 36.4746],
                        '阳泉': [113.4778, 38.0951],
                        '青岛': [120.4651, 36.3373],
                        '韶关': [113.7964, 24.7028],
                        '佛山': [113.134025635, 23.0350948405]
                    },
                    markLine: {
                        smooth: true,
                        effect: {
                            show: true,
                            scaleSize: 1,
                            period: 20,
                            color: '#fff',
                            shadowBlur: 10
                        },

                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'dashed',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data: [
                           
                            
                        ]
                    }
                },
                {
                    name: '佛山',
                    type: 'map',
                    mapType: 'china',
                    data: [],
                    markLine: {
                        smooth: true,
                        effect: {
                            show: true,
                            scaleSize: 1,
                            period: 20,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                label: {
                                    show: false
                                },
                                lineStyle: {
                                    type: 'dashed',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data: [

                            [{ name: '佛山', smoothness: 0.2 }, { name: '扬州', value: 95 }],
                            [{ name: '佛山', smoothness: 0.3 }, { name: '广州', value: 90 }],
                           
                        ]
                    }
                },

            ]
        },
        pieCount: {
            title: {
                text: '全国家电买家采购大类占比(%)',
                x: 'left',
                y: '10',
                textStyle: {
                    color: '#fff',
                    fontSize: '22',
                    fontFamily: 'Microsoft YaHei'
                }
            },
            culable: true,

            series: [
                {

                    name: '全国家电买家采购大类',
                    type: 'pie',
                    radius: [10, 80],
                    center: ['50%', 200],
                    roseType: 'radius',
                    width: '100%',       // for funnel
                    max: 20,            // for funnel

                    data: [
                        { value: 18.06, name: '厨卫家电18.06%' },
                        { value: 10.04, name: '生活小电10.04,%' },
                        { value: 22.08, name: '白色家电22.08%' },
                        { value: 18.47, name: '黑色家电18.47%' },
                        { value: 7.23, name: '家电配套7.23%' },
                        { value: 3.57, name: '其它3.57%' },
                        { value: 22.55, name: '健康家电22.55%' },

                    ],
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#ec5413', '#f39801', '#f9b52c', '#dade01', '#23ac38', '#006835', '#a9c226'];
                                return colorList[params.dataIndex];
                            }
                        }
                    },

                }
            ],

        },
        
        logistics: {

            grid: {
                width: 370,
                height: 113,
                x: 70,
                y: 30,
                borderWidth: '0',
                axisLine: 'false'
            },
            xAxis: [
                {
                    type: 'category',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                             fontSize: '22',
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    axisTick: { show: false },
                    data: ['华东', '华北', '华南', '东北', '华中', '西北']
                }

            ],

            yAxis: [
                {
                    type: 'value',
                    show: true,
                    splitLine: {
                        show: false
                    },
                    min: '0',
                    splitNumber: '4',
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    axisTick: { show: false }
                }
            ],
            series: [
                {
                    name: '全国各区域当日业务量',
                    type: 'bar',
                    itemStyle: {
                        normal: {

                            color: '#00a1e9',
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    data: [58370, 16843, 67332, 7430, 34780, 6041],

                }
            ]
        },
        proVolume: {

            xAxis: [
                {
                    type: 'category',
                    splitArea: { show: false },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#00a1e9',
                            fontFamily: 'Microsoft YaHei'
                        },
                        interval: 0,
                        rotate: 60
                    },

                    data: []
                }
            ],

            grid: {
                width: 350,
                height: 150,
                x: 70,
                y: 77,
                borderWidth: '0',
                axisLine: 'false'
            },
            title: {
                text: '聚优澳品近12个月销售额(元)',
                x: 'left',
                y: '0',
                // subtext: '单位(万)',
                textStyle: {
                    fontSize: 22,
                    color: '#fff',
                    align: 'center',
                    fontFamily: 'Microsoft YaHei'
                },
                subtextStyle: {
                    align: 'left',
                    color: '#319dba',
                    fontFamily: 'Microsoft YaHei'
                }
            },
            tooltip: {
                trigger: 'axis'
                //在这里设置
                // formatter: '{a0}:{c0}万'
            },
            yAxis: [
                {
                    type: 'value',
                    itemStyle: {
                        normal: {
                            color: '#3492d0 '
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#00a1e9',
                            fontFamily: 'Microsoft YaHei'
                        }
                    },
                    splitArea: { show: false },
                    splitNumber: 5,
                    min: 0,
                    max: 5000000,
                }
            ],
            series: [

                {
                    name: '销售额',
                    itemStyle: {
                        normal: {
                            color:function(params){

                                 var colorList = [
                                    '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0', '#3492d0','red'];
                                return colorList[params.dataIndex]

                            },


                        }
                    },
                    type: 'bar',
                    data: []

                }
            ]
        }

    },
    chartList = {
        LastYeadDeal: '', //今年交易额
        trainCount: '',
        chinaMap: '', 
        pieCount: '', //家电占比

        logistics: '', //慧聪物流
        proVolume: '',//聚优澳品近12个月销售额（元）
        searchRate: ''//聚优澳品（余姚）畅销昨日成交
    }
let start = '2017/03/09 00:00:00', //开始时间  
    now = new Date(),    //结束时间  
    _time = now.getTime() - new Date(start).getTime();   //时间差的毫秒数        

//------------------------------  

var storage = window.localStorage;
inIt();
upDate();
function inIt() {
    setStartValue();
    setSearchRateValue();
    setProVolume();
    renderEchart();
    
    
}
function renderEchart(){
    let arrDom = ['lastYeadDeal', 'trainCount', 'searchRate', 'chinaMap', 'logistics', 'pieCount', 'proVolume'],
        _length = arrDom.length;

    for (var i = 0; i < _length; i++) {
        chartList[arrDom[i]] = echarts.init(document.getElementById(arrDom[i]));
        if(arrDom[i]=='searchRate'){
            optionList.searchRate.yAxis[0].data=getRandomListOption();
        }
        if(chartList[arrDom[i]]){
             chartList[arrDom[i]].clear();
        }
       
          chartList[arrDom[i]].setOption(optionList[arrDom[i]]);
        

    }
   
}
function upDate() {
    changePaymentFlow();
    searchNumber();
    changeAllDealNum();
    changeMoney();
    payMoney();
    changeTrainCount();
    changeLastYeadDeal();
    changeStyle();
    changeMap();
    
    
}
function setStartValue() {
    var days = parseInt(_time / (24 * 3600 * 1000)),
    hours = parseInt(_time / (3600 * 1000)),
    minutes = parseInt(_time / (60 * 1000)),
    seconds = parseInt(_time / 1000),
    //计算出小时数  
     objlist=[
        {start:11035,add:parseInt(minutes*2/3),dom:'allDealNum'},
        {start:5461470435,add: parseInt(minutes * 500001/3),dom:'allcountMoney'},
        {start:15830203156,add:parseInt(minutes * 300001/30),dom:'setMoney'},
        {start:60328330027,add:parseInt(seconds * 50001 /3),dom:'paymentFlow'},
    ];
    objlist.forEach(function(k,i){
         storage.setItem(k.dom,k.start+k.add);
        document.getElementById(k.dom).innerHTML = storage[k.dom];
    });
    
    let arr=[2910300, 3188400, 2564550, 2374871, 2870099, 3060800, 3211100, 2448110, 1988890, 1821100, 2018800,2218800];
    storage.setItem("_proVolume",arr);

}
var _count = 6;
function changeTrainCount() {
    var _trainCOuntSeries = optionList.trainCount.series;
    _trainCOuntSeries.forEach(function (k, i) {
        k.data.forEach(function (m, n) {
            m = m + 5;
        });
    });
    setTimeout('changeTrainCount()', 1000 * 60 * 60 * 24 * 30);
}
function changeLastYeadDeal() {
    var axisData = optionList.lastYeadDeal.xAxis.data;
    optionList.lastYeadDeal.xAxis.data.push(axisData[axisData.length - 1] + 4);
    optionList.lastYeadDeal.series[0].data.push(parseInt(Math.random() * 1000));
    setTimeout('changeLastYeadDeal()', 1000 * 60 * 60 * 24 * 365);

}

function getRandomBarSpace() {
    var item = Math.random() * 10;
    var item_p = parseInt(item) > 6 ? '60%' : parseInt(item) * 10 + '%' || parseInt(item) < 2 ? '20%' : parseInt(item) * 10 + '%';
    return item_p;
}
//改变柱状图间隔
var showBar=1;
function reloadBarlist() {
    
    var list = ['logistics','pieCount','lastYeadDeal', 'trainCount', 'searchRate', 'proVolume'];
    list.forEach(function (k, i) { 
       if(chartList[k]&&i%2==showBar){
            chartList[k].clear();
            chartList[k].setOption(optionList[k],false,false);
       }
      
       
    });
     showBar==1?showBar=0:showBar=1;
   
}

//随机产生0-max的随机数
function getMaxRandom(max) {
    return parseInt(Math.random() * (max + 1), 10)//如果max为3 返回0123随机数
}
function changeChiaMap(item, cityNum) {
    var arr = [],
        fromcCity = '',
        cityList = [
            '上海',
            '东莞',
            '东营',
            '中山',
            '临汾',
            '临沂',
            '丹东',
            '丽水',
            '乌鲁木齐',
            '佛山',
            '保定',
            '兰州',
            '包头',
            '北京',
            '北海',
            '南京',
            '南宁',
            '南昌',
            '南通',
            '厦门',
            '台州',
            '合肥',
            '呼和浩特',
            '咸阳',
            '哈尔滨',
            '唐山',
            '嘉兴',
            '大同',
            '大连',
            '天津',
            '太原',
            '威海',
            '宝鸡',
            '宿迁',
            '常州',
            '广州',
            '廊坊',
            '延安',
            '张家口',
            '徐州',
            '德州',
            '惠州',
            '成都',
            '扬州',
            '承德',
            '拉萨',
            '无锡',
            '日照',
            '昆明',
            '杭州',
            '枣庄',
            '柳州',
            '株洲',
            '武汉',
            '汕头',
            '江门',
            '沈阳',
            '沧州',
            '河源',
            '泉州',
            '泰安',
            '泰州',
            '济南',
            '济宁',
            '海口',
            '淄博',
            '淮安',
            '深圳',
            '清远',
            '温州',
            '渭南',
            '湖州',
            '湘潭',
            '滨州',
            '潍坊',
            '烟台',
            '玉溪',
            '珠海',
            '盐城',
            '盘锦',
            '石家庄',
            '福州',
            '秦皇岛',
            '绍兴',
            '聊城',
            '肇庆',
            '舟山',
            '苏州',
            '莱芜',
            '菏泽',
            '营口',
            '葫芦岛',
            '衡水',
            '衢州',
            '西宁',
            '西安',
            '贵阳',
            '连云港',
            '邢台',
            '邯郸',
            '郑州',
            '鄂尔多斯',
            '重庆',
            '金华',
            '铜川',
            '银川',
            '镇江',
            '长春',
            '长沙',
            '长治',
            '阳泉',
            '青岛',
            '韶关',
            '佛山'
        ],
        cityList_length = cityList.length;
    item == 0 ? fromcCity = '宁波' : fromcCity = '佛山';
    optionList.chinaMap.series[0].markLine.data = [];
    optionList.chinaMap.series[1].markLine.data = [];
   

    for (var i = 0; i < cityNum; i++) {
        var value = [{ name: fromcCity, smoothness: Math.random() }, { name: cityList[getMaxRandom(cityList_length)], value: getMaxRandom(100) }];
        arr.push(value);
    }
     
    optionList.chinaMap.series[item].markLine.data = arr;
    if( chartList.chinaMap){
        chartList.chinaMap.clear();
    }
    chartList.chinaMap.setOption(optionList.chinaMap,false,false);
}
function getRandomList() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        if (i < 5) {
            arr.push(parseInt(Math.random() * 10000));
            arr.push(parseInt(Math.random() * 100000));
        }
        arr.push(parseInt(Math.random() * 100));
        arr.push(parseInt(Math.random() * 1000));
    }
    return arr
}

function changePaymentFlow() {
    let Hours = new Date().getHours();
    let arr = getRandomList(),
    $paymentFlow = document.getElementById('paymentFlow'),
    num = parseInt(storage.paymentFlow);
    indexList = parseInt(Math.random() * 10 * 3);
    $paymentFlow.innerHTML = num + arr[indexList];
    storage.setItem("paymentFlow", num + arr[indexList]);

    setTimeout('changePaymentFlow()', 1000 * 60);
}
function setSearchRateValue(){
    var arr=[]
    for(var i=0;i<12;i++){
        arr.push(randomNum(1,12));
    }
    optionList.searchRate.series[0].data = arr;
}
function searchNumber() {
    let Hours = new Date().getHours();

        setSearchRateValue();
        optionList.searchRate.yAxis[0].data=getRandomListOption();
       if(chartList.searchRate){
           chartList.searchRate.clear();
       }
       chartList.searchRate.setOption(optionList.searchRate,false,false);
   
    setTimeout('searchNumber()', 1000 * 60 * 60 * 24);
}


function setProVolume(){
    optionList.proVolume.xAxis[0].data=[];
    optionList.proVolume.series[0].data=[];
    var _date=new Date();
        thisMounth=_date.getMonth()+1,
        dataArry=[];
        dataArry.push(_date.getFullYear()+'年'+thisMounth+'月');
        while(thisMounth>1){
            thisMounth--;
            dataArry.push(_date.getFullYear()+'年'+thisMounth+'月');
        }
        dataArry.reverse();
        var beforeLength=12-dataArry.length;
        var fullMounth=12;
        var prevYearArry=[];
        var compare=new Date('2017-03-15');
        for(var i=0;i<beforeLength;i++){
            
                prevYearArry.push(fullMounth+'月');
                fullMounth--;
        }
        dataArry=prevYearArry.reverse().concat(dataArry);
        
        var sum=0,
        _proVolume=storage._proVolume.split(',')||[];
        _data=[];
        _ls=_proVolume.length;
        for(var i=0;i<_ls;i++){
            var vl=parseInt(_proVolume[i]);
              sum+=vl;
            _data.push(vl);
        }
 
        if(new Date()-compare>0){
            var avge=sum/_ls;
            _data.splice(0,1);
            _data.push(avge+randomNum(50000,1000000));
        }
        
        optionList.proVolume.xAxis[0].data=dataArry;
        optionList.proVolume.series[0].data=_data;
        storage._proVolume=_data ;
       
       

}




function getRandomListOption(){
    let  allName=["Swisse奶蓟草 ", " A2 白金装奶粉3段 ", " Swisse 钙+维生素D ", " Nutricia 爱他美金装2段 ", " Swisse蔓越莓精华胶囊 ", " Nutricia 爱他美金装3段 ", " BLACKMORES 天然维生素E面霜 ", " Lucas 天然番木瓜膏 ", " Swisse 葡萄籽精华 ", " Top Life 特维康 袋鼠精 ", " Bio Island 婴幼儿液体乳钙 ", " Devondale 德运成人奶粉 ", " Bellamy's 贝拉米奶粉2段 ", " herbs of gold 月见草油 ", " Nutricia 爱他美金装4段 ", " COMVITA麦卢卡蜂蜜奶粉 ", " A2 白金装婴儿奶粉2段 ", " Swisse 液体叶绿素 ", " Bio Balance 清肺灵 ", " Nutricia 爱他美白金装1段 ", " Careline 绵羊油护唇膏 ", " Swisse 卵磷脂胶囊 ", " Healthy Care 蜂胶牙膏 ", " A2 白金装奶粉1段 ", " Eaoron 涂抹式水光针二代 ", " BLACKMORES 无腥鱼油 ", " ego QV宝宝特润雪花膏 ", " DUIT 急救手膜/护手霜 ", " BLACKMORES 无腥鱼油 ", " Swisse 镁片 ", " Sunrise 玫瑰深层滋润手霜 ", " Spring Leaf 维生素E 绵羊油 ", " Ostelin 儿童维生素D+钙 ", " herbs of gold 无腥鱼油 ", " Devondale 德运脱脂高钙成人奶粉 ", " Nutricia 爱他美金装1段 ", " Goat Soap 天然羊奶皂 ", " Swisse 男士复合维生素 ", " Goat Soap 天然羊奶皂 ", " A2 全脂高钙奶粉 ", " Nutricia 爱他美白金装2段 ", " Nu-lax 乐康膏 ", " COMVITA 麦卢卡蜂蜜 UMF5+ ", " Careline 24小时长效保湿羊胎素绵羊油 ", " BLACKMORES 普通鱼油 ", " Blackmores 澳佳宝 维骨力葡萄糖胺关节灵 ", " Bayer 口腔溃疡膏 ", " the market grocer 高级蔓越莓干 ", " Swisse 胶原蛋白液体口服液 ", " Careline 绵羊油 ", " Bio Island 儿童DHA 60粒"],
    _copy=allName,
    option=[];
    var _node=0;
    for(var i=0;i<6;i++){
        _node=randomNum(0,_copy.length);
        option.push(_copy.splice(_node,1));

    }
    return option
    

}

function changeAllDealNum() {
    let Hours = new Date().getHours();
    let allDealNum = document.getElementById('allDealNum'),
    oldValue = parseInt(storage.allDealNum),
    _item = randomNum(1, 2),
    _value = oldValue + _item
    allDealNum.innerHTML = _value
    storage.setItem("allDealNum", _value);
    setTimeout('changeAllDealNum()', randomNum(3, 5) * 1000 * 60);
}

function changeMoney() {
    let Hours = new Date().getHours();
    var moneyFirst = parseInt(storage.setMoney);
    moneyFirst += randomNum(10, 100000);
    document.getElementById("setMoney").innerHTML = moneyFirst;
    storage.setItem("setMoney", moneyFirst);
    setTimeout('changeMoney()', randomNum(30, 60) * 1000);
}

function payMoney() {
    let Hours = new Date().getHours();
    let add = randomNum(100000, 500000),
            allcountMoney = parseInt(storage.allcountMoney) + add;
        storage.setItem("allcountMoney", allcountMoney);
        document.getElementById("allcountMoney").innerHTML = allcountMoney;
    setTimeout('payMoney()', randomNum(3, 5) * 1000 * 60);

}
//生成startNumber-endNumber 之间的随机数
function randomNum(startNumber, endNumber) {
    let choice = endNumber - startNumber + 1;
    return Math.floor(Math.random() * choice + startNumber)
}

//改变柱状图间隔及颜色
function changeStyle() {
     reloadBarlist(); 
     setTimeout('changeStyle()', 9000);
    
     
}

//随机飞往不同的城市
function changeMap() {
    changeChiaMap(getMaxRandom(1), 1);
    chartList.chinaMap.clear();
    chartList.chinaMap.setOption(optionList.chinaMap)
    setTimeout('changeMap()', 6000);
    
}
