<template>
    <div>
      <h1>Jeux disponibles</h1>
      <ul>
        <li v-for="game in allGames" :key="game.source">
          {{ game.name }}
          <button @click="toggleSelection(game)">
            {{ selectedGames.includes(game) ? 'Désélectionner' : 'Sélectionner' }}
          </button>
        </li>
      </ul>
      <h2>Jeux sélectionnés</h2>
      <ul>
        <li v-for="game in selectedGames" :key="game.source">
          {{ game.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { allGames } from 'vue';
  
  const selectedGames = ref([]);
  
  const toggleSelection = (game) => {
      if (selectedGames.value.includes(game)) {
          selectedGames.value = selectedGames.value.filter(g => g !== game);
      } else {
          selectedGames.value.push(game);
      }
  };
  </script>
  
  <style scoped>
  ul {
      list-style-type: none;
      padding: 0;
  }
  
  li {
      margin-bottom: 10px;
  }
  
  button {
      margin-left: 10px;
      padding: 5px 10px;
  }
  </style>
  