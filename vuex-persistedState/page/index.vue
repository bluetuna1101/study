<template>
  <article>
    <div @click="test">test</div>
    <div @click="testcookie">testcookie</div>
  </article>
</template>

<script>
export default {
  methods: {
    test() {
      this.$store.commit('test/increment')
    },
    testcookie() {
      const val = this.$cookies.get('testCookie')
      console.log(val)
    }
  }
}
</script>

<style></style>
