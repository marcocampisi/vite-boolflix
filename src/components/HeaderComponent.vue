<script>
import { store } from '../store';
export default {
    props: ['getQueryContent'],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-black border-bottom border-bottom-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <img src="../assets/img/netflix-logo.svg" alt="Netflix" width="100" height="50"
                    class="object-fit-cover mx-5">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Browse
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <form class="d-flex" role="search" @submit.prevent="getQueryContent">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cerca film e serie TV"
                            v-model="store.userQuery">
                        <button class="btn btn-outline-secondary" type="submit">Cerca</button>
                    </div>
                </form>
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/netflix-avatar.png" alt="Logo" width="50" height="50"
                        class="align-text-center ms-5 me-3">
                    Marco
                </a>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100vw;
    z-index: 1;
}
</style>