import React from 'react'
import '../about.css'
import styled from 'styled-components'

const StyledAbout = styled.div`
  h1, h2, h3{
	font-family: 'Grandstander', cursive;
	line-height: 1.2;
}

p{
	font-family: 'Quicksand', sans-serif;
	color: #5E0012;
	font-weight: 500;
} 
`

export default function About() {

    return (
<StyledAbout className="about-page">
    <div className="lambda-project-text">
    <h2>About the Team</h2>
    <h3>Everyone that contributed to this project is a student at Lambda School. The Food Truck Tracker App is a project developed for Lambda's Build Week. Our team consists of students in Web Development. Below is a gallery of each team member that describes everyone's role in building the Food Truck Tracker App.</h3>
    </div>
    <div className='meet-the-team-container'>
        <div className="team-member-1">
          <img src="img/Sara.jpg" alt = 'developer'/>
          <h2>Sara Cearc </h2>
          <p>Sara Searc is both a student and a mentor at Lambda School. For this build week, Sara was responsible for creating the back-end end-points for the project and implementing them with the front-end forms to allow the forms to access the correct data.</p>
        </div>
        <div class="team-member-2">
          <img src='img/Brian.jpg' alt = 'developer'/>
          <h2>Brian Abeyta-Pratt</h2>
          <p>Brian Abeyta-Pratt is a Unit 2 Web-Development student at Lambda School.   For this project, Brian designed a marketing about page and created the   login form that allows users to access the appropriate information when   logging in.</p>
        </div>
        <div class="team-member-3">
          <img src="img/Matty.jpg" alt = 'developer'/>
          <h2>Matty Serwer</h2>
          <p>Matty Serwer is a Unit 2 Web-Development student at Lambda School. For     this project, Matty designed a marketing landing page and created the   registration form that allows users to register as either a customer or a     food truck owner</p>
        </div>
        <div class="team-member-4">
          <img src="img/Cora.jpg" alt = 'developer'/>
          <h2>Cora Krynick</h2>
          <p>Cora is a Unit 3 Web-Development student at Lambda School. For this    project, Cora linked the back-end api end points with the front-end forms.     using Redux.</p>
        </div>
        <div class="team-member-5">
          <img src="img/Ruben.png" alt = 'developer'/>
          <h2>Ruben Suazo</h2>
          <p>Ruben is both a student and a mentor at Lambda School. For this build  week, Ruben was responsible for creating the back-end end-points for the     project and implementing them with the front-end forms to allow the forms   to access the correct data.</p>
        </div>
    </div>
</StyledAbout>
    )
}
