<template>
    <div>
      <div class="begin">
        <button @click="startQuiz" :disabled="selectedGames.length === 0">Commencer le quiz</button>
      </div>
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
      <h2 v-if="selectedGames.length > 0">Sujets sélectionnés</h2>
      <table v-if="selectedGames.length > 0">
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
  
  //All games are selected by default
  const selectedGames = ref([...allGames.value]);

  const startQuiz = () => {
    console.log(selectedGames)
  }
  
  const toggleSelection = (game) => {
    if (selectedGames.value.includes(game)) {
      selectedGames.value = selectedGames.value.filter(g => g !== game);
    } else {
      selectedGames.value.push(game);
    }
  };
  </script>
  
  <style scoped>
  .begin>button {
    background-color: #4CAF50; /* Vert */
    border: none; /* Pas de bordure */
    color: white; /* Texte blanc */
    padding: 15px 32px; /* Espacement intérieur */
    text-align: center; /* Alignement du texte */
    text-decoration: none; /* Pas de soulignement */
    display: inline-block; /* Affichage en ligne */
    font-size: 16px; /* Taille de police */
    margin: 4px 2px; /* Marges */
    cursor: pointer; /* Curseur de la souris */
    border-radius: 8px; /* Coins arrondis */
    transition: background-color 0.3s, transform 0.3s; /* Transition douce pour le changement de couleur et l'animation */
  }

  .begin>button:hover:enabled {
  background-color: #45a049; /* Vert légèrement plus foncé */
  transform: scale(1.05); /* Légère augmentation de la taille */
}

.begin>button:active:enabled {
  background-color: #3e8e41; /* Vert encore plus foncé */
  transform: scale(0.95); /* Légère réduction de la taille */
}

.begin>button:disabled {
  background-color: #ccc; /* Gris clair pour le bouton désactivé */
  color: #666; /* Couleur du texte pour le bouton désactivé */
  cursor: not-allowed; /* Curseur interdit */
  box-shadow: none; /* Pas d'ombre */
}

  .begin {
    margin-top: 75px;
    display: flex;
    justify-content: center;
  }

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
  