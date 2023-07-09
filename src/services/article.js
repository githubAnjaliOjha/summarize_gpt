import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi=createApi({
  reducerPath:'articleApi',
  baseQuery: fetchBaseQuery({
  baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
  prepareHeaders: (headers)=>{
    headers.set('X-RapidAPI-Key','26cb9fd6b4msh3ee9e2de415a901p1ec043jsnfbdc58d15d5f');
    headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
    return headers;
  }
  }),
  endpoints:(builder)=>({
    getSummary:builder.query({
      query:(params)=>`./summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  })
});

export const {useLazyGetSummaryQuery}=articleApi;