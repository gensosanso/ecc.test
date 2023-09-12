<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4">
            <div class="flex w-full justify-between bg-white px-8 py-5">
                <h1 class="text-4xl font-bold capitalize text-primary-blue">
                    Edit User
                </h1>
            </div>

            <section class="mx-auto w-full bg-white p-6">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">
                    Edit a new User
                </h2>
                <form @submit.prevent="saveUser()">
                    <div class="w-full">
                        <label class="">Type de profil</label>
                        <select v-model="user.user_type"
                            class="form-select p-2 outline-none mt-1 border block border-gray-300 rounded-lg shadow-sm w-full">
                            <option v-for="role in roles" :key="role.id" :value="role.id">
                                {{ role.name }}
                            </option>
                        </select>
                    </div>
                    <div class="w-full mt-3">
                        <label class="">
                            <span v-if="user.user_type == 'faithful'">Nom du Fidele</span>
                            <span v-else-if="user.user_type == 'parish'">Nom de la Paroisse</span>
                            <span v-else-if="user.user_type == 'prayerGroup'">Nom du groupe de prière
                            </span>
                            <span v-else-if="user.user_type == 'diocese'">Nom du diocèse
                            </span>
                            <span v-else-if="user.user_type == 'seat'">Nom du Siège
                            </span>
                        </label>
                        <input v-model="user.username"
                            class="border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full"
                            type="text" placeholder="Ex: Marc" />
                    </div>
                    <div class="w-full mt-3" v-if="user.user_type == 'faithful'">
                        <label class="">Prénom du Fidele</label>
                        <input v-model="user.lastname"
                            class="border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full"
                            type="text" placeholder="Ex: Emmanuel" />
                    </div>
                    <div class="w-full mt-3" v-if="user.user_type == 'faithful'">
                        <label class="">Chargé paroissial</label>
                        <div class="flex mt-1 items-center space-x-2">
                            <input type="radio" class="form-radio border-gray-300" id="yes" v-model="user.parish_official"
                                :value="1" />
                            <label for="yes">Oui</label>
                            <input type="radio" class="form-radio border-gray-300" id="no" v-model="user.parish_official"
                                :value="0" />
                            <label for="no">Non</label>
                        </div>
                    </div>
                    <div class="w-full mt-3">
                        <label class="">Adresse mail</label>
                        <input v-model="user.email"
                            class="border-gray-300 border form-input p-2 mt-1 outline-none block rounded-lg shadow-sm w-full"
                            type="email" placeholder="Ex: nom@xyz.com" />
                    </div>

                    <div class="mt-6 flex justify-end">

                        <button type="submit"
                            class="rounded bg-green-300 px-6 py-2 leading-5 text-white focus:outline-none">
                            save
                        </button>

                    </div>
                </form>
            </section>
        </div>
    </div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import { useAuthenticateStore } from "@/stores/authenticate";
import useUser from "@/composables/useUser";
import { useRouter, useRoute } from "vue-router";

const auth = useAuthenticateStore();
const { updateUser, errors, loading, getUser, getUsers, users, isFinish, getUserType, user } = useUser();

const router = useRouter();
const route = useRoute();
const roles = [
    { id: "faithful", name: "Fidele" },
    { id: "prayerGroup", name: "Groupe de prière" },
    { id: "parish", name: "Paroisse" },
    { id: "diocese", name: "Diocèse" },
    { id: "seat", name: "Siège" },
];


const saveUser = async () => {
    await updateUser(route.params.id, user.value);
    if (errors.value.length === 0) {
        router.push({
            name: "admin.user.index",
        });
    }
};

onMounted(async () => {
    await getUser(route.params.id);
})
</script>

