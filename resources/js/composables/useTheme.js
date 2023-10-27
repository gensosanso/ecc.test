import { ref } from "vue";
import { axiosClient } from "@/axios";

const API_URL = 'http://localhost:8000/api'; // Remplacez l'URL par l'URL de votre API

export default function useTheme() {
  const themes = ref([]);
  const loading = ref(false);
  const errors = ref([]);

  const getAllThemes = async () => {
    loading.value = true;
    try {
      const response = await axiosClient.get(`/themes`);
      themes.value = response.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const createTheme = async (data) => {
    loading.value = true;
    try {
      await axiosClient.post(`/themes`, data);
      getAllThemes();
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const updateTheme = async (id, data) => {
    loading.value = true;
    try {
      await axiosClient.put(`/themes/${id}`, data);
      getAllThemes();
    } catch (e) {
      handleErrors(e);
    } finally {
      loading.value = false;
    }
  };

  const deleteTheme = async (id) => {
    loading.value = true;
    try {
      await axiosClient.delete(`/themes/${id}`);
      getAllThemes();
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
    themes,
    loading,
    errors,
    getAllThemes,
    createTheme,
    updateTheme,
    deleteTheme,
  };
}