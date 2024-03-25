import { AppBar, Toolbar, IconButton, Typography,Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (

        <AppBar color="warning" position="static">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button component={Link} to="/" color="inherit">RECIPE APP</Button>
                </Typography>
              
                <Button component={Link} to="/add-recipe" color="inherit">Add Recipe</Button>

            </Toolbar>
        </AppBar>
    );
}
