    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue!'
      },
       computed: {
        // a computed getter
        reversedMessage: function () {
          // `this` points to the vm instance
          return this.message.split('').reverse().join('')
        }
      }
    })

    var app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'You loaded this page on ' + new Date()
      }
    })

    var app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      }
    })

    var app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    })

    var app5 = new Vue({
      el: '#app-5',
      data: {
        message: 'Hello Vue.js!'
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    })

    var app6 = new Vue({
      el: '#app-6',
      data: {
        message: 'Hello Vue!'
      }
    })

    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
      el: '#app-7',
      data: {
        groceryList: [
          { text: 'Vegetables' },
          { text: 'Cheese' },
          { text: 'Whatever else humans are supposed to eat' }
        ]
      }
    })

    var exmple1 = new Vue({
      el: '#exmple-1',
      data: {
        counter: 0
      },
       methods: {
        addCount: function() {
          this.counter+=1
        }
      }
    })

    Vue.component('simple-counter', {
      template:'<button v-on:click="counter += 1">{{counter}}</button>',
      data: function(){
        return {counter: 0}
      }
    })
    new Vue({
      el: '#example-sim'
    })

    Vue.component('button-counter', {
      template: '<button v-on:click="increment">{{ counter }}</button>',
      data: function () {
        return {
          counter: 0
        }
      },
      methods: {
        increment: function () {
          this.counter += 1
          this.$emit('increment')
        }
      },
    })
    new Vue({
      el: '#counter-event-example',
      data: {
        total: 0
      },
      methods: {
        incrementTotal: function () {
          this.total += 1
        }
      }
    })
    function ddd(){}



