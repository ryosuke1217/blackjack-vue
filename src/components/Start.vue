<template>
  <div class="start">
    <v-content>
      <transition name="fade">
        <h1 v-if="show" id="start-txt">
          Start
        </h1>
      </transition>
    </v-content>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Top',
  mounted: function () {
    console.log('start mounted')
    this.show = false
    setTimeout(() => {
      router.push({ path: '/main' })
    }, 2000)
  },
  data: () => ({
    show: true
  })
}
</script>

<style>
#start-txt{
  font-size: 6vmin;
  height: 400px;
  line-height: 400px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
