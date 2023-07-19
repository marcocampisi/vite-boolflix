<script>
import axios from 'axios';
import { store } from './store.js'
    export default {
        data() {
            return {
                store,
                userQuery: ''
            }
        },
        methods: {
            getQueryMovie(userQuery) {
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=555de2072157686e83c1093586314d23&query=${userQuery}`)
                    .then(response => {
                        this.store.searchedMovie = response.data.results;
                        console.log(this.store.searchedMovie);
                        console.log(this.store.searchedMovie[0].original_title)
                    })
            }
        }
    }
</script>

<template>
  <button @click="getQueryMovie('fantozzi')">TEST</button>
</template>

<style scoped>

</style>
