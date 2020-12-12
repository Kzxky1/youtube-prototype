import axios from 'axios';

const KEY = 'AIzaSyCpqfYwjkOasUQiGzFDJvRHdIoj_9tG4qk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})