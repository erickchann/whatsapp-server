<template>
  <div id="app">
    <img v-if="qrUrl" :src="qrUrl" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      qrUrl: '',
      qrlInterval: '',
			stopReq: false
    }
  },
  methods: {
    getQr() {
      axios.post(`/session/add`, { id: 'erick' })
        .then(res => {
          if (res.data == 'berhasil') {
						this.stopReq = true;
            this.$router.push({ name: 'Home' });
          } else {
            this.qrUrl = res.data;
          }
        })
    }
  },
  created() {
    this.getQr();

    // this.qrlInterval = setInterval(() => {
		// 	if (!this.stopReq) {
	  //     this.getQr();
		// 	}
    // }, 7000);
  },
  destroyed() {
    // clearInterval(this.qrlInterval);
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
