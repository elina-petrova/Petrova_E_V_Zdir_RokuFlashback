import MovieComponent from "./components/MovieComponent.js";
import MusicComponent from "./components/MusicComponent.js";
import TVComponent from "./components/TVComponent.js";
import SearchSectionComponent from "./components/SearchSectionComponent.js";
import { fetchData } from "./components/DataComponent.js";


(() => {
    const myVM = new Vue({
        data: {
            
        },

        methods: {
        },
        components:{
            "movie_component" : MovieComponent,
            "music_component": MusicComponent,
            "tv_component" : TVComponent,
            "search_section_component": SearchSectionComponent
        }
    }).$mount("#app");
})();