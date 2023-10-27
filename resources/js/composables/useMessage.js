// messagesService.js
import { ref,reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { axiosClient } from "@/axios";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import ConfirmModal from "@/components/ConfirmModal.vue";
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Remplacez l'URL par l'URL de votre API

export default function useMessage(){
    const errors = ref([]);
    const router = useRouter();
    const route = useRoute();
    const messageowner=ref([]);
    const loading = ref(false);
    const isFinish = ref(false);
    const messages = ref([]);
    const message = reactive({
        title: '',
        content: '',
        image: '',
      });
    const selectArray = ref([]);
    const searchField = ref("username");
    const searchValue = ref("");
    const headers = [
        { text: "Avatar", value: "avatar" },
        { text: "Name", value: "username" },
        { text: "Phone", value: "phone_number" },
        { text: "Email", value: "email" },
        { text: "Role", value: "user_type" },
        { text: "Confirmed", value: "confirmed" },
        { text: "Blocked", value: "blocked" },
        { text: "Action", value: "id" },
    ];

    const cleanErrors = () => {
        errors.value = [];
    };

    const getAllMessages = async () => {
        cleanErrors();
        loading.value = true;
        try {
            //const response = await axios.get(`http://localhost:8000/api/allMessages`);
            const response = await axiosClient.get(`/allMessages`);
            messages.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };
    
    const orderByDate = async () => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/messages/order-by-date`);
            messages.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };
    
    const getMessageOwner = async (id) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/messages/${id}`);
            messageowner.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

 
    const getMessagesByTheme = async (themeId) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/messages/theme/${themeId}`);
            messages.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
     };

    
   
    const getMessagesBySubtheme = async (id) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/messages/subtheme/${subthemeId}`);
            messages.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

    const getMessageAttributes = async (id) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/messages/${id}`);
            messages.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };
    const createMessage = async (data) => {
        errors.value = [];
        loading.value = true;
        await axiosClient
            .post(`/messages`, data)
            .then((response) => {
                isFinish.value = true;
                loading.value = false;
            })
            .catch((e) => {
                loading.value = false;
                if (e.response.status == 422) {
                    for (const key in e.response.data.errors)
                        errors.value.push(e.response.data.errors[key][0]);
                } else {
                    errors.value.push(e.response.data.message);
                }
                router.replace({
                    name: route.name,
                    hash: "#errors",
                });
            });
    };
    
    const updateMessage = async (id,data) => { 
        errors.value = [];
        loading.value = true;
        cleanErrors();
        
        try {
            console.log(id);
            console.log(data);
            await axiosClient.post(`/messages/${id}`,data).then((response) => {
                isFinish.value = true;
                loading.value = false;
                console.log(response);
            })

            alert('Message updated successfully ');
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

    const confirmedMessage = async (id) => {
        const { reveal, onConfirm } = createConfirmDialog(ConfirmModal, {
            question:
                "Are you sure you want to change the confirmed status of this item?",
            title: "Change Confirmed Status!!!",
            confirmLabel: "Change Confirmed",
            cancelLabel: "Cancel",
        });

        onConfirm(async () => {
            try {
                await axiosClient.put(`/messages/{id}/status/{status}`);
                getAllMessages();
            } catch (e) {
                handleErrors(e);
            }
        });

        reveal();
    };

    const deleteMessage = async (id) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.delete(`/messages/${id}`);
            messages.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

//   deleteMessage(id) {
//     return axios.delete(`${API_URL}/messages/${id}`);
//   },
return {
    messages,
    message,
    selectArray,
    searchField,
    searchValue,
    headers,
    errors,
    isFinish,
    getAllMessages,
    orderByDate,
    getMessageOwner,
    getMessagesByTheme,
    getMessagesBySubtheme,
    getMessageAttributes,
    createMessage,
    updateMessage,
    deleteMessage,
    cleanErrors,
    confirmedMessage,
   
};
};