const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: "Top Rated",
        url: `/movie/top-rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction:{
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&language=en-US`
    },
    fetchComedy:{
        title: "Comedy",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchHorror:{
        title: "Horror",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchRomance:{
        title: "Romance",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchMystery:{
        title: "Mystery",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchSciFI:{
        title: "Sci-FI",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchWestern:{
        title: "Western",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchAnimation:{
        title: "Animation",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTvMovie:{
        title: "TV Movie",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
}