<template>
  <div class="cards">
    <slot></slot>
  </div>
</template>

<script>
import Masonry from "masonry-layout";

export default {
  name: "Masonry-Component",
  methods: {
    doMasonryLayout() {
      new Masonry(".cards", {
        itemSelector: ".cards>div",
        gutter: 15
      });
    }
  },
  mounted() {
    this.doMasonryLayout();
  },
  activated() {
    this.doMasonryLayout();
  }
};
</script>
<style lang="scss" scoped>
.cards > div {
  margin-bottom: 15px;
}
</style>
