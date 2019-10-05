import React, { Component } from 'react'
import { Menu, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { activeItem } = this.props

        return (
            <Menu style={{margin: "0px"}}>
              <Image src='http://www.lowescdn.com/images/ui/LowesLogo.svg' size='tiny' style={{margin: "10px 20px"}} />
                <Menu.Item
                    name='lowesLocations'
                    active={activeItem === 'lowesLocations'}
                    onClick={this.props.handleItemClick}
                >
                    Lowes Locations
            </Menu.Item>

                <Menu.Item
                    name='earth'
                    active={activeItem === 'earth'}
                    onClick={this.props.handleItemClick}
                >
                    Earthquakes
            </Menu.Item>

                <Menu.Item
                    name='loans'
                    active={activeItem === 'loans'}
                    onClick={this.props.handleItemClick}
                >
                    Loans
            </Menu.Item>
            </Menu>
        )
    }
}