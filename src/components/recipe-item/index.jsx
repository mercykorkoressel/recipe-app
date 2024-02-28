import { Card,CardMedia, CardContent,Typography, Grid, } from "@mui/material";

// creating the card component
export default function RecipeItem({title,image}) {
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}