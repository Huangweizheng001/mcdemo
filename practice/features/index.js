import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>childComponent</div>
  `,
  mounted () {
    console.log(this.$parent.$options.name)
  }
}
const component = {
  // props: {
  //   active: Boolean,
  //   propOne: String
  // },
  name: 'comp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
      <slot></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  methods: {

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
  template: `
      <div>
        <comp-one>
          <span>哈哈哈哈</span>
        </comp-one>
      </div>
      
  `,
  methods: {
  }
})
