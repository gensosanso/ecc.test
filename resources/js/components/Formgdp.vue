<!-- <template>
    <div>
      <label :for="name">{{ label }}</label>
      <input :type="type" :name="name" v-model="inputValue" :required="isRequired" @input="validateInput" />
      <div v-if="showError" class="error-container">
        <span v-for="(error, index) in errorMessages" :key="index" class="error-message">{{ error }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "text"
      },
      validationRules: {
        type: Array,
        default: () => []
      },
      isRequired: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: "",
        showError: false,
        errorMessages: []
      };
    },
    methods: {
      validateInput() {
        this.showError = false;
        this.errorMessages = [];
  
        if (this.isRequired && this.inputValue === "") {
          this.showError = true;
          this.errorMessages.push("Ce champ est requis.");
          return;
        }
  
        for (let i = 0; i < this.validationRules.length; i++) {
          const rule = this.validationRules[i];
          if (!rule.validator(this.inputValue)) {
            this.showError = true;
            this.errorMessages.push(rule.message);
          }
        }
      }
    }
  };
  </script>
  
  <style>
  .error-container {
    margin-top: 5px;
  }
  
  .error-message {
    color: red;
    display: block;
  }
  </style>
  -->
  <template>
    <div class="grid grid-cols-2 gap-4">
      <!-- <Form :fields="formFields" @form-submit="handleFormSubmit" /> -->
      <!-- <Form :label="formFields" name="name" type="text" :validation-rules="validationRules" :is-required="true" /> -->
      <Form v-for="(field, index) in formFields" :key="index" :label="field.label" :name="field.name" :type="field.type" :validation-rules="field.validationRules" :is-required="field.isRequired" :options="field.options"  />
    </div>
  </template>
  
  <script>
  import Form from './Form.vue';
  
  export default {
    components: {
      Form
    },
    data() {
      return {
        formFields: [
         
           {
            label: "Nom GDP",
            name: "nomGdp",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "Le grade doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Objet Social",
            name: "objetsocial",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "La fonction doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Numero de telephone",
            name: "numphone",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "La fonction doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Numero de telephone 2",
            name: "numphone2",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "La fonction doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Ordre de culte ",
            name: "cultorder",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "La fonction doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Nombre de fideles",
            name: "nbrefideles",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "La fonction doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Nom du responsable",
            name: "nomresponsable",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "Le ministère doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Adresse",
            name: "adresse",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "l'adresse doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "ville",
            name: "ville",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "L'instrument doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "Adresse Email",
            name: "email",
            type: "email",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
                message: "Veuillez entrer une adresse email valide."
              }
            ],
            isRequired: false
          },
          {
            label: "Site Web",
            name: "website",
            type: "url",
            validationRules: [
              {
                validator: (value) => /^(http|https):\/\/[^ "]+$/.test(value),
                message: "Veuillez entrer une URL valide."
              }
            ],
            isRequired: false
          },
          {
            label: "Pays d'implantation",
            name: "country",
            type: "text",
            validationRules: [
              {
                validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
                message: "Le grade doit contenir uniquement des caractères alphanumériques."
              }
            ],
            isRequired: false
          },
          {
            label: "YouTube",
            name: "youtube",
            type: "url",
            validationRules: [
              {
                validator: (value) => /^(http|https):\/\/[^ "]+$/.test(value),
                message: "Veuillez entrer une URL YouTube valide."
              }
            ],
            isRequired: false
          },
          {
            label: "Date de Creation",
            name: "birth",
            type: "date",
            validationRules: [
              {
                validator: (value) => value !== "",
                message: "Veuillez sélectionner une date de naissance."
              }
            ],
            isRequired: false
          },
          
         
          {
            label: "cours biblique",
          name: "coursbiblique",
          type: "dropdown",
          options: [
            { label: "oui", value: "1" },
            { label: "non", value: "0" }
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          },
          {
            label: "planning recurrent",
          name: "planning",
          type: "dropdown",
          options: [
            { label: "oui", value: "1" },
            { label: "non", value: "0" }
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          },
         
          {
            label: "Continent",
          name: "continent",
          type: "dropdown",
          options: [
            { label: "Asie", value: "asie" },
            { label: "Afrique", value: "afrique" },
            { label: "Europe", value: "europe" },
            { label: "Amerique", value: "amerique" },
            { label: "Afrique", value: "afrique" }
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          },
          {
            label: "Secteur d'activité",
          name: "secteur",
          type: "dropdown",
          options: [
            { label: "Asie", value: "asie" },
            { label: "Afrique", value: "afrique" },
            { label: "Europe", value: "europe" },
            { label: "Amerique", value: "amerique" },
            { label: "Afrique", value: "afrique" }
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          },
          {
            label: "Langue parlee",
          name: "langue",
          type: "dropdown",
          options: [
            { label: "Francais", value: "francais" },
            { label: "Anglais", value: "anglais" },
            { label: "Espagnol", value: "espagnol" },
            { label: "Portugais", value: "portugais" },
           
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          },
          {
            label: "Autres activites",
          name: "others",
          type: "dropdown",
          options: [
            { label: "Francais", value: "francais" },
            { label: "Anglais", value: "anglais" },
            { label: "Espagnol", value: "espagnol" },
            { label: "Portugais", value: "portugais" },
           
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          },
          {
            label: "Zone",
          name: "zone",
          type: "dropdown",
          options: [
            { label: "Asie", value: "asie" },
            { label: "Afrique", value: "afrique" },
            { label: "Europe", value: "europe" },
            { label: "Amerique", value: "amerique" },
            { label: "Afrique", value: "afrique" }
          ],
          validationRules: [
            {
              validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
              message: "Veuillez sélectionner une option valide."
            }
          ],
          isRequired: false
          }
        ]
      };
    },
    methods: {
      handleFormSubmit(formData) {
        // Logique de soumission du formulaire
        console.log(formData);
      }
    }
  };
  </script>