<template>
  <article>
    <section>새로고침 감지 기능</section>
  </article>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('beforeunload', this.unLoadEvent)
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.unLoadEvent)
  },
  methods: {
    unLoadEvent(event) {
      event.preventDefault()
      event.returnValue = ''
    }
  }
}
</script>

<style></style>
