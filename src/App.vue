<script>
import axios from 'axios';
import { store } from './store.js';

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
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" @click="getQueryMovie">Cerca</button>
        <input type="text" class="form-control" placeholder="" v-model="userQuery">
    </div>

    <div class="container">
        <div class="card" v-if="(userQuery !== '')" v-for="(item, i) in store.searchedMovie" :key="i">
            <div class="card-header">
                <!-- <img :src="`https://image.tmdb.org/t/p/w500${store.searchedMovie[i].poster_path}`"
                    :alt="store.searchedMovie[i].title"> -->
                
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ store.searchedMovie[i].title }}</h3>
                <h5 class="card-title">{{ store.searchedMovie[i].original_title }}</h5>
                <p class="card-text">{{ store.searchedMovie[i].overview }}</p>
                <p class="card-text">{{ store.searchedMovie[i].vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
