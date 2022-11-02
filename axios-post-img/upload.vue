<template>
  <article>
    <input type="file" @input="uploadImg($event)" />
    <img id="preview" />
  </article>
</template>

<script>
export default {
  methods: {
    uploadImg(e) {
      if (!e.target.files.length) return
      console.log(e.target.files[0])
      const extension = e.target.files[0].type.split('/')[1]
      const allowExtension = ['jpg', 'jpeg', 'png', 'pdf']

      if (allowExtension.indexOf(extension) === -1) {
        alert('허용되지 않은 파일 유형입니다')
        document.querySelector('#img-input__box').focus()
        return
      }

      if (e.target.files[0].size >= 5242880) {
        alert('5mb 이하 파일을 올려주세요')
        document.querySelector('#img-input__box').focus()
        return
      }

      if (e.target.files[0]) {
        this.logoImg = e.target.files[0]
        this.imgInfo.src = URL.createObjectURL(e.target.files[0])
        this.imgInfo.name = e.target.files[0].name

        const size = e.target.files[0].size

        const k = 1024
        const dm = 2 < 0 ? 0 : 2
        const sizes = ['bytes', 'kb', 'mb']
        const i = Math.floor(Math.log(size) / Math.log(k))
        this.imgInfo.size = parseFloat((size / Math.pow(k, i)).toFixed(dm)) + sizes[i]
      }
    }
  }
}
</script>

<style></style>
