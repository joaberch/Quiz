<!--TODO : drop-down menu-->
<template>
    <div id="container">
      <div v-for="category in words.categories" :key="category.name" class="category">
        <h2>{{ category.name }}</h2>
        <div v-for="subcategory in category.subcategories" :key="subcategory.name" class="subcategory">
          <h3>{{ subcategory.name }}</h3>
          <ul class="word-list">
            <li v-for="word in subcategory.words" :key="word.de">
              <strong>{{ word.de }}</strong> - {{ word.fr }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import words from '../../utils/mots_allemand_francais.json';
  </script>
  
  <style scoped>
  #container {
    margin-top: 70px;
  }
  .category, .subcategory, .word-list {
    margin-bottom: 20px;
  }
  .word-list {
    margin-left: 20px;
  }
  </style>
  