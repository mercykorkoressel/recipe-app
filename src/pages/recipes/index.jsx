import { Card, CardContent, CardMedia, Container ,Grid,TextField, Typography} from "@mui/material"



export default function Recipes(){
    return ( 
   
    <Container sx= {{my:"2rem"}}maxWidth ="sm">
<TextField fullWidth id="outlined-basic" label="Enter a key word and hit Enter" variant="outlined" />
   
   <Grid sx={{mt:"2rem"}} Container spacing={3}> </Grid>
   <Grid item xs={4}>
    <Card>
        <CardMedia
        sx={{height:140}}
        image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </Card>

   <CardContent>
   <Typography variant="h5">RECIPE NAME </Typography>
   </CardContent>
    

   </Grid>
    </Container>
    ); 
}