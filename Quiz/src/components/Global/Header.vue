<script setup>
import { useRouter } from 'vue-router';
import allGames from '../../utils/allGames';
import { ref } from 'vue';

const router = useRouter()

const goToHomePage = () => {
    router.push({ name: 'Home' });
}

let selectedGame = ref("");
let isSearching = ref(false)

const navigateTo = () => {
    isSearching.value = false;
    allGames.value.forEach(element => { //TODO - normalize - example : periodique == périodique
        if(selectedGame.value == element.name) {
            selectedGame.value = element.source
        }
    })
    try {
    router.push({ name: selectedGame.value })
    } catch (err) {
        console.log("error : " + err)
    }
}

const suggestionChanged = () => {
    isSearching.value = true
    allGames.value.forEach(element => {
        if (element.name.toLowerCase().includes(selectedGame.value.toLowerCase())) {
            element.isSuggested = true
        } else {
            element.isSuggested = false
        }
    });
}

const navClicked = (game) => {
    console.log(game)
    try {
    router.push({ name: game })
    } catch (err) {
        console.log("error : " + err)
    }
}
</script>
<template>
    <nav>
        <a @click="goToHomePage">Menu d'accueil</a>
        <div class="search">
            <input id="searchBar" type="text" placeholder="Recherche" 
            v-model="selectedGame" 
            @keydown.enter="navigateTo"
            @input="suggestionChanged">
            <div class="suggestion" v-show="isSearching">
                <span v-for="game in allGames" v-show="game.isSuggested">
                    <button v-if="game.isSuggested" @click="navClicked(game.source)">{{ game.name }}</button>
                </span>
            </div>
        </div>
        <div class="login">
            <img src="https://cdn-icons-png.flaticon.com/128/2609/2609282.png" width="50px" height="50px">
            <button>Se connecter</button>
        </div>
    </nav>
</template>
<style scoped>
.login>button {
    margin-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100px;
}
.login {
    display: flex;
    align-items: center;
    margin-left: 30%;
}
span {
    border-bottom: 1px solid black;
}
button {
    background-color: #00000000;
    border: none;
    margin-bottom: 0px;
    margin-top: 10px;
}
.suggestion {
    position: absolute;
    margin-top: 44px;
    width: 300px;
    padding: 5px 5px 5px 10px;
    border: 5px solid #40e0d0;
    border-radius: 0px 0px 15px 15px;
    background-color: #40e0d0;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
}
.search {
    display: flex;
    flex-direction: column;
}

nav {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: solid 1px black;
}
input {
    padding: 5px 5px 5px 10px;
    border: 5px solid #40e0d0;
    width: 300px;
    height: 25px;
    border-radius: 15px 15px 0px 0px;
    margin-left: 30px;
    outline-width: 0px;
}
a {
    margin-left: 3%;
}
</style>