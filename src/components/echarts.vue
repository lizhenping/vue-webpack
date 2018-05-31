<template>
  <div class="echart">
    <div id="echart-bar" style="width:600px; height:600px"></div>
    <div id="echart-pie" style="width:600px; height:600px"></div>
    <div id="echart-line" style="width:600px; height:600px"></div>
    <div id="echart-more" style="width:600px; height:600px"></div>
    <a href="http://echarts.baidu.com/examples/index.html#chart-type-line" target="newBlank" >More echarts</a>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.getPie();
    this.getBar();
    this.getLine();
    this.getMore();
  },
  methods: {
    getMore() {
      var myChart = echarts.init(document.getElementById("echart-more"));
      myChart.setOption({
        title: {
          text: "复合型图标"
        },
        tooltip: {},
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        legend: {
          data: ["购买金额", "销售金额"]
        },
        yAxis: {},
        series: [
          {
            name: "购买金额",
            type: "bar",
            data: [200, 312, 431, 241, 175, 275, 369],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  itemStyle: {
                    normal: {
                      color: "green"
                    }
                  }
                }
              ]
            }
          },
          {
            name: "销售金额",
            type: "line",
            data: [321, 432, 543, 376, 286, 298, 400],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  itemStyle: {
                    normal: {
                      color: "blue"
                    }
                  }
                }
              ]
            }
          }
        ]
      });
    },
    getLine() {
      var myChart = echarts.init(document.getElementById("echart-line"));
      var data = [];

      for (var i = 0; i <= 360; i++) {
        var t = i / 180 * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }

      var options = {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      };
      myChart.setOption(options);
    },
    getBar() {
      var myChart = echarts.init(document.getElementById("echart-bar"));
      myChart.setOption({
        title: {
          text: "世界人口总量",
          subtext: "数据来自网络"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2011年", "2012年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"]
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      });
    },
    getPie() {
      /**
       * echarts使用技能分析:
       * 1:npm install echarts 引入echarts;
       * 2:echarts.init初始化echarts实例,setOption方法生成简单柱状图；
       * 注意事项:一定要配置xAxis,yAxis,series这三个参数,不想设置的话初始化为空json即可,要不然会出项报错哦,同时确保echarts.init之前的对象是有宽高的;
       * 明确每一个选项都必须是json对象格式
       */
      var myChart = echarts.init(document.getElementById("echart-pie"));
      myChart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style>
.echart div {
  border: 1px solid #cccccc;
  float: left;
  display: inline-block;
  margin-bottom: 50px;
  margin-right: 50px;
}
</style>

