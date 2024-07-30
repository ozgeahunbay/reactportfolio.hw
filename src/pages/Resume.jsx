import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Resume(){

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/resume');
    }, []);

    return(
<>
<h1>Özge Ahunbay</h1>
<p>
New Berlin, WI, 53151 |

ahunb001@umn.edu

</p>
<h2>Education</h2>
<p>University of Minnesota, Twin Cities      |                                          Minneapolis, Minnesota   |
Bachelor of Arts in Global Health and Mobile populations, minor in mass communications      |  May 2023 </p>

<p>

University of Minnesota, Twin Cities                  |                              Minneapolis, Minnesota   |
Bootcamp certification for full stack web development        |                                             June 2024
</p>
<h2>Experience</h2>
<h3> Respite Worker | Waukesha County | September 2020- present</h3>

<li> Providing social work to a family of 8 affected by drugs, trauma, and mental illness</li>
<li> Being able to quickly diffuse overwhelming and tricky situations
</li>
<li> Acting as a mentor and earning the trust of adoptive children and their adoptive parents </li>

<h3> Walgreens | Pharmacy Technician | January 2024- present</h3>
<li>Memorizing, organizing, and stocking a wide variety of drugs and medications</li>
<li>Troubleshooting  issues with health insurance or medications</li>
<li>Giving great customer service and assisting customers with any problems or needs they may have </li>
<h3> Ralph H. Metcalfe Public School | Teacher and Tutor | September 2022- June 2023</h3>
<li>Taught reading and writing to children from kindergarten to third grade</li>
<li>Working at an underprivileged school in downtown Milwaukee and fostering relationships with children from different backgrounds</li>
<li>Teaching children with different disabilities and learning levels</li>
<h2>Skills</h2>
<p>English, Spanish, Turkish language skills. Javascript, react,  HTML, CSS, agile, jira, microsoft, SQL,  JQuery, Node.JS, postgres, bootstrap, flexbox. Health insurance troubleshooting, medical knowledge, social work. </p>

</>

    )

}