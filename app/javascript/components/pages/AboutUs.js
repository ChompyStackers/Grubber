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
            <div className='aboutUsColorContainer'>
                <div className='aboutUsCardContainer'>
                    <CardGroup>
    {/* Jorge about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/101531326?v=4" alt="two dogs" />
                        <CardBody>
                        <CardTitle>Jorge Linares</CardTitle>
                        <CardSubtitle>Grub Project Manager</CardSubtitle>
                        <CardText>Add your about me in this section.</CardText>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target ="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target="_blank">GitHub</NavLink>
                        </CardBody>
                    </Card>
    {/* Frank about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/98143232?v=4" alt="frank the tank" />
                        <CardBody>
                        <CardTitle>Francisco Rivera</CardTitle>
                        <CardSubtitle>Grub Tech Lead</CardSubtitle>
                        <CardText>Add your about me in this section.</CardText>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target='_blank'>GitHub</NavLink>
                        </CardBody>
                    </Card>
    {/* JB about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/101531299?s=120&v=4" alt="github picture" />
                        <CardBody>
                        <CardTitle>JB</CardTitle>
                        <CardSubtitle>Grub Product Manager</CardSubtitle>
                        <CardText>Add your about me in this section.</CardText>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target="_blank">GitHub</NavLink>
                        </CardBody>
                    </Card>
    {/* Stephen about me */}
                    <Card className='aboutUsCard'>
                        <CardImg top src="https://avatars.githubusercontent.com/u/101531285?v=4" alt="designigator" />
                        <CardBody>
                        <CardTitle>Stephen OMarrah</CardTitle>
                        <CardSubtitle>Grub Design Lead</CardSubtitle>
                        <CardText>Grub Design Lead</CardText>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target="_blank">LinkedIn</NavLink>
                        <NavLink href="https://github.com/ChompyStackers/Grubber" target="_blank">GitHub</NavLink>
                        </CardBody>
                    </Card>

                    </CardGroup>
                </div>
            </div>
        )
    }
}
