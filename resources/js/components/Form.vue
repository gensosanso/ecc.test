<template>
    <div>
      <div class="mt-3">
        <label :for="name">{{ label }}</label>
        <template v-if="isTextInputType">
          <input
            :type="type"
            :name="name"
            v-model="inputValue"
            :required="isRequired"
            @input="validateInput"
            class="border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full"
          />
        </template>
        <template v-else-if="type === 'dropdown' && options.length > 0">
          <select
            :name="name"
            v-model="selectedValue"
            :required="isRequired"
            @change="validateInput"
            class="border-gray-300 mt-1 border form-select p-2 outline-none block rounded-lg shadow-sm w-full"
          >
            <option value="" disabled selected>-- Sélectionnez une option --</option>
            <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
          </select>
        </template>
        <template v-else-if="type === 'date'">
          <input
            :type="type"
            :name="name"
            v-model="inputValue"
            :required="isRequired"
            @input="validateInput"
            class="border-gray-300 mt-1 border form-input p-2 outline-none block rounded-lg shadow-sm w-full"
          />
        </template>
        <div v-if="showError" class="error-container">
          <span v-for="(error, index) in errorMessages" :key="index" class="error-message">{{ error }}</span>
        </div>
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
        default: "text",
        validator: (value) => {
          return ["text", "dropdown", "email", "url", "date"].includes(value);
        }
      },
      validationRules: {
        type: Array,
        default: () => []
      },
      isRequired: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        inputValue: "",
        selectedValue: "",
        showError: false,
        errorMessages: []
      };
    },
    computed: {
      isTextInputType() {
        return ["text", "email", "url","date"].includes(this.type);
      }
    },
    methods: {
      validateInput() {
        this.showError = false;
        this.errorMessages = [];
  
        if (this.isRequired && ((this.isTextInputType && this.inputValue === "") || (this.type === "dropdown" && this.selectedValue === ""))) {
          this.showError = true;
          this.errorMessages.push("Ce champ est requis.");
          return;
        }
  
        if (this.type === "dropdown") {
          const isValid = this.validationRules.every((rule) => rule.validator(this.selectedValue));
          if (!isValid) {
            this.showError = true;
            this.errorMessages.push("Veuillez sélectionner une option valide dans la liste déroulante.");
          }
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