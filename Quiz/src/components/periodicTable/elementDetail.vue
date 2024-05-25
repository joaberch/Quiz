<script setup>
//TODO - responsive design
defineProps({
    elementData: Object,
})
</script>
<template>
    <div class="popup">
        <div class="popup_header">
            <h3>Détails</h3>
            <p @click="this.$emit('close')">X</p>
        </div>
        <div class="popup_body">
            <!--left part of the popup-->
            <div :style="{ backgroundColor: `#${elementData.cpk_hex}` }" class="left">
                <p id="atomicNumber">{{ elementData.number }}</p>
                <p id="symbol">{{ elementData.symbol }}</p>
                <p id="name">{{ elementData.name }}</p>
                <p id="category">{{ elementData.category }}</p>
                <a id="wiki" target="_blank" :href="elementData.source"><button>Wikipedia</button></a>
            </div>
            <!--right part of the popup-->
            <tbody class="right">
                <tr class="data_row">
                    <td class="data_cat">Nom :</td>
                    <td class="data">{{ elementData.name }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Symbole :</td>
                    <td class="data">{{ elementData.symbol }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Masse atomique :</td>
                    <td class="data">{{ elementData.atomic_mass }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Point d'ébullition :</td>
                    <td class="data">{{ elementData.boil }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Catégorie :</td>
                    <td class="data">{{ elementData.category }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Densité :</td>
                    <td class="data">{{ elementData.density }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Découvert par :</td>
                    <td class="data">{{ elementData.discovered_by }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Point de fusion :</td>
                    <td class="data">{{ elementData.melt }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Chaleur molaire :</td>
                    <td class="data">{{ elementData.molar_heat }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Nommé par :</td>
                    <td class="data">{{ elementData.named_by }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Numéro atomique :</td>
                    <td class="data">{{ elementData.number }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Période :</td>
                    <td class="data">{{ elementData.period }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Groupe :</td>
                    <td class="data">{{ elementData.group }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Phase :</td>
                    <td class="data">{{ elementData.phase }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Bloc :</td>
                    <td class="data">{{ elementData.block }}</td>
                </tr><tr class="data_row">
                    <td class="data_cat">Configuration d'électron :</td>
                    <td class="data">{{ elementData.electron_configuration }}</td>
                </tr>
            </tbody>
        </div>
    </div>
</template>
<style scoped>
tr {
    border-bottom: 1px gray solid;
}
#atomicNumber {
    font-size: 40px;
    padding: 1%;
}
#symbol {
    font-size: 70px;
    padding: 1%;
}
#name {
    font-size: 30px;
    padding: 1%;
}
#category {
    font-size: 25px;
    padding: 1%;
}
#wiki {
    font-size: 35px;
}
.data {
    text-align: left;
}
.data_cat {
    width: 250px;
    padding-left: 15px;
}
.data_row {
    display: flex;
    align-items: baseline; /* Pour aligner les balises en bas */
    margin-bottom: 10px; /* Pour ajouter un espace entre chaque paire de balises */
}

.right {
    margin-left: 20px;
}

.left {
    margin-left: 30px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1.5px solid black;
}
.popup_body {
    display: flex;
}

.popup_header>p {
    margin-left: 80%;
}

.popup_header {
    display: flex;
    align-items: center;
}

p {
    margin: 0px;
}

h3 {
    margin-left: 30px;
    margin-top: 3%;
    margin-right: 3%;
    margin-bottom: 3%;
}

.popup {
    width: 70%;
    height: 90%;
    background-color: white;
    border-radius: 30px;
    position: absolute;
    margin-left: 12.5%;
}
</style>