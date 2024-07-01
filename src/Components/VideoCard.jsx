import {Link} from 'react-router-dom';
import { Typography ,CardContent,Card, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({video:{id:{videoId}, snippet}}) => {  
  return (
   <Card  sx={{ width: {md:'320px', xs:'100%', boxShadow:'none', borderRadius:"none"}}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia 
    image={snippet?.thumbnails?.high?.url}
    alt = {snippet?.title}
    sx={{width: 358, height: 180}}
    />
    </Link>
    <CardContent  sx={{backgroundColor: '#212121', height: '106px', width:'358'}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
      <Typography variant='subtitle1' fontWeight="bold" color="White">
        {snippet.title || demoVideoTitle}
      </Typography>     
    </Link>
    <Link to={snippet.channelId?`/channel/${snippet.channelId}`:demoChannelUrl}>
      <Typography variant='subtitle2' fontWeight="bold" color="Grey">
        {snippet.channelTitle || demoChannelTitle}
        <CheckCircle sx={{fontSize: 12 , color:"grey", ml:"5px"}}/>
      </Typography> 
      </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard
