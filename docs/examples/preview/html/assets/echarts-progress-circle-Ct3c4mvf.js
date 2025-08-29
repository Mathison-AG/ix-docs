import "./global-C3NZUKAC.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-CINcPcO9.js";
import "./index-DmECL0yT.js";
import { t as themeSwitcher } from "./theme-switcher-Bg6wsOIn-C92mV1Nh.js";
import "./init-BC6OebfG.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BX-tL-0i-iu9BW76b.js";
import "./index-Cz75KU1f-BUHLjWzB.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-B5B7HmpH-BXCJNYHu.js";
const echartsProgressCircle = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const value = 68;
const options = {
  series: [
    {
      id: "1",
      type: "gauge",
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [[1, getComputedCSSProperty("color-neutral-40")]]
        }
      },
      axisTick: {
        show: false
      },
      radius: "100%",
      startAngle: 90,
      endAngle: -270,
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        width: 35,
        itemStyle: {
          borderMiterLimit: 16,
          color: getComputedCSSProperty("color-success")
        }
      },
      pointer: {
        show: false
      },
      data: [
        {
          value,
          detail: {
            offsetCenter: [0, 0],
            fontSize: "2rem",
            fontWeight: "normal",
            color: getComputedCSSProperty("color-soft-text"),
            rich: {
              valueStyle: {
                fontSize: "2rem",
                color: getComputedCSSProperty("color-soft-text"),
                fontWeight: "bold"
              },
              textStyle: {
                fontSize: "1.5rem",
                color: getComputedCSSProperty("color-soft-text")
              }
            },
            formatter: `{valueStyle|{value}}/100
{textStyle|completed}`
          },
          pointer: {
            show: false
          }
        }
      ]
    }
  ]
};
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
