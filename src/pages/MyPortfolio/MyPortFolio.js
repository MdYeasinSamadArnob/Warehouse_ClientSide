import React from 'react'

function MyPortFolio() {
  return (
    <div className="pt-28 h-screen text-center text-lg font-bold ">
        {/* My PortFolio with name ,email, educational Background, list of technologies and skills and projects */}
      <div className="flex justify-center items-center">
          <h1>Name: </h1><p> MD yeasin Samad </p>
     </div >
        <div className="flex justify-center items-center"><h1>Email: </h1>
        <p>
            matebusinessgroup@gmail.com
        </p>
    </div>
     <div className="flex justify-center items-center">
            <h1>Educational Background: </h1><p>BSc in CSE 
            from University of Dhaka,Bangladesh</p>
    </div>
        <div className="flex justify-center items-center"><h1>Skills: </h1><p>
            HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB, Mongoose,
            MySQL, Bootstrap, Git, Github, Heroku, Firebase, Firestore,
            </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10"><h1>Projects: </h1><p>
            <ul>
                <li>
                   <a href="https://tutorshipprojectpreview.netlify.app/"> Project 1: Tutorship App </a>
                </li>
                <li>
                   <a href="https://infinitemath-os-lab-project.vercel.app/"> Project 2: InfiniteMath </a>
                </li>
                <li>
                   <a href="https://arnob-gpu-review.netlify.app/"> Project 3: GPU Review Site </a>
                </li>
               </ul>
        </p></div>

    </div>
  )
}

export default MyPortFolio