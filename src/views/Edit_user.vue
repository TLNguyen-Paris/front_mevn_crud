<template>
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">Edit page</h3>

                <form @submit.prevent="UpdateUser">
                    <div class="form-group">
                        <label>Firstname :</label>
                        <input type="text" class="form-control" :placeholder="this.$route.params.firstname" v-model="user.firstname">
                    </div>

                    <div class="form-group">
                        <label>Lastname</label>
                        <input type="text" class="form-control" :placeholder="this.$route.params.lastname" v-model="user.lastname">
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" :placeholder="this.$route.params.email" v-model="user.email">
                    </div>

                    <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" :placeholder="this.$route.params.phone" v-model="user.phone">
                    </div>

                    <div class="form-group">
                        <button class="btn btn-danger btn-block">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>


<script>
    import axios from "axios"

    export default {
        data(){
            return {
                user: { }
            }
        },
        mounted() {
            console.log(this.user)
        },
        methods: {

            UpdateUser(){
                console.log(this.user);
                axios.post(`${process.env.VUE_APP_BACKEND_URL}/api/update-user/${this.$route.params.id}`,this.user)
                    .then( response => {
                        console.log(response);
                        this.$router.push('/view')
                    })
                    .catch( error => {
                        console.error(error);
                    })
            }
        },
        created() {

            axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/find-user/${this.$route.params.id}`)
                .then( response => {
                    this.user = response.data
                })

        }
    }

</script>