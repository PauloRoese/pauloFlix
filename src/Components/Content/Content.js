import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import styled from 'styled-components';

const Div = styled.div` 
background-color: var(--white);
color: var(--primary);
height : calc(100vh - 250px);
`;


const teste = () => {

    return (
        <Div >
            estamos ai!!!!
        </Div>
    );
}

const notFound = () => {
    return (
        <Div >
            Not Found 404
        </Div>
    );
}
const Content = () => {

    return (
        <Switch>
            <Route exact path={'/'} component={Dashboard}></Route>
            <Route path={'/teste'} component={teste}></Route>
            <Route component={notFound}></Route>
        </Switch>
    )
}

export default Content;