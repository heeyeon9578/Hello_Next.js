
import Navigation from "../components/navigation";
import styles from './home.module.css';
import Link from "next/link"
import { resolve } from "path";
import React ,{useEffect, useState,} from 'react';
import Movie from "../components/movie";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("i am fetching....")
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie)=>
               <Movie 
               key={movie.id} 
               id={movie.id} 
               poster_path={movie.poster_path}
               title={movie.title}
               >
                
               </Movie>
            )};
        </div>
    );
}
