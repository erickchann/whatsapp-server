<template>
  <div class="home">
    <router-link to="/add-device" class="btn btn-primary mb-2">Device List</router-link>
    <router-link to="/send-chat" class="btn btn-success mb-2">Send Chat</router-link>
    <router-link to="/send-brodcast" class="btn btn-info mb-2">Send Brodcast</router-link>
  </div>
</template>

<style scoped>

.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home .btn {
  width: 40%;
}

</style>