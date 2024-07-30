import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/projects.css'



export default function Projects(){

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/projects');
    }, []);

    return(
<>
<h1>Projects</h1>
<div>
    <h2>HoopStats</h2>
    <img id='hoopstats' src='../src/assets/hoopstats.png'/>
    <a href=' https://rvbouu.github.io/hoop-stats/'> Link to the deployed application | </a>
    <a href='https://github.com/rvbouu/hoop-stats'> Link to the github page</a>
</div>

<div>
    <h2>DragonFruit Delights</h2>
    <img id='dragonfruit' src='../src/assets/dragonfruit.png'/>
    <a href='https://dragon-fruit-recipes.onrender.com/'> Link to the deployed application | </a>
    <a href='https://github.com/AnnaManrodt/dragon_fruit_recipes'>Link to the Github page</a>
</div>
<div>
    <h2>Apartment Maintenence App</h2>
    <img id='apartment' src='../src/assets/apartment.png'/>
    <a href='https://apartment-maintenance-app.onrender.com'> Link to the deployed application | </a>
    <a href='https://github.com/4Bollard/apartment-maintenance-app'>Link to the Github page</a>
</div>
<div>
    <h2>Taskboard</h2>
    <a href='https://ozgeahunbay.github.io/taskboard.hw/'>Link to the deployed application | </a>
    <a href='https://github.com/ozgeahunbay/taskboard.hw'>Link to the Github page</a>
</div>
<div>
    <h2>Blog</h2>
    <a href='https://ozgeahunbay.github.io/blog.hw/'>Link to the deployed application | </a>
    <a href='https://github.com/ozgeahunbay/blog.hw'>Link to the Github page</a>
</div>
</>

    )

}