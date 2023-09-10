<script setup>
import { onMounted, reactive, ref } from 'vue';

import useAuth from '@/composables/useAuth';
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid"

const showPassword = ref(false);
const { errors, loading, createUser1, isFinish, cleanErrors, } = useAuth();
const roles = [
    {id:'faithful', name:'Fidele'},
    {id:'prayerGroup', name:'Groupe de prière'},
    {id:'parish', name:'Paroisse'},
    {id:'diocese', name:'Diocèse'},
    {id:'seat', name:'Siège'}
];
const user = reactive({
    username: '',
    lastname: '',
    email: '',
    password: '',
    parish_official: false,
    user_type: 'faithful',
})

const store = async () => {
    await createUser1({...user});
}

</script>

<template>
          <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
           
            <section class="mx-auto w-full bg-white p-6">


  <Error :errors="errors" @cleanErrors="cleanErrors" />
  <RegisterSuccess v-if="isFinish" />

                <form v-else class="flex flex-col w-full py-3 px-4" @submit.prevent="store()">
            <div class="w-full">
              <label>Type de profil</label>
              <select v-model="user.user_type" class="form-select p-2 outline-none mt-1 border block border-gray-300 rounded-lg shadow-sm w-full">
                <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
              </select>
            </div>

            <div class="w-full mt-3">
              <label>
                <span v-if="user.user_type === 'faithful'">Nom du Fidele</span>
                <span v-else-if="user.user_type === 'parish'">Nom de la Paroisse</span>
                <span v-else-if="user.user_type === 'prayerGroup'">Nom du groupe de prière</span>
                <span v-else-if="user.user_type === 'diocese'">Nom du diocèse</span>
                <span v-else-if="user.user_type === 'seat'">Nom du Siège</span>
              </label>
              <input v-model="user.username" class="border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full" type="text" placeholder="Ex: Marc" />
            </div>
            <div class="w-full mt-3" v-if="user.user_type === 'faithful'">
              <label>Prénom du Fidele</label>
              <input v-model="user.lastname" class="border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full" type="text" placeholder="Ex: Emmanuel" />
            </div>
            <div class="w-full mt-3" v-if="user.user_type === 'faithful'">
              <label>Chargé paroissial</label>
              <div class="flex mt-1 items-center space-x-2">
                <input type="radio" class="form-radio border-gray-300" id="yes" v-model="user.parish_official" :value="true" />
                <label for="yes">Oui</label>
                <input type="radio" class="form-radio border-gray-300" id="no" v-model="user.parish_official" :value="false" />
                <label for="no">Non</label>
              </div>
            </div>
            <div class="w-full mt-3">
              <label>Adresse mail</label>
              <input v-model="user.email" class="border-gray-300 border form-input p-2 mt-1 outline-none block rounded-lg shadow-sm w-full" type="email" placeholder="Ex: nom@xyz.com" />
            </div>
            <div class="w-full mt-3">
              <label>Mot de passe</label>
              <div class="relative mt-1">
                <input v-model="user.password" class="border-gray-300 border form-input py-2 pr-10 outline-none block rounded-lg shadow-sm w-full" :type="showPassword ? 'text' : 'password'" placeholder="8+ caracteres" />
                <span class="absolute top-3 right-4 cursor-pointer" @click="showPassword = !showPassword">
                  <EyeIcon v-if="!showPassword" class="w-5 h-5 text-gray-500" />
                  <EyeSlashIcon v-else class="w-5 h-5 text-gray-500" />
                </span>
              </div>
            </div>
            <button type="submit" :disabled="loading" class="p-2 mt-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 disabled:bg-blue-300 text-white font-semibold cursor-pointer flex items-center justify-center">
              <Spin v-if="loading" />
              <span v-else>S'inscrire</span>
            </button>

        </form>
    </section>
    </div>
      </div>

  </template>




