<script setup>
import { computed } from 'vue';
const props = defineProps({
    elementData: Object
})

const gridStyle = computed(() => {
  return {
    gridColumn: `${props.elementData.xpos} / ${props.elementData.xpos + 1}`,
    gridRow: `${props.elementData.ypos} / ${props.elementData.ypos + 1}`
  };
});
</script>
<template>
    <div :class="elementData.category" :id="elementData.number" :style="gridStyle">
        <p id="number">{{ elementData.number }}</p>
        <p id="symbol">{{ elementData.symbol }}</p>
        <p id="name">{{ elementData.name }}</p>
        <p id="atomic_mass">{{ elementData.atomic_mass }}</p>
    </div>
</template>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    padding: 5px 3px;
    margin: 3px;
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
/* Background color for each type */

/* Métaux alcalins */
.alkali_metal {
    background-color: orange;
}
/* Métaux alcalino-terreux */
.alkaline_earth_metal {
    background-color: yellow;
}
/* Métaux de transition */
.transition_metal {
    background-color: orangered;
}
/* Lanthanides */
.lanthanide {
    background-color: burlywood;
}
/* Actinides */
.actinide {
    background-color: pink;
}
/* Métaux pauvres */
.post-transition_metal {
    background-color: lightblue;
}
/* Métalloïdes */
.metalloid {
    background-color: lightgreen;
}
/* Non-métaux */
.reactive_nonmetal {
    background-color: green;
}
/* Gaz nobles */
.noble_gas {
    background-color: purple;
}
/* inconnu */
.unknown {
    background-color: gray;
}
</style>