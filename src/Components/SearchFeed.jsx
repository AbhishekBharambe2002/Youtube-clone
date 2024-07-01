import { useState, useEffect } from "react";
import { Box,Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { FetchFromApi } from "../utils/FetchFromApi";

const SearchFeed = () => {
  const[videos, setVideos] = useState('New');
  const{searchTerm} = useParams();
  useEffect(() => {
    FetchFromApi(`search?part = snippet&q=${searchTerm}&maxResults=50`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]); 
  return (
    <Box
    p={2} sx={{overflowY:"auto", height: '90vh', flex:2 }}>
      <Typography variant="h4" 
      fontWeight="bold" sx= {{ color:'white'}} mb={2}>
       Search Results for: <span style={{
          color : 'red'
        }}> {searchTerm} </span>videos
      </Typography>
      <Videos videos = {videos}/>
    </Box>
  )
}

export default SearchFeed
