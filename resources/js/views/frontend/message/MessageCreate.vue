<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadBanner from '@/components/HeadBanner.vue';
import { ref } from "vue";
const titre = ref("Contactez-nous !");
</script>
<template>
    <div class="w-full min-h-screen bg-white m-0 p-0">
     <HeadBanner titre="Creer un message !"/>
 
       
         <div class=" pt-4 flex items-center justify-start w-[92%] h-auto mx-auto rounded-2xl overflow-clip shadow">
             <div class="w-full h-full bg-white">
                 <div class="w-full flex flex-col p-3">
                             <input type="text" placeholder="Nom" class="w-full border border-gray-200 rounded-md p-3"/>
                             <input type="mail" placeholder="Email" class="w-full border border-gray-200 rounded-md my-4 p-3"/>
                             <input type="phone" placeholder="Téléphone" class="w-full border border-gray-200 rounded-md p-3"/>
                             <textarea placeholder="Votre message" class="w-full border border-gray-200 rounded-md py-8 px-3 my-3"></textarea>
 
                             <input class="w-28 text-white font-bold p-3 cursor-pointer  bg-blue-500 rounded-md mt-2" type="submit" value="Envoyer"/>
                         </div>
             </div>
             
             
         </div>
 
        
 
      </div>
 
 </template>