import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number
  name: string
  url: string
}

export interface VideoFile {
  id: number
  quality: string
  file_type: string
  width?: number
  height?: number
  link: string
}

export interface VideoPicture {
  id: number
  nr: number
  picture: string
}

export interface Video {
  id: number
  width: number
  height: number
  duration: number
  full_res: any
  tags: any[]
  url: string
  image: string
  avg_color: any
  user: User
  video_files: VideoFile[]
  video_pictures: VideoPicture[]
}

export interface VideosPage {
  page: number
  per_page: number
  videos: Video[]
  total_results: number
  next_page: string
  url: string
}

// Define a service using a base URL and expected endpoints
export const pexelsApi = createApi({
  reducerPath: 'pexelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ' https://api.pexels.com/',
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_PEXELS_API;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', token);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularVideos: builder.query<VideosPage, number>({
      query: (perPage) => `videos/popular?per_page=${perPage}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPopularVideosQuery } = pexelsApi;
