<script setup>
import { ref } from 'vue';
import Element from '../../components/periodicTable/element.vue';
import data from '../../utils/periodicTableData';

let showMoreDetail = ref(false);

const showDetail = () => {
    console.log(showMoreDetail)
    showMoreDetail = true;
    console.log(showMoreDetail)
}
</script>
<template>
    <h1>Tableau périodique</h1>
    <div class="table">
        <Element v-for="d in data" :key="d.number" :elementData="d" />
    </div>
</template>
<style scoped>
.table {
    display: grid;
    grid-template: repeat(10, 1fr) / repeat(18, 1fr);
}

h1 {
    display: flex;
    justify-content: center;
    margin: 0px;
    margin-top: 75px;
}
</style>