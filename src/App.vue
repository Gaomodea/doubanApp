<template>
<div class="content" id="#app">
  <mt-header fixed title="aaaa"></mt-header>

  <Navbar></Navbar>

  <transition mode="out-in">
    <router-view class="content"></router-view>
  </transition>


  <Footer></Footer>
</div>
</template>


<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default {
  data() {
    return {};
  },
  components: {
    Footer,
    Navbar
  }
};
</script>

<style lang="less" scoped>
.content {
  padding: 50px 0 80px;
}
</style>
