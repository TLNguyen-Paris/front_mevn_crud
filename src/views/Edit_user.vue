<template>
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center">Edit page</h3>
                <p>{{this.$route.params}}</p>
                <p>{{this.$route.params.id}}</p>
            </div>
        </div>
    </section>
</template>


<script>
    // import axios from "axios"

    export default {
        mounted() {
            console.log(this.$route.params);
            this.init()
        },
        setup(){
            
            const user = { }

            function init(){
                console.log(this.$route);  //should return object
      console.log(this.$route.params); //should return object 
      console.log(this.$route.params.id); //should return id of URL param
            }

            // const getUser = () => {
            //     return axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/update-user/${this.$route.params.id}`)
            //         .then(response => {
            //             // user.value = response.data
            //             console.log(response);
            //         })
            // }



            return{
                user,
                init
                // getUser,
            }
        },
        created() {
            // this.getUser()
        }
    }

</script>