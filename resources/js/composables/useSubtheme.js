import { ref } from "vue";
import { axiosClient } from "@/axios";

const API_URL = 'http://localhost:8000/api'; // Remplacez l'URL par l'URL de votre API

export default function useSubtheme() {
  const subthemes = ref([]);
  const loading = ref(false);
  const errors = ref([]);

  const getAllSubthemes = async () => {
    loading.value = true;
    try {
      const response = await axiosClient.get(`/subthemes`);
      subthemes.value = response.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const createSubtheme = async (data) => {
    loading.value = true;
    try {
      await axiosClient.post(`/subthemes`, data);
      getAllSubthemes();
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const updateSubtheme = async (id, data) => {
    loading.value = true;
    try {
      await axiosClient.put(`/subthemes/${id}`, data);
      getAllSubthemes();
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const deleteSubtheme = async (id) => {
    loading.value = true;
    try {
      await axiosClient.delete(`/subthemes/${id}`);
      getAllSubthemes();
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const handleErrors = (error) => {
    if (error.response && error.response.data && error.response.data.errors) {
      errors.value = Object.values(error.response.data.errors).flat();
    } else {
      errors.value = ["Une erreur s'est produite. Veuillez réessayer."];
    }
  };

  return {
    subthemes,
    loading,
    errors,
    getAllSubthemes,
    createSubtheme,
    updateSubtheme,
    deleteSubtheme,
  };
}