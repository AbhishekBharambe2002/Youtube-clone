import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Videos} from "./";
import { FetchFromApi } from '../utils/FetchFromApi';
const Videodetail = () => {
  const [videoDetail,setVideoDetail ] = useState({});
  const [videos,setVideo] = useState({});
  const{id} = useParams();
  useEffect(()=>{
     FetchFromApi(`videos?part=snippet,statistics&id=${id}`) 
     .then((data) => setVideoDetail(data.items[0]));
     FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
     .then((data) => setVideo(data.items));
  },[id]);
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column' , md:"row"}}>
        <Box flex={1}>
         <Box sx={{width:'98.5%', position:'static', top:'86px' }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className = "react-player" controls/>
          {videoDetail.snippet && (<><><Typography color={'whitesmoke'} variant='h5' fontWeight='bold'>
              {videoDetail.snippet.title}
            </Typography><Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color='whitesmoke'>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link></><Stack direction={'row'} alignItems="center"gap={'20px'} justifyContent={'flex-end'}>
                  <Typography variant='body1' color='whitesmoke' sx={{opacity:0.7}}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views 
                  </Typography>
                  <Typography variant='body1' color='whitesmoke' sx={{opacity:0.7}}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes 
                  </Typography>
                </Stack></>
          )}   
         </Box>
        </Box>
        <Box paddingX='2' paddingY={{md:1, xs:5}} justifyContent='centre' alignItems={'center'}> 
        <Videos videos = {videos} direction='column'/>
       </Box>
      </Stack>
    </Box>
  )
}

export default Videodetail
