<template>
    <div>
      <h1>Sujets disponibles</h1>
      <table>
        <thead>
          <tr>
            <th>Nom du jeu</th>
            <th>Sélectionner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in allGames" :key="game.source">
            <td>{{ game.name }}</td>
            <td>
              <label class="switch">
                <input 
                  type="checkbox" 
                  :checked="selectedGames.includes(game)" 
                  @change="toggleSelection(game)"
                >
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Sujets sélectionnés</h2>
      <table>
        <thead>
          <tr>
            <th>Nom du jeu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in selectedGames" :key="game.source">
            <td>{{ game.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import allGames from '../../utils/allGames.js';
  
  const selectedGames = ref([...allGames.value]);
  
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
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
    padding: 2px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: green;
  }
  
  input:checked + .slider:before {
    transform: translateX(20px);
  }
  
  .slider.round {
    border-radius: 20px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  </style>
  