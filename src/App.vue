<template>
  <AppHeader />
  <HomeView />
  <AppFooter/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import HomeView from "./views/HomeView.vue";
export default {
  name: 'App',
  components: {
    AppHeader,
    HomeView,
    AppFooter,
    
}
}
</script>
