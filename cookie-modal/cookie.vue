<template>
  <div id="app">
    <CouponJoin v-if="couponJoinModal" @close="couponJoinModal = false" />
  </div>
</template>

<script>
/***************************************************************
 * * layouts/footer-none.vue
 * footer 없는 페이지
 * ? : ?
 * TODO : TODO
 /*************************************************************/
import CouponJoin from './Join'
export default {
  name: 'footer-header-none',
  components: {CouponJoin},
  data() {
    return {
      couponJoinModal: false
    }
  },
  mounted() {
    // 마운트 시 실행
    this.openCouponJoinModal()
  },
  methods: {
    // * couponJoinModal 이라는 쿠키를 조회하고 N 이 아니면 쿠폰 모달을 띄운다
    openCouponJoinModal() {
      const cookieCheck = this.getCookie('couponJoinModal')
      if (cookieCheck != 'N') this.couponJoinModal = true
    },
    // 쿠키 값 리턴
    getCookie(name) {
      var cookie = document.cookie
      if (document.cookie != '') {
        var cookie_array = cookie.split('; ')
        for (var index in cookie_array) {
          var cookie_name = cookie_array[index].split('=')
          if (cookie_name[0] == name) {
            return cookie_name[1]
          }
        }
      }
      return
    }
  }
}
</script>
