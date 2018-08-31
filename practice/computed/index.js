import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span>Name: {{name}}</span>
    </div>
`,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou'
  },
  computed: {
    name () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
