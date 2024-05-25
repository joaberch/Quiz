<script setup>
import { computed } from 'vue';
import elementDetail from './elementDetail.vue';
import { ref } from 'vue';

let isDisplayingMoreData = ref(false)

const props = defineProps({
    elementData: {
        type: Object,
        required: true,
    }
})

const gridStyle = computed(() => {
    return {
        gridColumn: `${props.elementData.xpos} / ${props.elementData.xpos + 1}`,
        gridRow: `${props.elementData.ypos} / ${props.elementData.ypos + 1}`,
        backgroundColor: `#${props.elementData.cpk_hex}`
    };
});
</script>

<template>
    <div :id="elementData.number" :style="gridStyle" @click="isDisplayingMoreData = true"> <!--:class="elementData.category"-->
        <p id="number">{{ elementData.number }}</p>
        <p id="symbol">{{ elementData.symbol }}</p>
        <p id="name">{{ elementData.name }}</p>
        <p id="atomic_mass">{{ elementData.atomic_mass }}</p>
    </div>
    <elementDetail :elementData="elementData" v-if="isDisplayingMoreData" @close="isDisplayingMoreData = false" />
</template>
<style scoped>
div {
    display: flex;
    flex-direction: column;
    padding: 5px 3px;
    margin: 3px;
    border: black 1px solid;
    border-radius: 10px;
    cursor: context-menu;
}

p {
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