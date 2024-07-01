import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from "./";
import { FetchFromApi } from "../utils/FetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
  
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
      .then((data) => setVideos(data?.items));
  }, [id]);
  
  return (
    <Box minHeight="95vh">
      <Box>
      <ChannelCard channelDetail={channelDetail}/>
      </Box>
      <Box display='flex' p="3">
        <Box sx={{mr:{sm:'200px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
