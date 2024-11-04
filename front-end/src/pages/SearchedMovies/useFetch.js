import { useEffect, useState } from "react";

export default function Fetch(url){
    const [movies, setMovies] = useState();
    useEffect(() =>{
        async function main(){
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data) ;
            console.log(data)
        }
        main() ;
    },[url]) ;
    return movies ;
}