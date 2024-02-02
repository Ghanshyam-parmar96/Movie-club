import { createSlice } from '@reduxjs/toolkit';

const dates = new Date().setDate(125);
const newDates = new Date(dates).toISOString().slice(0, 10)

export const exploreSlice = createSlice({
  name: 'exploreSlice',
  initialState: {
    "air_date.gte": "",
    "air_date.lte": newDates,
    "certification": "",
    "certification_country": "IN",
    "debug": "",
    "first_air_date.gte": "",
    "first_air_date.lte": "",
    "primary_release_date.gte": "",
    "primary_release_date.lte": "",
    "region": "",
    "release_date.gte": "",
    "release_date.lte": newDates,
    "show_me": 0,
    "sort_by": "popularity.desc",
    "vote_average.gte": 0,
    "vote_average.lte": 10,
    "vote_count.gte": 0,
    "watch_region": "IN",
    "with_genres": "",
    "with_keywords": "",
    "with_networks": "",
    "with_origin_country": "",
    "with_original_language": "",
    "with_watch_monetization_types": "",
    "with_watch_providers": "",
    "with_release_type": "",
    "with_runtime.gte": 0,
    "with_runtime.lte": 400
  },
  reducers: {
    sort_by: (state, action) => {
      state.sort_by = action.payload
    },
    show_me: (state, action) => {
      state.show_me = action.payload
    },
    monetization_types: (state, action) => {
      state.with_watch_monetization_types = action.payload
    },
    watch_providers: (state, action) => {
      state.with_watch_providers = action.payload
    },
    vote_average_gte : (state, action) => {
      state['vote_average.gte'] = action.payload
    },
    vote_average_lte : (state, action) => {
      state['vote_average.lte'] = action.payload
    },
    vote_count_gte : (state, action) => {
      state['vote_count.gte'] = action.payload
    },
    with_genres: (state, action) => {
      state.with_genres = action.payload
    },
    watch_region: (state, action) => {
      state.watch_region = action.payload
    },
    original_language: (state, action) => {
      state.with_original_language = action.payload
    },
    with_keywords: (state, action) => {
      state.with_keywords = action.payload
    },
    with_networks: (state, action) => {
      state.with_networks = action.payload
    },
    certification: (state, action) => {
      state.certification = action.payload
    },
    air_date_lte: (state, action) => {
      state['air_date.lte'] = action.payload
    },
    air_date_gte: (state, action) => {
      state['air_date.gte'] = action.payload
    },
    first_air_date_gte: (state, action) => {
      state["first_air_date.gte"] = action.payload
    },
    first_air_date_lte: (state, action) => {
      state["first_air_date.lte"] = action.payload
    },
    swiper_lte: (state) => {
      state["air_date.gte"] = state['first_air_date.gte'];
      state['air_date.lte'] = state['first_air_date.lte'];
      state['first_air_date.gte'] = "";
      state['first_air_date.lte'] = "";
    },
    swiper_first_lte: (state) => {
      state['first_air_date.gte'] = state["air_date.gte"];
      state['first_air_date.lte'] = state['air_date.lte'];
      state['air_date.gte'] = "";
      state['air_date.lte'] = "";
    },
    with_runtime_gte : (state, action) => {
      state['with_runtime.gte'] = action.payload
    },
    with_runtime_lte : (state, action) => {
      state['with_runtime.lte'] = action.payload
    },
    with_release_type : (state, action) => {
      state.with_release_type = action.payload
    },
    region : (state, action) => {
      state.region = action.payload;
    },
    release_date_gte : (state, action) => {
      state['release_date.gte'] = action.payload
    },
    release_date_lte: (state, action) => {
      state['release_date.lte'] = action.payload;
    },
  },
})

export const { sort_by, show_me, monetization_types, watch_providers,vote_average_gte,vote_average_lte, vote_count_gte, with_genres, watch_region, original_language, with_keywords, with_networks, certification, air_date_gte, air_date_lte, first_air_date_gte, first_air_date_lte, release_date_gte, release_date_lte, swiper_lte, swiper_first_lte, with_runtime_gte, with_runtime_lte , with_release_type, region} = exploreSlice.actions

export default exploreSlice.reducer