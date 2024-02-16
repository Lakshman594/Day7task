import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return{
            count:0,
            todos : [
                { id: 1, text:'wakeup early ', done: true},
                { id: 2, text:'do breakfast ', done: true},
                { id: 3, text:'Go to school ', done: false},
                { id: 4, text:' sleep early ', done: false},

            ],
        };
    },
    getters : {
        getDoneTodoCount(state){
            return state.todos.filter((todo) => todo.done).length
           }
    },

    mutations:{
        increment(state){
              state.count++;
        },
     
    }

})

 const app = createApp(App);
 app.use(store);
 app.mount('#app');
