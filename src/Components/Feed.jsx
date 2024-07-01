import { useState, useEffect } from "react";
import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import SideBar from './SideBar';
import Videos from "./Videos";
import { FetchFromApi } from "../utils/FetchFromApi";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
        FetchFromApi(`search?part=snippet&q=${selectedCategory}&maxResults=50`)
          .then((data) => setVideos(data.items));
      },[selectedCategory]);
  return (
    <Stack sx={{flexDirection :{sx:
    "column", md:"row"}}}>
      <Box
      sx={{height:{sx:'auto', md:'92vh'},
      borderRight:'1px solid #3d3d3d',
      px:{sx:0, md:2}}}>
        <SideBar
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
        />
        <Typography className="copyright"
        variant="body2" sx={{mt:1.5, color:'#fff'}}>
          CopyRight Youtube
        </Typography>
        
      </Box>
      <Box
      p={2} sx={{overflowY:"auto", height: '90vh', flex:2 }}>
        <Typography variant="h4" 
        fontWeight="bold" sx= {{ color:'white'}} mb={2}>
          {selectedCategory} <span style={{
            color : 'red'
          }}> Videos </span>
        </Typography>
        <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
