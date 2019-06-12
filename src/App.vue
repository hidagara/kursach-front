<template>
  <div id="app">
    <v-app id="inspire" dark>
  <Header></Header>
     <router-view></router-view>
      <!--<v-footer app :fixed="footer.fixed" :clipped-left="footer.clippedLeft">-->
        <!--<span class="caption mx-3">&copy; 2018, MIT LICENSE - Free to use and learn from</span>-->
      <!--</v-footer>-->
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Header from './components/Header'

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

export default {
    components: {SideMenu, Header}

}
</script>
