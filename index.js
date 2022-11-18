const express=require('express')


const app = express()
const port=3000

//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({extended:false}));


let movies = [{
   id:"1",
   title: "Inception",
   director: "Christopher Nolan",
   release_date:"2021-18-06",

},
{
    id:"6",
    title:"The Irishman",
    director:"Matin Scorsese",
    release_date:"2022-06-03",

},

];
//to get json form
app.get('/movie',(req,res)=>{
    res.json(movies)

});

//add movie to the list

app.post('/movie',(req,res)=>{
    const movie = req.body

    console.log(movie)
    movies.push(movie)
    res.send("Movie is added to the list!");

});
//search for a movie in the list
app.get('/movie/:id',(req, res)=>{
    const id =req.params.id

    for (let movie of movies){
        if(movie.id ===id){
            res.json(movie)
            return

        }
    }
    res.status(404).send('movie not found')
});

//remove movie from the list

app.delete('/movie/:id',(req, res)=>{
    const id = req.params.id

    movies = movies.filter(movie =>{
        if(movie.id !== id){
            return true
        }
        return false
    });

    res.send('Movie is deleted')

});

//set the server to listen at port 
app.listen(port,()=>console.log('Server listening at port $(port)'));