import React, { Component } from 'react'
import { Card, 
    CardImg, 
    CardTitle, 
    CardText, 
    CardGroup,
    CardSubtitle, 
    CardBody, 
    NavLink  
} from 'reactstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="customCardContainer">
                <div className="customCards" id='aboutUsCards'>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div className="customCard" >
                        {/* Jorge about me */}
                        <span className="customCardHeader" >
                        <img src="https://avatars.githubusercontent.com/u/101531326?v=4"/>
                        <span className="customCardTitle">
                            <h3>Jorge Linares</h3>
                        </span>
                        </span>
                        <span className="customCardText">
                        Grub Project Manager<br/>
                        A retired Marine Corps veteran, Jorge is currently a remote student at Learn Academy in San Diego, California where he is working with team members on different applications built on JavaScript, HTML, CSS, ReactJS, and Ruby on Rails. As the Grubber Application Project Manager, Jorge kept the team on task and assisted with building pages and ensuring test driven development was implemented.<br/>
                        <a href="https://www.linkedin.com/in/jorgelinares/" target ="_blank">LinkedIn</a><br/>
                        <a href="https://github.com/LoneWanderer101" target="_blank">GitHub</a>
                        </span>
                    </div>
                    <div className="customCard">
                        {/* Frank about me */}
                        <span className="customCardHeader" >
                        <img src="https://avatars.githubusercontent.com/u/98143232?v=4"/>
                        <span className="customCardTitle">
                            <h3>Francisco Rivera</h3>
                        </span>
                        </span>
                        <span className="customCardText">
                        Grub Tech Lead<br/>
                        Located in San Diego, CA, Francisco was in the Marine Corps before starting his career as a web developer. As a student from LEARN Academy, he learned how to be a full stack developer and was assigned the role of Tech Lead for this Grubber App.<br/>
                        <a href="https://www.linkedin.com/in/rivera-francisco/" target ="_blank">LinkedIn</a><br/>
                        <a href="https://github.com/F-Rivers" target="_blank">GitHub</a>
                        </span>
                    </div>
                    <div className="customCard">
                        {/* JB about me */}
                        <span className="customCardHeader" >
                        <img src="https://avatars.githubusercontent.com/u/101531299?v=4"/>
                        <span className="customCardTitle">
                            <h3>JB</h3>
                        </span>
                        </span>
                        <span className="customCardText">
                        Grub Product Manager<br/>
                        A navy veteran with logistics and accounting background. As project manager JB was responsible for making sure the group stayed on task. JB has shown great commitment to the group and making sure each task was done in a timely manner. Looking to transition to the Tech Industry.<br/>
                        <a href="https://www.linkedin.com/in/jb-agapay/" target ="_blank">LinkedIn</a><br/>
                        <a href="https://github.com/JB-1063" target="_blank">GitHub</a>
                        </span>
                    </div>
                    <div className="customCard">
                        {/* JB about me */}
                        <span className="customCardHeader" >
                        <img src="https://avatars.githubusercontent.com/u/101531285?v=4"/>
                        <span className="customCardTitle">
                            <h3>Stephen OMarrah</h3>
                        </span>
                        </span>
                        <span className="customCardText">
                        Grub Design Lead<br/>
                        A veteran for the United States Marine Corps. As the design lead Stephen was responsible for the overall theme and design for Grubber. Stephen has shown excellent technical abilities and a wealth of knowledge shared with the team. Moving forward he would like to continue to create unique experiences for users through UX/UI design.<br/>
                        <a href="https://www.linkedin.com/in/somarrah/" target ="_blank">LinkedIn</a><br/>
                        <a href="https://github.com/SOMarrah" target="_blank">GitHub</a>
                        </span>
                    </div>
                </div>
            </div> 
        )
    }
}
