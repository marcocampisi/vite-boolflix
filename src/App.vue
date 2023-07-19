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
            getQueryMovie() {
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=555de2072157686e83c1093586314d23&query=${this.userQuery}`)
                    .then(response => {
                        this.store.searchedMovie = response.data.results;
                    })
            }
        }
    }
</script>

<template>
    <input type="text" v-model="userQuery" placeholder="Cerca">
    <button @click="getQueryMovie">TEST</button>
    <div class="container">
        <div class="card" v-if="(userQuery !== '')">
            <div class="card-header" v-for="(item, i) in store.searchedMovie" :key="i">
                <img :src="`https://image.tmdb.org/t/p/w500${store.searchedMovie[i].poster_path}`" :alt="store.searchedMovie[i].title">
                <h2>{{ store.searchedMovie[i].original_title }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
