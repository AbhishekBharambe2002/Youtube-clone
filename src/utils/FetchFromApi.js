import axios from "axios";
const Base_url =  'https://youtube-v31.p.rapidapi.com';
const options = {
    url: Base_url,
    params: {
      part: 'snippet',
    },
    headers: {
      'X-RapidAPI-Key': '6a10bd7264msh0aa3273371fbf23p181da3jsn5979de3b9105',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const FetchFromApi = async (url) => {
    const {data} = await axios.get(`${ Base_url }/${url}`, options);    
    return data ; 
  }