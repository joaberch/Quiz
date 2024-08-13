import { ref } from "vue";

const allGames = ref([
    { name: "Tableau périodique", source: "periodicTable", isSuggested: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tableau_p%C3%A9riodique_des_%C3%A9l%C3%A9ments.svg/600px-Tableau_p%C3%A9riodique_des_%C3%A9l%C3%A9ments.svg.png" },
    { name: "Les 500 mots les plus fréquents en allemand", source: "allemand", isSuggested: false, image: "https://th.bing.com/th/id/OIP.LQhaHASPN5KBAKNr-Xq7iAHaGq?w=187&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Les 500 mots les plus fréquents en anglais", source: "anglais", isSuggested: false, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/165px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" },
    { name: "Apprentissage de π", source: "pi", isSuggested: false, image: "https://th.bing.com/th/id/OIP.Og_LgDO08tSUggH3bTAieAHaHJ?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Table de multiplication", source: "multiplication", isSuggested: false, image: "https://th.bing.com/th/id/OIP.h6cS9_lg97wo0ysfQjgFnwHaGS?rs=1&pid=ImgDetMain" },
    { name: "Drapeau pays", source: "drapeau", isSuggested: false, image: "https://th.bing.com/th/id/OIP.TNKoAEiNVy6ZifHmoLrsYgHaHW?w=196&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Capital pays", source: "capital", isSuggested: false, image: "https://th.bing.com/th/id/OIP.pr-Y_Bmh-Bw99NX9pkci3QHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Système solaire", source: "systemeSolaire", isSuggested: false, image: "https://th.bing.com/th/id/OIP.AX9eTZjaFvGeS1A2RKQsvAHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Les espèces animales", source: "especeAnimal", isSuggested: false, image: "https://th.bing.com/th/id/OIP.LUe3W3gcS1ECLjlWmS-RAQHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    { name: "Les constellations", source: "constellation", isSuggested: false, image: "https://th.bing.com/th/id/OIP.huo3Gpu7QwmhPjCSdhvNXgAAAA?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
]);

export default allGames;