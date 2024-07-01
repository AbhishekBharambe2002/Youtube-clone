import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import yt from "./yt.png"
const Navbar = () => {
    return(
    <Stack direction="row"
    alignItems="Centre"
    p={2}
    sx={{position:'Sticky',background:'#000', top:0, justifyContent:'space-between'} }>
      <Link to = '/' style={{display:'flex', alignItems:'center'}}>
        <img src={yt} alt="" height={45} />
      </Link>
      <Searchbar/>
    </Stack>
  );
}

export default Navbar
