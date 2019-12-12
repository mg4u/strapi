import React from 'react'
import {Box, Text} from 'gestalt'
import { NavLink } from "react-router-dom";
export default class Navbar extends React.Component {
    constructor (props){
        super (props)
    }

    render () {
        return (
            <Box
            shape= 'roundedBottom'
            color= 'eggplant'
            padding= {10}
            height={50}
            display="flex"
            justifyContent="around"
            direction="row"
            alignItems="center"
            >
                <NavLink activeClassName="active" to="/">
                    <Text size="xl" color="white">Home</Text>
                </NavLink>
                <NavLink activeClassName="active" to="/signin">
                    <Text size="xl" color="white">Sign In</Text>
                </NavLink>
                <NavLink activeClassName="active" to="/signout">
                    <Text size="xl" color="white">Sign Out</Text>
                </NavLink>
                <NavLink activeClassName="active" to="/checknout">
                    <Text size="xl" color="white">Check Out</Text>
                </NavLink>
            </Box>

        )
    }
}