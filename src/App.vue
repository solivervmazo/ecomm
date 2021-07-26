<template>
  <v-app>
    <v-main>
      <Home/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/home/Home.vue';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
