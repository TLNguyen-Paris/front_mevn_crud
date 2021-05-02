<template>
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">Edit page</h3>

            </div>
        </div>
    </section>
</template>


<script>
    import axios from "axios"

    export default {
        setup(){
            
            const user = { }

            console.log(this.$route.params);

            const getUser = () => {
                return axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/update-user/${this.$route.params.id}`)
                    .then(response => {
                        // user.value = response.data
                        console.log(response);
                    })
            }



            return{
                user,
                getUser,
            }
        },
        created() {
            this.getUser()
        }
    }

</script>