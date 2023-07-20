import { reactive } from "vue";

export const store = reactive({
    searchedMovie: [],
    userQuery: '',
    languageIcons: {
        en: 'us',
        fr: 'fr',
        es: 'es',
        it: 'it',
        de: 'de'
    }
});
