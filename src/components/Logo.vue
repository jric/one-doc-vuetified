<!-- Logo is assumed to be built from a vector image.
  We require only one dimension to be specified, and the other is defaulted.
-->

<template>
  <v-img :src="src" :height="height" :width="width" contain></v-img>
</template>

<script>
export default {
  name: "Logo",
  props: {
    height: String,
    width: String,
    src: String
  },
  created() {
    if (!this.width && !this.height) {
      this.$emit(
        "error",
        "either height or width must be specified for Logo module"
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
