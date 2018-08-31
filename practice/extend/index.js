import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handelChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handelChange () {
      this.$emit('change')
      console.log(22)
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  data: {
    prop1: 'hh1'
  },
  el: '#root',
  template: '<comp-one :active="true" :propOne="prop1" @change="parentChange"></comp-one>',
  methods: {
    parentChange () {
      this.prop1 += 1
    }
  }
})

const CompVue = Vue.extend(component)
new CompVue({
  el: '#root'
})
