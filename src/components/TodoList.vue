<template>
    <div>
    <ul style="text-align: left;">
        <h3>Todos List (Done: {{ DoneList }})</h3>
        <li v-for="todo in todosList" :key="todo.id"> {{todo.text}} ({{ todo.done  ? 'done' : 'not Done' }})    </li>
    </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

// Use the store imported with useStore
const store = useStore();

// Use a computed property to access and return the todos
const todosList = computed(() => store.state.todos || []);
console.log(todosList)

const DoneList = computed(() => store.getters.DoneTodoList);


console.log(DoneList)

</script>