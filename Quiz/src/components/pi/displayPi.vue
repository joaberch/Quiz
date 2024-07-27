<template>
    <div id="container">
        <h1>Les chiffres de π :</h1>
        <label for="digit-input">Nombre de chiffres à afficher :</label>
        <input id="digit-input" type="number" v-model.number="digitsChosen" min="1" :max="piLength"/>
        <div id="pi-container">
            {{ pi.pi.slice(0, digitsChosen+2) }}
        </div>
    </div>
</template>
<script setup>
import pi from '../../utils/pi.json'
import { ref, computed } from 'vue';

let digitsChosen = ref(100)
let piLength = pi.pi.length

//TODO : space caracters
</script>
<style scoped>
#pi-container {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    word-break: break-all;
}
#container {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    display: flex;
    justify-content: center;
}
</style>