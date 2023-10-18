<template>
    <div class="relative min-h-screen w-full bg-white xl:mt-0 xl:p-4">
        <div class="z-0 w-full p-4"> <h1>Creer un article</h1>

            <section class="mx-auto w-full bg-white p-6">
               

                <form class="flex flex-col w-full py-3 px-4" @submit.prevent="">
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
                <label for="theme">Thème:</label>
                <input type="text" id="theme" v-model="formulaire.theme" required>
            </div>

            <div>
                <label for="sousTheme">Sous-thème:</label>
                <input type="text" id="sousTheme" v-model="formulaire.sousTheme" required>
            </div>

            <div>
                <label for="tag">Tag associé:</label>
                <input type="text" id="tag" v-model="formulaire.tag" required>
            </div>

            <div>
                <button type="submit">Soumettre</button>
            </div>
                   
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useAuth from '@/composables/useAuth';
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/solid";

const showPassword = ref(false);
const { errors, loading, createUser1, isFinish, cleanErrors, } = useAuth();

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
                sousTheme: '',
                tag: ''
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
