<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
//importing the list of every game
import allGames from '../utils/allGames';

let currentPage = ref(1);
let gamesByPage = ref(1);

const totalPages = computed(() => Math.ceil(allGames.value.length / gamesByPage.value));

const paginatedGames = computed(() => {
    const start = (currentPage.value - 1) * gamesByPage.value;
    const end = start + gamesByPage.value;
    return allGames.value.slice(start, end);
});

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const goToPage = (page) => {
    currentPage.value = page;
};

const totalPagesArray = computed(() => {
    return Array.from({ length: totalPages.value }, (v, k) => k + 1);
});

const router = useRouter()

const goToGamePage = (source) => {
    // Redirigez vers la page spécifique en fonction de la source du jeu
    router.push({ name: source });
};

defineExpose({
    allGames
})
</script>

<template>
    <div id="menu">
        <div>
            <!-- Affichage des jeux paginés -->
            <div v-for="game in paginatedGames" :key="game.name">
                <h1>{{ game.name }}</h1>
                <div id="play">
                    <img @click="goToGamePage(game.source)" :src="game.image" alt="Image du jeu" />
                    <button @click="goToGamePage(game.source)">Jouer</button>
                </div>
            </div>
            <!-- Contrôles de pagination -->
            <div class="pagination">
                <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
                <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
            </div>

            <!-- Affichage des numéros de page -->
            <div class="page-numbers">
                <span v-for="page in totalPagesArray" :key="page" @click="goToPage(page)"
                    :class="{ active: currentPage === page }">
                    {{ page }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    overflow: hidden;
}
* {
    margin: 0px;
    padding: 0px;
}

#menu {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.page-numbers {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

span {
    margin: 0 5px;
    cursor: pointer;
}

span.active {
    font-weight: bold;
}

h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

img {
    height: 400px;
    margin-bottom: 10px;
}

#play {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

button {
    padding: 2px 5px;
}

.pagination>button:first-child {
    margin-right: 5px;
}

.pagination>button:last-child {
    margin-left: 5px;
}
</style>
