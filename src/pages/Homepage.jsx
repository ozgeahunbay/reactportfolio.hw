import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function HomePage(){
    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/');
    }, []);
    return(
        <>
        <header>
         <h1 class='header'> Ozge Ahunbay</h1>
         <h2> Welcome to my portfolio!</h2>
        </header>
        <div class='links'>
         <a href='./projects'>Projects</a>
         <a href='https://github.com/ozgeahunbay' target="_blank">Github</a>
         <a href='./resume'>Resume</a>
        </div>
       </>

    )

}





