import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { axiosClient } from "@/axios";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import ConfirmModal from "@/components/ConfirmModal.vue";

export default function useUsers() {
    const errors = ref([]);
    const router = useRouter();
    const route = useRoute();
    const loading = ref(false);
    const isFinish = ref(false);
    const users = ref([]);
    const user = ref({});
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

    const getUsers = async () => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/users`);
            users.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

    const getUser = async (id) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.get(`/users/${id}`);
            user.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

    const getUserType = async (type, officialParish) => {
        cleanErrors();
        loading.value = true;
        try {
            const response = await axiosClient.post(`/users/type/${type}`, {
                officialParish: officialParish,
            });
            users.value = response.data;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };

    const deleteUsers = async () => {
        if (selectArray.value.length !== 0) {
            const deleteIds = selectArray.value.map((d) => d.id);

            const { reveal, onConfirm } = createConfirmDialog(ConfirmModal, {
                question:
                    "Are you sure you want to delete these item(s)? All data will be permanently deleted. This action cannot be undone.",
                title: "Delete User !!!",
                confirmLabel: "Delete",
                cancelLabel: "Cancel",
            });

            onConfirm(async () => {
                try {
                    await axiosClient.delete(
                        `/users/${JSON.stringify(deleteIds)}`
                    );
                    getUsers();
                } catch (e) {
                    handleErrors(e);
                }
            });

            reveal();
        }
    };

    const confirmedUser = async (id) => {
        const { reveal, onConfirm } = createConfirmDialog(ConfirmModal, {
            question:
                "Are you sure you want to change the confirmed status of this item?",
            title: "Change Confirmed Status!!!",
            confirmLabel: "Change Confirmed",
            cancelLabel: "Cancel",
        });

        onConfirm(async () => {
            try {
                await axiosClient.put(`/users/confirmed/${id}`);
                getUsers();
            } catch (e) {
                handleErrors(e);
            }
        });

        reveal();
    };

    const updateUser = async (id, data) => {
        cleanErrors();
        loading.value = true;
        try {
            await axiosClient.put(`/users/${id}`, data);
            isFinish.value = true;
        } catch (e) {
            handleErrors(e);
        } finally {
            loading.value = false;
        }
    };



    const toggleBlocked = async (id) => {
        const { reveal, onConfirm } = createConfirmDialog(ConfirmModal, {
            question:
                "Are you sure you want to change the blocked status of this item?",
            title: "Change Blocked Status !!!",
            confirmLabel: "Change Blocked",
            cancelLabel: "Cancel",
        });

        onConfirm(async () => {
            try {
                await axiosClient.put(`/users/toggle-blocked/${id}`);
                getUsers();
            } catch (e) {
                handleErrors(e);
            }
        });

        reveal();
    };

    const handleErrors = (e) => {
        loading.value = false;
        if (e.response && e.response.status === 422) {
            for (const key in e.response.data.errors) {
                errors.value.push(e.response.data.errors[key][0]);
            }
        } else {
            console.error(e);
        }
    };

    return {
        users,
        user,
        selectArray,
        searchField,
        searchValue,
        headers,
        errors,
        getUsers,
        isFinish,
        getUser,
        cleanErrors,
        deleteUsers,
        confirmedUser,
        toggleBlocked,
        getUserType,

        updateUser
    };
}
