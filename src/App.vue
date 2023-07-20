<script>
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        getQueryContent() {
            axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: '555de2072157686e83c1093586314d23',
                    query: this.store.userQuery
                }
            })
                .then(response => {
                    this.store.searchedMovie = response.data.results;
                });

            axios.get(`https://api.themoviedb.org/3/search/tv`, {
                params: {
                    api_key: '555de2072157686e83c1093586314d23',
                    query: this.store.userQuery
                }
            })
                .then(response => {
                    this.store.searchedSeries = response.data.results;
                });
        },
        getRatingStars(voteAverage) {
            const roundedRating = Math.ceil(voteAverage / 2);
            return Math.min(roundedRating, 5);
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Cerca film e serie TV" v-model="store.userQuery">
            <button class="btn btn-outline-secondary" type="button" @click="getQueryContent">Cerca</button>
        </div>
    </div>

    <div class="container">
        <h2>Film</h2>
        <div class="card" v-if="(userQuery !== '' && store.searchedMovie.length > 0)"
            v-for="(item, i) in store.searchedMovie" :key="i">
            <div class="card-header">
                <img :src="`https://image.tmdb.org/t/p/w300${store.searchedMovie[i].poster_path}`"
                    :alt="store.searchedMovie[i].title">
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ store.searchedMovie[i].title }}</h3>
                <h5 class="card-title">{{ store.searchedMovie[i].original_title }}</h5>
                <span :class="`fi fi-${store.languageIcons[store.searchedMovie[i].original_language]}`"></span>
                <p class="card-text">{{ store.searchedMovie[i].original_language }}</p>
                <div class="rating">
                    <font-awesome-icon v-for="star in 5" :key="star"
                        :icon="star <= getRatingStars(store.searchedMovie[i].vote_average) ? 'fas fa-star' : 'far fa-star'" />
                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="text-center">Nessun film trovato</h2>
        </div>
    </div>
    <div class="container">
        <h2>Serie TV</h2>
        <div class="card" v-if="(userQuery !== '' && store.searchedSeries.length > 0)"
            v-for="(item, i) in store.searchedSeries" :key="i">
            <div class="card-header">
                <img :src="`https://image.tmdb.org/t/p/w300${store.searchedSeries[i].poster_path}`"
                    :alt="store.searchedSeries[i].name">
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ store.searchedSeries[i].name }}</h3>
                <h5 class="card-title">{{ store.searchedSeries[i].original_name }}</h5>
                <span :class="`fi fi-${store.languageIcons[store.searchedSeries[i].original_language]}`"></span>
                <p class="card-text">{{ store.searchedSeries[i].original_language }}</p>
                <p class="card-text">{{ store.searchedSeries[i].vote_average }}</p>
            </div>
        </div>
        <div v-else>
            <h2 class="text-center">Nessuna serie trovata</h2>
        </div>
    </div>
</template>

<style scoped></style>
