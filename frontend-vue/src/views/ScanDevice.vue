<template>
  <div id="app">
    <img v-if="qrUrl" :src="qrUrl" />

    <button type="button" class="btn btn-primary">Next</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      qrUrl: '',
    }
  },
  methods: {
    getQr() {
      axios.post(`/session/add`, { id: 'erick' })
        .then(res => {
          if (res.data == 'berhasil') {
            this.$router.push({ name: 'Home' });
          } else {
            this.qrUrl = res.data;
          }
        })
    }
  },
  created() {
    this.getQr();
  },
}
</script>

<style scoped>

#app {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
