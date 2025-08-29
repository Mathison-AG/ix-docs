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
const echartsBarSimple = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const data = {
  products: [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
    "Product F"
  ],
  sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4]
};
const options = {
  xAxis: {
    data: data.products,
    name: "Product",
    nameLocation: "end"
  },
  yAxis: {
    name: "Number of sold products \n (in Mio)",
    nameLocation: "end"
  },
  legend: {
    show: true
  },
  series: [
    {
      data: data.sales,
      type: "bar"
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
