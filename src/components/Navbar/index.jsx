import { AppBar,Toolbar  ,Typography } from "@mui/material";

export default function Navbar(){
    return(
        <AppBar sx={{backgroundColor:"purple"}} position="static">
        <Toolbar>    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RECIPE APP
          </Typography>
        </Toolbar>
      </AppBar>
    );
}
