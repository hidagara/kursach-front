<template>
  <v-app id="keep">
  <!--<Header></Header>-->
    <router-view></router-view>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Header from './components/Header'

import Header from "./components/Header";

export default {
    components: {Header}
}
</script>
