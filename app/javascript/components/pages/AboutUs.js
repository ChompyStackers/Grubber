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
            <div className='homeColorContainer'>
                <div className='homeCardContainer'>
                    <CardGroup>
    {/* Jorge about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/101531326?v=4" alt="two dogs" />
                        <CardBody>
                        <CardTitle>Jorge Linares</CardTitle>
                        <CardSubtitle>Grub Project Manager</CardSubtitle>
                        <CardText>Add your about me in this section.</CardText>
                        <NavLink href="https://www.linkedin.com/in/jorgelinares/" target ="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/LoneWanderer101" target="_blank">GitHub</NavLink>
                        </CardBody>
                    </Card>
    {/* Frank about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/98143232?v=4" alt="frank the tank" />
                        <CardBody>
                        <CardTitle>Francisco Rivera</CardTitle>
                        <CardSubtitle>Grub Tech Lead</CardSubtitle>
                        <CardText>Add your about me in this section.</CardText>
                        <NavLink href="https://www.linkedin.com/in/rivera-francisco/" target="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/F-Rivers" target='_blank'>GitHub</NavLink>
                        </CardBody>
                    </Card>
    {/* JB about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/101531299?s=120&v=4" alt="github picture" />
                        <CardBody>
                        <CardTitle>JB</CardTitle>
                        <CardSubtitle>Grub Product Manager</CardSubtitle>
                        <CardText>Add your about me in this section.</CardText>
                        <NavLink href="https://www.linkedin.com/in/jb-agapay/" target="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/JB-1063" target="_blank">GitHub</NavLink>
                        </CardBody>
                    </Card>
    {/* Stephen about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/101531285?v=4" alt="designigator" />
                        <CardBody>
                        <CardTitle>Stephen OMarrah</CardTitle>
                        <CardSubtitle>Grub Design Lead</CardSubtitle>
                        <CardText>A veteran for the United States Marine Corps. As the design lead Stephen was responsible for the overall theme and design for Grubber. Stephen has shown excellent technical abilities and a wealth of knowledge shared with the team. </CardText>
                        <NavLink href="https://www.linkedin.com/in/somarrah/" target="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/SOMarrah" target="_blank">GitHub</NavLink>
                        </CardBody>
                    </Card>

                    </CardGroup>
                </div>
                <div id='projectNavLinkContainer'>
                    <NavLink id='projectNavlink' href="https://github.com/LoneWanderer101" target="_blank">Project GitHub</NavLink>
                </div>
            </div>
        )
    }
}
