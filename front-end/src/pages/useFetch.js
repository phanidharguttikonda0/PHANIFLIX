import { useEffect, useState } from "react";

export default function useFetch(url1, url2, size) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Function to fetch data from a URL and process it into chunks
        async function fetchData(url) {
            try {
                const res = await fetch(url);
                const data = await res.json();
                const array = data.results;
                const newArray = [];

                // Splitting array into chunks of 'size'
                for (let i = 0; i < array.length; i += size) {
                    newArray.push(array.slice(i, i + size));
                }

                return newArray;
            } catch (error) {
                console.error("Error fetching data:", error);
                return [];
            }
        }

        // Fetch from both URLs concurrently
        async function getMovies() {
            const data1 = await fetchData(url1);
            const data2 = await fetchData(url2);
            const mainData = [] ;
            console.log(data1, 'data1 here')
            console.log(data2, ' data 2 here')
            let val1 = [] ;
            for(let x = 0 ; x < data1.length; x++){
                if (data1[x].length === 4){
                    val1 = data1[x] ;
                }
                else
                    mainData.push(data1[x])
            }
            for(let x = 0 ; x < data2.length; x++){
                if (data2[x].length === 4){
                    val1 += data2[x] ;
                }
                else
                mainData.push(data2[x])
            }

            console.log(mainData)
            setMovies(mainData); // Limit to 40 records
        }

        getMovies();
    }, [url1, url2, size]);

    return movies;
}
