<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

let allGames = ref([
    { name: "Tableau périodique", source: "periodicTable", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tableau_p%C3%A9riodique_des_%C3%A9l%C3%A9ments.svg/600px-Tableau_p%C3%A9riodique_des_%C3%A9l%C3%A9ments.svg.png" },
    { name: "Les 500 mots les plus fréquents en allemand", source: "500allemand", image: "https://th.bing.com/th/id/OIP.LQhaHASPN5KBAKNr-Xq7iAHaGq?w=187&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Les 500 mots les plus fréquents en anglais", source: "500anglais", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/165px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" },
    { name: "Apprentissage de π", source: "pi", image: "https://th.bing.com/th/id/OIP.Og_LgDO08tSUggH3bTAieAHaHJ?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Table de multiplication", source: "multiplication", image: "https://th.bing.com/th/id/OIP.h6cS9_lg97wo0ysfQjgFnwHaGS?rs=1&pid=ImgDetMain" },
    { name: "Drapeau pays", source: "drapeau", image: "https://th.bing.com/th/id/OIP.TNKoAEiNVy6ZifHmoLrsYgHaHW?w=196&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Capital pays", source: "capital", image: "https://th.bing.com/th/id/OIP.pr-Y_Bmh-Bw99NX9pkci3QHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Système solaire", source: "systemeSolaire", image: "https://th.bing.com/th/id/OIP.AX9eTZjaFvGeS1A2RKQsvAHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Les espèces animales", source: "especeAnimal", image: "https://th.bing.com/th/id/OIP.LUe3W3gcS1ECLjlWmS-RAQHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Les constellations", source: "constellation", image: "https://th.bing.com/th/id/OIP.huo3Gpu7QwmhPjCSdhvNXgAAAA?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
]);

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
</script>

<template>
<div id="menu">
    <div>
        <!-- Affichage des jeux paginés -->
        <div v-for="game in paginatedGames" :key="game.name">
            <h1>{{ game.name }}</h1>
            <img :src="game.image" alt="Image du jeu" />
            <button @click="goToGamePage(game.source)">Jouer</button>
        </div>
        <!-- Contrôles de pagination -->
        <div class="pagination">
            <button @click="previousPage" :disabled="currentPage === 1">Précédent</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Suivant</button>
        </div>

        <!-- Affichage des numéros de page -->
        <div class="page-numbers">
            <span v-for="page in totalPagesArray" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
                {{ page }}
            </span>
        </div>
    </div>
</div>
</template>

<style scoped>
* {
    margin: 0;
}
#menu {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
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
    margin-bottom: 50px;
}
img {
    max-height: 400px;
    min-height: 400px;
    display: flex;
    justify-content: center;
}
</style>
