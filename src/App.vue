<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        HeaderComponent,
        MainComponent
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
    <HeaderComponent :getQueryContent="getQueryContent" />
    <MainComponent :getRatingStars="getRatingStars" />
</template>

<style scoped></style>
