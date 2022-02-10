<template>
  <div class="home">
    <h1>Berhasil Connect</h1>

    <form @submit.prevent="sendMessage">
      <input type="number" placeholder="Number" v-model="formData.number">
      <input type="text" placeholder="Message" v-model="formData.message">

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        number: '',
        message: '',
        id: 'erick'
      }
    }
  },
  methods: {
    sendMessage() {
      axios.post(`chat/send`, this.formData)
        .then(res => {
          console.log(res.data);
        })
    }
  },
}
</script>