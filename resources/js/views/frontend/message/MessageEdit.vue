<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HeadBanner from '@/components/HeadBanner.vue';
import useAuth from '@/composables/useAuth';
import { ref,reactive,onMounted,computed } from "vue";
import useTheme from "@/composables/useTheme";
import useSubtheme from "@/composables/useSubtheme";
import useContinents from "@/composables/continentServices.js";
import useZones from "@/composables/zoneServices.js";
import useCountries from "@/composables/countryServices.js";  
import useMessage from '@/composables/useMessage';
const {createMessage,getMessageAttributes,updateMessage,message,messages } = useMessage();

const {getAllSubthemes,subthemes } = useSubtheme();
const {getAllThemes,themes} = useTheme();
const { getCountries,countries} = useCountries();
const { getZones,zones} = useZones();
const { getContinents,continents} = useContinents();
//const continents = ref([]);     // Liste des continents
// const zones = ref([]);          // Liste des zones
// const countries = ref([]);      // Liste des pays
const selectedTheme = ref(null);
const selectedSubtheme = ref(null);
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
const filteredSubthemes = computed(() => {
  if (selectedTheme.value) {
    console.log(subthemes);

    // Filtrer les zones en fonction de la sélection du continent
    return subthemes.value.filter((subtheme) => subtheme.theme_id === selectedTheme.value);
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

  const saveMessage = async () => {
  const formData = new FormData();
  formData.append('title', message.title);
  formData.append('content', message.content);
  formData.append('status', '1');
  formData.append('user_id', '1');
  formData.append('continent_id', selectedContinent.value);
  formData.append('zone_id', selectedZone.value);
  formData.append('country_id', selectedCountry.value);
  formData.append('theme_id', selectedTheme.value);
  formData.append('subtheme_id', selectedSubtheme.value);
  formData.append("_method", "PUT");
  
  const Id = router.params.messageId;
  console.log(Id);
  await updateMessage(Id,formData); 
  console.log(formData);
  
  
  
  // Faire quelque chose avec le FormData, comme une requête HTTP

  // Réinitialiser les valeurs des champs
  
//   selectedContinent.value = null;
//   selectedZone.value = null;
//   selectedCountry.value = null;
//   selectedTheme.value = null;
//   selectedSubtheme.value = null; 

  
};
const router = useRoute();



    
    onMounted(async () => {
        // await getRoles();
        const messageId = router.params.messageId;

        console.log(messageId);
        await getZones(); 
        await getContinents();
        await getCountries();
        await getAllThemes(); 
        await getAllSubthemes();
        await getMessageAttributes(messageId);
        console.log(message)
        
        console.log(continents.value);
        message.title = messages.value.title;
        message.content = messages.value.content;
        message.status = messages.value.status;
        message.user_id = messages.value.user_id;
        message.continent_id = messages.value.continent_id;
        message.zone_id = messages.value.zone_id;
        message.country_id = messages.value.country_id;
        message.theme_id = messages.value.theme_id;
        message.subtheme_id = messages.value.subtheme_id;
        
        console.log(message);
        
        });
        
      
   
</script>
<template>
    <div class="w-full min-h-screen bg-white m-4 p-4">
     <HeadBanner titre="Creer un message !"/>
         
         <div class="flex items-center justify-center w-full min-h-screen p-3 bg-white">
            <div class="flex flex-col items-center justify-center w-1/2 p-4 h-auto bg-slate-100 rounded-lg shadow">
            

            
        <form @submit.prevent="saveMessage" id="messageform" enctype="multipart/form-data">
            <div>
                <label for="title">Titre:</label>
                <input type="text" id="title" v-model="message.title"  required>
            </div>
            <div>
                <label for="content">Contenu:</label>
                <textarea id="content" v-model="message.content" required></textarea>
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
                <select v-model="selectedTheme">
                    <option v-for="theme in themes" :value="theme.id" :key="theme.id">{{ theme.name }}</option>
                </select>
                <label for="subtheme" v-if="selectedTheme">Sous-theme:</label>
                    <select v-model="selectedSubtheme" v-if="selectedTheme">
                    <option v-for="subtheme in filteredSubthemes" :value="subtheme.id" :key="subtheme.id">{{ subtheme.name }}</option>
                    </select>
                <!-- <input type="text" id="theme" v-model="formulaire.theme" required> -->
                
            </div>
            <!-- <div>
                <label for="sousTheme">Sous-thème:</label>
                <input type="text" id="sousTheme" v-model="formulaire.sousTheme" required>
            </div> -->
           
            <div class="mt-4">
                <button type="submit">Soumettre</button>
            </div>
        </form>
        
         </div>
         
         </div>
        
 
    </div>
     
 
 </template>


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