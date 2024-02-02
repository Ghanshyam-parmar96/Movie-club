import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState : {
    topCastImage : "https://image.tmdb.org/t/p/w185",
    backDropImage : "https://image.tmdb.org/t/p/w780",
    posterImageUrl : "https://image.tmdb.org/t/p/w342",
    logoImageUrl: "https://image.tmdb.org/t/p/w92",
    heroSectionPosterImageUrl : "https://image.tmdb.org/t/p/w154",
    heroSectionBackDropImage : "https://image.tmdb.org/t/p/w300",
    exploreQuery : "/discover/movie",
    exploreLoadData : {},
    metaImage : "",
    allLanguages : {
      af: "af-ZA",
      ar: "ar-SA",
      be: "be-BY",
      bg: "bg-BG",
      bn: "bn-BD",
      ca: "ca-ES",
      ch: "ch-GU",
      cn: "cn-CN",
      cs: "cs-CZ",
      cy: "cy-GB",
      da: "da-DK",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      eo: "eo-EO",
      es: "es-ES",
      et: "et-EE",
      eu: "eu-ES",
      fa: "fa-IR",
      fi: "fi-FI",
      fr: "fr-FR",
      ga: "ga-IE",
      gd: "gd-GB",
      gl: "gl-ES",
      he: "he-IL",
      hi: "hi-IN",
      hr: "hr-HR",
      hu: "hu-HU",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ka: "ka-GE",
      kk: "kk-KZ",
      kn: "kn-IN",
      ko: "ko-KR",
      ky: "ky-KG",
      lt: "lt-LT",
      lv: "lv-LV",
      ml: "ml-IN",
      mr: "mr-IN",
      ms: "ms-MY",
      nb: "nb-NO",
      nl: "nl-NL",
      no: "no-NO",
      pa: "pa-IN",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      si: "si-LK",
      sk: "sk-SK",
      sl: "sl-SI",
      sq: "sq-AL",
      sr: "sr-RS",
      sv: "sv-SE",
      ta: "ta-IN",
      te: "te-IN",
      tl: "tl-PH",
      th: "th-TH",
      tr: "tr-TR",
      uk: "uk-UA",
      vi: "vi-VN",
      zh: "zh-CN",
      zu: "zu-ZA",
    },
  },
  reducers: {
    
    exploreLoadData : (state, action) => {
      state.exploreLoadData = action.payload;
    },
    exploreQuery : (state, action) => {
      state.exploreQuery = action.payload;
    },
    metaImage : (state, action) => {
      state.metaImage = state.heroSectionBackDropImage + action.payload;
    }
  },
})

export const { exploreLoadData, exploreQuery, metaImage} = homeSlice.actions

export default homeSlice.reducer