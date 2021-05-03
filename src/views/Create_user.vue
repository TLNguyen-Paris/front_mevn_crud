<template>
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">Create User</h3>

                <form @submit="SubmitForm">
                    <div class="form-group">
                        <label>Firstname</label>
                        <input type="text" class="form-control" v-model="User.firstname" required>
                    </div>

                    <div class="form-group">
                        <label>Lastname</label>
                        <input type="text" class="form-control" v-model="User.lastname" required>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="User.email" required>
                    </div>

                    <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" v-model="User.phone" required>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-danger btn-block">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>


<script>

require('dotenv').config()
import axios from 'axios'

export default {
    setup() {
        const User = {
            firstname:'',
            lastname:'',
            email:'',
            phone:''
        }

        function SubmitForm() {
            axios.post(`${process.env.VUE_APP_BACKEND_URL}/api/create-user`, User)
                .then(() => {
                    console.log("User send");
                })
                .catch((error) => {
                    console.error(error);
                })
        }

        return {
            User,
            SubmitForm
        }
    }
}
</script>