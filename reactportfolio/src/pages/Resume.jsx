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
<h2>Ozge Ahunbay</h2>
<p>5685 Berkshire ct
New Berlin, WI, 53151
414-326-6807
ahunb001@umn.edu
www.linkedin.com/in/ozge-ahunbay-979612222
</p>
<h2>Skills</h2>
<p>My skills include fluency in English and Turkish, as well as advanced Spanish speaking, reading, writing, and comprehension. I have experience in healthcare settings through volunteering at Minneapolis children's hospital, working with children with mental disabilities and trauma as a respite care worker, learning medicines and medical insurance through my job as a pharmacy technician, and shadowing at Froedtert Medical College and hospital. I have SEO skills and skills in web development using programs such as HTML, CSS, JavaScript,  and many more. I graduated from the University of Minnesota with a major in Global Health and a minor in Mass Communications, and I made the dean's list several of my semesters at school. I completed a semester abroad at Korea University, one of the most prestigious universities in Seoul. After graduating from the University of Minnesota, I spent four months solo backpacking around Europe and Asia. This experience allowed me to practice  my problem solving skills every day as well as gain a global understanding of different cultures and ways of life. I believe that my communication skills are impeccable and I have a way to connect with everyone I speak to and establish a strong sense of community everywhere I go. I also attended and graduated from the School of New York Times journalism program, which ties in to my mass communication minor I received from the University of Minnesota. I am also certified in CPR as well as a certified lifeguard and swim instructor. I have leadership skills through my time working at Weisman art museum as a gallery host and collective officer. I also have group management skills and communication skills through tutoring and respite work.</p>
<h2>Experience</h2>
<p>September 2020- Current
Waukesha county, Milwaukee - Respite worker 
Organizing households and managing up to 6 children with trauma and mental disabilities at a time
Caring for a newborn baby who is recovering from being born with drugs in her system
Teaching children math, reading, writing, science, and social studies and helping with school
Being able to quickly diffuse overwhelming and tricky situations
Acting as a mentor and earning the trust of adoptive children with trauma and mental illness
January 2024- Current 
Walgreens- Pharmacy Tech
Learning, organizing, and stocking a wide variety of drugs and medications
Problem solving issues with health insurance or medications
Giving great customer service and assisting customers with any problems or needs they may have 
January 2023 - May 2023
Ralph H. Metcalfe Public School - Teacher and Tutor 
Taught reading and writing to children from kindergarten to third grade
Working at an underprivileged school in downtown Milwaukee and fostering relationships with children from different backgrounds
Teaching children with different disabilities and learning levels
January 2020-May 2021
Weisman Art Museum, University of Minnesota - Collective Officer, Gallery Host
Organizing and doing research for events
Leading conversations and presenting to large groups
Giving tours and offering information about artwork
January 2020- January 2021
Student Unions and Activities, University of Minnesota - Office Assistant
Communicating information through emailing students and faculty
Learning many new computer programs in order to organize and create student groups 
Giving great customer service to all who came into the office
May 2021- August 2021
Third Street Tavern, Milwaukee - Server
Handling high volume customer service and kept track and completed of countless tasks 
Memorized a large menu in detail and communicated this with customers
Learned a new computer system quickly and used it proficiently 
September 2019- January 2020
Minnesota Children's Hospital, Minneapolis - Volunteer
Occupying children with activities for multiple hours
Using communication skills with parents of children
Using art and sports skills to find suitable activities for children 
September 2017- January 2021
Princeton Club Gym, New Berlin - Lifeguard, Swim Instructor
Relaying information to all customers as well as communicating with parents of students
Managing large groups of children and keeping them safe in the water
Keeping facilities clean and organizing lesson plans and distributing report cards from analyzing skills.  
</p>
<h2>Education</h2>
<p>September 2018- May 2023
University of Minnesota Twin Cities - Bachelor's Degree: Global Health, Mass Communication
I graduated from the University of Minnesota in spring of 2023 with a major in Global Health and Mobile Populations and a Minor in Mass Communication. I achieved a 3.45 GPA within my major. My specific  region of study is global health in East Asia. This gives me a wide range of knowledge about many cultures and forms of medicine, as well as many philosophical concepts. My mass communications minor gives me media skills as well as public relations skills. 
March 2024- June 2024
University of Minnesota Twin Cities - Bootcamp Certification: Full Stack Web Development
During this program, I learned how to develop websites for both front end and back end. I learned many skills, including HTML, CSS, JavaScript,  JQuery, Node.JS, postgres, react, bootstrap, flexbox, and many others. This was an intensive 12 week course, and I completed many projects included in my portfolio.
</p>

</>

    )

}