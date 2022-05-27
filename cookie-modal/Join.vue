<template>
  <transition name="modal" appear="">
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <div class="modal-header__title font-17b">쿠폰 혜택</div>
          <div class="modal-header__ment font-30b">신규 가입 시 쿠폰팩 증정!</div>
        </div>
        <div class="close-btns">
          <div @click="closeCouponModalOneWeek" class="close-btn font-14r">일주일간 보지 않기</div>
          <div @click="$emit('close')" class="close-btn font-14r">닫기</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/***************************************************************
 * * 쿠폰 안내 모달
 * ? : ?
 * ! : !
 * TODO : TODO
 /*************************************************************/
export default {
  methods: {
    // 쿠폰모달 1주일 열지 않기
    closeCouponModalOneWeek() {
      this.setCookie('couponJoinModal', 'N', 7)
      this.$emit('close')
    },
    setCookie(name, value, expiredays) {
      var date = new Date()
      date.setDate(date.getDate() + expiredays)
      document.cookie = escape(name) + '=' + escape(value) + '; expires=' + date.toUTCString()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 35;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-window {
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  min-width: 345px;
  @media #{$newmo500} {
    min-width: 0;
    width: calc(100% - 40px);
  }
}
.modal-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.modal-header {
  align-items: center;
  display: flex;
  flex-direction: column;
  .modal-header__title {
    background: var(--color3);
    border-radius: 50px;
    color: #ffffff;
    width: 110px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }
  .modal-header__ment {
    text-align: center;
    margin-bottom: 10px;
    @media #{$newmo500} {
      word-break: keep-all;
      font-size: 25px;
    }
  }
}
.close-btns {
  display: flex;
  justify-content: space-between;
}
.close-btn {
  color: var(--deep-gray-color);
  flex: 1;
  text-align: center;
  cursor: pointer;
  &:first-child {
    border-right: 1px solid var(--light-gray-color);
  }
}
</style>
