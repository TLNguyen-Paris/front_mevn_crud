<template>
    <section class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="User in Users" :key="User._id">
                            <td>{{ User.firstname }}</td>
                            <td>{{ User.lastname }}</td>
                            <td>{{ User.email }}</td>
                            <td>{{ User.phone }}</td>
                            <td>
                                <router-link :to="{name: 'Edit', params: { id: User._id }}" class="btn btn-success">
                                    Edit
                                </router-link>
                                <button @click.prevent="deleteUser(User._id)" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
import {ref} from 'vue';

export default {
    setup() {
        const Users = ref([]);

        const getUsers = () => { 
            return axios.get(`${process.env.VUE_APP_BACKEND_URL}/api`)
                .then(response => {
                    Users.value = response.data
                })
                .catch(error => {
                    console.error(error);
                })
        }


        function deleteUser(id){
            let UserIndex = Users.value.findIndex(usr => usr._id === id)

            if (window.confirm("This action will delete the user, Are you sure about that ?")){
                axios.delete(`${process.env.VUE_APP_BACKEND_URL}/api/delete-user/${id}`)
                    .then(Users.value.splice(UserIndex,1))
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }

        return {
            Users,
            getUsers,
            deleteUser,
        }
    },
    created() {
        this.getUsers()
    },
}
</script>
