<script setup>
import Element from '../../components/periodicTable/element.vue';
import data from '../../utils/periodicTableData';
</script>
<template>
    <h1>Tableau périodique</h1>
    <div class="table">
        <Element v-for="d in data" :key="d.number" :elementData="d">{{ d }}</element>
    </div>
</template>
<style scoped>
.table{
    display: grid;
    grid-template: repeat(10, 1fr) / repeat(18, 1fr);
}

h1 {
    display: flex;
    justify-content: center;
}
</style>