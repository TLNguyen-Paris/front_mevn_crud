<template>
    <!-- <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">View page</h3>
            </div>
        </div>
    </section> -->
    <section class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="User in Users" :key="User._id">
                            <td>{{ User.firstname }}</td>
                            <td>{{ User.lastname }}</td>
                            <td>{{ User.phone }}</td>
                            <td>{{ User.email }}</td>
                            <!-- <td>
                                <router-link :to="{name: 'edit', params: { id: User._id }}" class="btn btn-success">Edit
                                </router-link>
                                <button @click.prevent="deleteUser(User._id)" class="btn btn-danger">Delete</button>
                            </td> -->
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

        return {
            Users,
            getUsers
        }
    },
    created() {
        this.getUsers()
    },
}
</script>