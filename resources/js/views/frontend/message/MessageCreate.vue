<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadBanner from '@/components/HeadBanner.vue';
import useAuth from '@/composables/useAuth';
import { ref,reactive,onMounted,computed } from "vue";
import useContinents from "@/composables/continentServices.js";
import useZones from "@/composables/zoneServices.js";
import useCountries from "@/composables/countryServices.js";
const { getCountries,countries} = useCountries();
const { getZones,zones} = useZones();
const { getContinents,continents} = useContinents();
//const continents = ref([]);     // Liste des continents
// const zones = ref([]);          // Liste des zones
// const countries = ref([]);      // Liste des pays
const selectedContinent = ref(null);
const selectedZone = ref(null);
const selectedCountry = ref(null);
const titre = ref("Contactez-nous !");
const showPassword = ref(false);
//const { getRoles, roles, } = useRoles();
const { errors, loading } = useAuth();
const user = reactive({
    username: 'Sigha',
    lastname: 'Marc',
    email: 'marcsigha@gmail.com',
    password: '',
    parishOfficial: 1,
    role: 1
})
const filteredZones = computed(() => {
  if (selectedContinent.value) {

    // Filtrer les zones en fonction de la sélection du continent
    return zones.value.filter((zone) => zone.continent_id === selectedContinent.value);
  } else {
    return [];
  }
});

const filteredCountries = computed(() => {
  if (selectedZone.value) {
    // Filtrer les pays en fonction de la sélection de la zone
    return countries.value.filter((country) => country.zone_id === selectedZone.value);
  } else {
    return [];
  }
});
const roles = [
    {name:'fidele'}, 
    {name:'siege'}, 
    {name:'diocese'}, 
    {name:'charge paroissial'}, 
    {name:'groupe de priere'}];

onMounted(async () => {
   // await getRoles();
   await getZones(); 
   await getContinents();
   await getCountries();
   console.log(continents);
  
});
</script>
<template>
    <div class="w-full min-h-screen bg-white m-4 p-4">
     <HeadBanner titre="Creer un message !"/>
         
         <div class="flex items-center justify-center w-full min-h-screen p-3 bg-white">
            <div class="flex flex-col items-center justify-center w-1/2 p-4 h-auto bg-slate-100 rounded-lg shadow">
            

            
        <form @submit.prevent="submitForm">
            <div>
                <label for="titre">Titre:</label>
                <input type="text" id="titre" v-model="formulaire.titre" required>
            </div>
            <div>
                <label for="contenu">Contenu:</label>
                <textarea id="contenu" v-model="formulaire.contenu" required></textarea>
            </div>
            <div>
                <label for="image">Image:</label>
                <input type="file" id="image" v-on:change="onFileChange" accept="image/*">
            </div>
            <div>
                <label for="continent">Continent:</label>
                    <select v-model="selectedContinent">
                    <option v-for="continent in continents" :value="continent.id" :key="continent.id">{{ continent.name_fr }}</option>
                    </select>

                    <label for="zone" v-if="selectedContinent">Zone:</label>
                    <select v-model="selectedZone" v-if="selectedContinent">
                    <option v-for="zone in filteredZones" :value="zone.id" :key="zone.id">{{ zone.name_fr }}</option>
                    </select>

                    <label for="country" v-if="selectedZone">Pays:</label>
                    <select v-model="selectedCountry" v-if="selectedZone">
                    <option v-for="country in filteredCountries" :value="country.id" :key="country.id">{{ country.name_fr }}</option>
                    </select>
            </div>
            <div>
                <label for="theme">Thème:</label>
                <input type="text" id="theme" v-model="formulaire.theme" required>
            </div>
            <div>
                <label for="sousTheme">Sous-thème:</label>
                <input type="text" id="sousTheme" v-model="formulaire.sousTheme" required>
            </div>
           
            <div>
                <button type="submit">Soumettre</button>
            </div>
        </form>
        
         </div>
         
         </div>
        
 
    </div>
     
 
 </template>
 <script>
export default {
    data() {
        return {
            formulaire: {
                titre: '',
                contenu: '',
                image: null,
                theme: '',
                sousTheme: '',
                tag: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Soumettre le formulaire ici
            console.log(this.formulaire);
            // Réinitialiser le formulaire
            this.formulaire = {
                titre: '',
                contenu: '',
                image: null,
                theme: '',
                sousTheme: ''
            };
        },
        onFileChange(event) {
            // Gérer le changement de fichier
            const files = event.target.files;
            if (files.length > 0) {
                this.formulaire.image = files[0];
            } else {
                this.formulaire.image = null;
            }
        }
    }
};
</script>

<style scoped>
/* Styles spécifiques au composant Message.vue */
h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>