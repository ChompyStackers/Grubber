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
            <div>AboutUs
                <CardGroup>
{/* Jorge about me */}
                <Card>
                    <CardImg top width="100%" src="https://avatars.githubusercontent.com/u/101531326?v=4" alt="two dogs" />
                    <CardBody>
                    <CardTitle>Jorge Linares</CardTitle>
                    <CardSubtitle>Add your position/title in this section</CardSubtitle>
                    <CardText>Add your about me in this section.</CardText>
                    <NavLink href="https://github.com/ChompyStackers/Grubber" >LinkedIn</NavLink>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">GitHub</NavLink>
                    </CardBody>
                </Card>
{/* Frank about me */}
                <Card>
                    <CardImg top width="100%" src="https://avatars.githubusercontent.com/u/98143232?v=4" alt="frank the tank" />
                    <CardBody>
                    <CardTitle>Francisco Rivera</CardTitle>
                    <CardSubtitle>Add your position/title in this section</CardSubtitle>
                    <CardText>Add your about me in this section.</CardText>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">LinkedIn</NavLink>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">GitHub</NavLink>
                    </CardBody>
                </Card>
{/* JB about me */}
                <Card>
                    <CardImg top width="100%" src="https://avatars.githubusercontent.com/u/101531299?s=120&v=4" alt="github picture" />
                    <CardBody>
                    <CardTitle>JB</CardTitle>
                    <CardSubtitle>Add your position/title in this section</CardSubtitle>
                    <CardText>Add your about me in this section.</CardText>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">LinkedIn</NavLink>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">GitHub</NavLink>
                    </CardBody>
                </Card>
{/* Stephen about me */}
                <Card>
                    <CardImg top width="100%" src="https://avatars.githubusercontent.com/u/101531285?v=4" alt="designigator" />
                    <CardBody>
                    <CardTitle>Stephen O'Marrah</CardTitle>
                    <CardSubtitle>Add your position/title in this section</CardSubtitle>
                    <CardText>Add your about me in this section.</CardText>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">LinkedIn</NavLink>
                    <NavLink href="https://github.com/ChompyStackers/Grubber">GitHub</NavLink>
                    </CardBody>
                </Card>

                </CardGroup>
            </div>
        )
    }
}
