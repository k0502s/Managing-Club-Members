import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../../LandingPage/LandingPage';

import Topbar from './Topbar';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container fluid className={classNames('content', { 'is-open': sidebarIsOpen })}>
        <Topbar toggleSidebar={toggleSidebar} />
        <Fragment>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </Fragment>
    </Container>
);

export default Content;
