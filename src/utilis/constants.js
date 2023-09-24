export const logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const logo_1 = 'https://cdn.iconscout.com/icon/free/png-512/free-netflix-9132661-7417090.png?f=avif&w=512'

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmVmZGFlZjhjZmM2OWExMDBmZmQ4MjBmMWY4NmQzZCIsInN1YiI6IjY1MDU3NzJhMTA5ZGVjMDBlYjE1YjU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L3TF0HXf7v8Tgon8tgj9ylS9kks2ps9EHS_nSXf7BKY'
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/"

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const SUPP_LAN = [{
  identifier: "en", name: "English"
},
{ identifier: "hindi", name: "Hindi" }
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY