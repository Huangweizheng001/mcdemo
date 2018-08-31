<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
// import Todo from './views/todo/todo.vue'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters(['fullName'])
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


