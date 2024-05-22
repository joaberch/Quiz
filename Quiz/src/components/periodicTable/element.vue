<script setup>
defineProps({
    elementData: Object
})
</script>
<template>
    <div class="square" :class="elementData.category">
        <p id="number">{{ elementData.number }}</p>
        <p id="symbol">{{ elementData.symbol }}</p>
        <p id="name">{{ elementData.name }}</p>
        <p id="atomic_mass">{{ elementData.atomic_mass }}</p>
    </div>
</template>
<style scoped>
.square {
    display: flex;
    flex-direction: column;
    padding: 5px 5px;
    margin: 10px;
    border: black 1px solid;
    border-radius: 10px;
}
p{
    margin: 0
}
#number {
    font-size: 10px;
}
#symbol {
    font-size: 12px;
}
#name {
    font-size: 8px;
}
#atomic_mass {
    font-size: 8px;
}
</style>