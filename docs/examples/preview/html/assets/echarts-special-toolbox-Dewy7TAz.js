import "./global-C3NZUKAC.js";
import { r as registerTheme } from "./index-CINcPcO9.js";
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
const echartsSpecialToolbox = "";
const data = {
  months: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [150, 230, 224, 218, 135, 147, 260]
};
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const options = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {},
      magicType: {
        type: ["line", "bar"]
      },
      dataView: {
        show: true
      }
    }
  },
  xAxis: {
    type: "category",
    data: data.months
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.values,
      type: "line",
      step: "end"
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
