<template>
  <section>
    <!-- // 차트를 그릴 영역으로 canvas태그를 사용한다. -->
    <canvas id="myChart" width="400" height="400"></canvas>
  </section>
</template>

<script>
/***************************************************************
 * chart 연습
 * * : *
 * ! : TypeError: chart_js__WEBPACK_IMPORTED_MODULE_0__.default is not a constructor
 * ! -- 3 chart.js 3버전에서 나는 에러로 2버전으로 다운그레이드 후 해결 $npm install chart.js@2
 *
 * ? : .
/*************************************************************/
import Chart from 'chart.js'

export default {
  mounted() {
    this.chartInit()
  },
  methods: {
    chartInit() {
      // 차트를 그럴 영역을 dom요소로 가져온다.
      var chartArea = document.getElementById('myChart').getContext('2d');
      // 차트를 생성한다. 
      var myChart = new Chart(chartArea, {
          // ①차트의 종류(String)
          type: 'doughnut',
          // ②차트의 데이터(Object)
          data: {
              // ③x축에 들어갈 이름들(Array)
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
              // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
              datasets: [{
                  // ⑤dataset의 이름(String)
                  label: '# of Votes',
                  // ⑥dataset값(Array)
                  data: [12, 19, 3, 5, 2],
                  // ⑦dataset의 배경색
                  backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                  // ⑧dataset의 선 색
                  borderColor: 'rgba(255, 99, 132, 1)',
                  // ⑨dataset의 선 두께(Number)
                  borderWidth: 1
              }]
          },
          // ⑩차트의 설정(Object)
          options: {
              // ⑪축에 관한 설정(Object)
              scales: {
                  // ⑫y축에 대한 설정(Object)
                  y: {
                      // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
                      beginAtZero: true
                  }
              }
          }
      });
    }
  }
};
</script>

<style scoped>
</style>