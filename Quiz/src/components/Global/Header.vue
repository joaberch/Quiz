<script setup>
//TODO : predictive search from data and not games?
import { useRouter } from 'vue-router';
import allGames from '../../utils/allGames';
import { ref, onMounted, onBeforeUnmount } from 'vue';

//initialize the router
const router = useRouter();
//reactive reference, equals the user input in the searchbar
let selectedGame = ref("");
//reactive reference, if the predicitive search is currently shown
let isSearching = ref(false);

const goTo = (route) => {
    console.log(route)
    router.push({ name: route });
}

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

const navClicked = (game) => {
    isSearching.value = false
    selectedGame.value = ""
    try {
        router.push({ name: game })
    } catch (err) {
        console.log("error : " + err)
    }
}

//When the user put any input in the searchbar
const suggestionChanged = () => {
    //the predictive search is on
    isSearching.value = true
    //for each game check if the element match the request to be displayed
    allGames.value.forEach(element => {
        if (element.name.toLowerCase().includes(selectedGame.value.toLowerCase())) {
            element.isSuggested = true
        } else {
            element.isSuggested = false
        }
    });
}

//When the componant is mounted
//Add an event listener
onMounted(() => {
    document.addEventListener("click", clicked)
})

//Just before the componant is unmounted
onBeforeUnmount(() => {
    document.removeEventListener("click", clicked)
})

//When the user click on the page
function clicked(event) {
    //if the user click on the searchbar
    if (event.target.closest('.search')) {
        isSearching.value = true
    } else {
        isSearching.value = false
    }
}

//Define the class of the predictive search
function defineClass(allGames) {
    //if at least one game should be shown in the predictive searcg put the style when shown
    allGames.forEach((element) => {
        if (element.isSuggested) {
            return 'suggestionOn'
        }
    })
    //else
    return 'suggestionOff'
}
</script>
<template>
    <nav>
        <!--Home menu-->
        <img id="hamburger" src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-8.jpg" height="40px">
        <a @click="goTo('Home')">Menu d'accueil</a>
        <!--Search bar-->
        <div class="search">
            <input id="searchBar" disabled type="text" placeholder="Actuellement désactivé" autocomplete="off" v-model="selectedGame"
                @keydown.enter="navigateTo" @input="suggestionChanged">
            <!--Predictive research-->
            <div :class="defineClass(allGames)">
                <span v-for="game in allGames" v-show="game.isSuggested && isSearching && selectedGame.length > 0">
                    <button v-if="game.isSuggested && isSearching" @click="navClicked(game.source)">{{ game.name
                        }}</button>
                </span>
            </div>
        </div>
        <!--Start quiz-->
        <div class="start">
            <a @click="goTo('start')">Commencer le quiz</a>
        </div>
        <!--login-->
        <div class="login">
            <img src="https://cdn-icons-png.flaticon.com/128/2609/2609282.png" width="50px" height="50px">
            <button>Se connecter</button>
        </div>
    </nav>
</template>
<style scoped>
.start {
    margin-left: 50px;
}
/* Style for the login button */
.login>button {
    margin-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100px;
}
/* Style for the login container */
.login {
    display: flex;
    align-items: center;
    margin-left: 15%;
}
/* Style for the container of each predictive search option */
span {
    border-bottom: 1px solid black;
    margin-bottom: 10px;
}
/* Style for every button */
button {
    background-color: #00000000;
    border: none;
    margin-bottom: 0px;
    margin-top: 10px;
}
/* Style for the predective search when there's not any option displayed */
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
/* Style for the predictive search when there's option displayed */
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
/* Style for the search bar container */
.search {
    display: flex;
    flex-direction: column;
}
/* Style for the whole header container */
nav {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: solid 1px black;
    background-color: white;
    position:absolute;
    top: 0;
    width: 100%;
}
/* Style for the search bar */
input {
    padding: 5px 5px 5px 10px;
    border: 5px solid #40e0d0;
    width: 300px;
    height: 25px;
    border-radius: 15px 15px 0px 0px;
    margin-left: 30px;
    outline-width: 0px;
}
/* Style for the link */
a {
    border: #40e0d0 solid 3px;
    padding: 5px;
    border-radius: 15px;
    cursor: context-menu;
}
/* Style of the hamburger menu */
#hamburger {
    margin-left: 3%;
}
</style>