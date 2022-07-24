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
                        Add your about me in this section.<br/>
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
                        Add your about me in this section.<br/>
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
                        Add your about me in this section.<br/>
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
                        A veteran for the United States Marine Corps. As the design lead Stephen was responsible for the overall theme and design for Grubber. Stephen has shown excellent technical abilities and a wealth of knowledge shared with the team.<br/>
                        <a href="https://www.linkedin.com/in/somarrah/" target ="_blank">LinkedIn</a><br/>
                        <a href="https://github.com/SOMarrah" target="_blank">GitHub</a>
                        </span>
                    </div>
                </div>
            </div> 
        )
    }
}
