import Vue from 'vue'

const component = {
  // props: {
  //   active: Boolean,
  //   propOne: String
  // },
  props: {
    props1: {
      type: String
    }
  },
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div',
      {
        style: this.style
      },
      [
        this.$slots.header,
        this.props1
      ]
    )
  },
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
new Vue({
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  el: '#root',
  // template: `
  //       <comp-one>
  //         <span>{{value}}</span>
  //       </comp-one>
  // `,
  render (createElement) {
    return createElement('comp-one',
      {
        props: {
          props1: this.value
        }
      },
      [
        createElement('span',
          {
            slot: 'header'
          }, this.value)
      ]
    )
  },
  methods: {
  }
})
