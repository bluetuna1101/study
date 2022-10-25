<template>
  <article>라우터 이동 감지 기능</article>
</template>

<script>
export default {
  // 페이지 이동 방지
  // job/finished 페이지가 아니면 감지
  beforeRouteLeave(to, from, next) {
    if (to.path != '/job/finished') {
      const text = '페이지 이동 시 입력사항이 삭제될 수 있습니다.\n그래도 이동하시겠습니까 ?'
      if (confirm(text) == true) {
        next()
      } else next(false)
    } else next()
  }
}
</script>

<style></style>
