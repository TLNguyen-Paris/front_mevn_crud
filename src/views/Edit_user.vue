<template>
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">Edit page</h3>
                <form @submit.prevent="">
                    <div class="form-group">
                        <label>Firstname</label>
                        <input type="text" class="form-control" v-model="user.firstname" required>
                    </div>

                    <div class="form-group">
                        <label>Lastname</label>
                        <input type="text" class="form-control" v-model="user.lastname" required>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="user.email" required>
                    </div>

                    <div class="form-group">
                        <label>Phone</label>
                        <input type="number" class="form-control" v-model="user.phone" required>
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
        mounted() {
            this.getUser()
        },
        setup(){
            
            const user = { }


            function getUser(){
                console.log(this.$route);
                axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/find-user/${this.$route.params.id}`)
                    .then( response => {
                        console.log(response);
                        user.value = response.data
                        console.log(user);
                    })
            }

            return{
                user,
                getUser,
            }
        },
        created() {
        }
    }

</script>