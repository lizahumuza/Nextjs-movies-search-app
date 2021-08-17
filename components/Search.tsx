import React, {useState} from 'react';
import { Box } from '@chakra-ui/react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Search(){
//states-input query, movies
    const [query,setQuery]= useState('');
    const [movies, setMovies]=useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        
        
        const url='https://api.themoviedb.org/3/search/movie?&query=${query}&api_key=74c1d56d75920a478c87d4728a25af08&language=en-US&page=1&include_adult=false'
 
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }    
    
    return(
<Box>
   <> 
    <form onSubmit={searchMovies}>
        <FormControl >
            <FormLabel htmlFor="query" fontSize="1.2rem" marginBottom="0.2rem" textTransform="uppercase"> Movie Name
                <Input 
                type="text" 
                name="query" 
                placeholder="i.e Fast and Furious" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fontSize="1.6rem"
                padding="0.5rem 2rem"
                borderRadius="20px"
                border="1px solid #ddd"
                marginBottom="1rem"
                />
            </FormLabel>
        </FormControl>
        <Button 
        type="submit" 
        backgroundColor="rgba(0,0,0,0.75)"
        color="white"
        padding="1rem 2rem"
        border="1px solid rgba(0,0,0,0.75)"
        borderRadius="20px"
        fontSize="1.4rem"
        cursor="pointer"
        transition="backgroundColor 250ms"
        mt={5}>Search
        </Button>
    </form>
        <div>
            {movies.map(movie => movie.title)}
        </div>
   </>
</Box>
    );
}