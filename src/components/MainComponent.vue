<script>
import { store } from '../store';

export default {
    props: ['getRatingStars'],
    data() {
        return {
            store,
            showInfo: false
        }
    },
    methods: {
        getImageSrc(content) {
            return content.poster_path
                ? `https://image.tmdb.org/t/p/w342${content.poster_path}`
                : 'src/assets/img/posternotfound.png';
        }
    }
}
</script>

<template>
    <body class="bg-dark">
        <div class="container">
            <h2 class="text-white">Film</h2>
            <div class="row">
                <div class="card col-3 text-bg-dark mb-3 px-2 border border-0 movieCard"
                    v-if="(userQuery !== '' && store.searchedMovie.length > 0)" v-for="(item, i) in store.searchedMovie"
                    :key="i" @mouseover="showInfo = true" @mouseout="showInfo = false">
                    <div class="card-header pointer">
                        <img :src="getImageSrc(store.searchedMovie[i])" :alt="store.searchedMovie[i].title">
                        <div class="card-overlay" v-show="showInfo">
                            <h3 class="card-title">{{ store.searchedMovie[i].title }}</h3>
                            <h5 class="card-title">{{ store.searchedMovie[i].original_title }}</h5>
                            <span :class="`fi fi-${store.languageIcons[store.searchedMovie[i].original_language]}`"></span>
                            <div class="rating">
                                <font-awesome-icon v-for="star in 5" :key="star"
                                    :icon="star <= getRatingStars(store.searchedMovie[i].vote_average) ? 'fas fa-star' : 'far fa-star'" />
                            </div>
                            <p>{{ store.searchedMovie[i].overview }}</p>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h2 class="text-center text-white">Nessun film trovato</h2>
                </div>
            </div>
        </div>
        <div class="container">
            <h2 class="text-white">Serie TV</h2>
            <div class="row">
                <div class="card col-3 text-bg-dark mb-3 px-2 border border-0"
                    v-if="(userQuery !== '' && store.searchedSeries.length > 0)" v-for="(item, i) in store.searchedSeries"
                    :key="i" @mouseover="showInfo = true" @mouseout="showInfo = false">
                    <div class="card-header">
                        <img :src="getImageSrc(store.searchedSeries[i])"
                            :alt="store.searchedSeries[i].name">
                        <div class="card-overlay" v-show="showInfo">
                            <h3 class="card-title">{{ store.searchedSeries[i].name }}</h3>
                            <h5 class="card-title">{{ store.searchedSeries[i].original_name }}</h5>
                            <span :class="`fi fi-${store.languageIcons[store.searchedSeries[i].original_language]}`"></span>
                            <div class="rating">
                                <font-awesome-icon v-for="star in 5" :key="star"
                                    :icon="star <= getRatingStars(store.searchedSeries[i].vote_average) ? 'fas fa-star' : 'far fa-star'" />
                            </div>
                            <p>{{ store.searchedSeries[i].overview }}</p>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h2 class="text-center text-white">Nessuna serie TV trovata</h2>
                </div>
            </div>
        </div>
    </body>
</template>

<style lang="scss" scoped>
body {
    min-height: 100vh;
    padding-top: 100px;
}

.card-header {
    position: relative;
    cursor: pointer;

    >img {
        width: 100%;
        height: 100%;
    }
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.card:hover .card-overlay {
    opacity: 1;
}

.card-overlay {
    > p {
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>