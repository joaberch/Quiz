<script setup>
import { useRouter } from 'vue-router';
import allGames from '../../utils/allGames';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const router = useRouter()

const goToHomePage = () => {
    router.push({ name: 'Home' });
}

let selectedGame = ref("");
let isSearching = ref(false)

const navigateTo = () => {
    isSearching.value = false;
    allGames.value.forEach(element => { //TODO - normalize - example : periodique == périodique
        if (selectedGame.value == element.name) {
            selectedGame.value = element.source
        }
    })
    try {
        let route = selectedGame.value
        selectedGame.value = ""
        router.push({ name: route })
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
    isSearching.value = false
    selectedGame.value = ""
    try {
        router.push({ name: game })
    } catch (err) {
        console.log("error : " + err)
    }
}

onMounted(() => {
    document.addEventListener("click", clicked)
})

onBeforeUnmount(() => {
    document.removeEventListener("click", clicked)
})

function clicked(event) {
    if (!event.target.closest('.search')) {
        console.log("clicked outside")
        isSearching.value = false
    } else {
        isSearching.value = true
    }
}

function defineClass(allGames) {
    allGames.forEach((element) => {
        if (element.isSuggested) {
            return 'suggestionOn'
        }
    })
    return 'suggestionOff'
    //selectedGame.length > 0 && isSearching ? 'suggestionOn' : 'suggestionOff'
}
</script>
<template>
    <nav>
        <a @click="goToHomePage">Menu d'accueil</a>
        <div class="search">
            <input id="searchBar" type="text" placeholder="Recherche" autocomplete="off" v-model="selectedGame"
                @keydown.enter="navigateTo" @input="suggestionChanged">
            <div :class="defineClass(allGames)">
                <span v-for="game in allGames" v-show="game.isSuggested && isSearching && selectedGame.length > 0">
                    <button v-if="game.isSuggested && isSearching" @click="navClicked(game.source)">{{ game.name
                        }}</button>
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

.suggestionOff {
    position: absolute;
    margin-top: 44px;
    width: 324.33px;
    border-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: #40e0d0;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
}

.suggestionOn {
    position: absolute;
    margin-top: 44px;
    width: 324.33px;
    border-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: #40e0d0;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
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