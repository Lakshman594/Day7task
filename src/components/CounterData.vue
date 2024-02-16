<template>
    <div>
        <div>{{ $store.state.count }}</div>

        <button @click="OnIncrement()">increment</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store= useStore()
function  OnIncrement(){
console.log("its working")
  store.commit('increment')
}
</script>