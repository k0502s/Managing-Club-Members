import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../../Main/LandingPage/LandingPage';
import MenmberListPage from '../../Main/MemberListPage/MemberListPage';
import WarnMemberListPage from '../../Main/WarnMemberListPage/WarnMemberListPage';
import AddMemberPage from '../../Main/AddMemberPage/AddMemberPage';
import MemberInquiriesPage from '../../Main/MemberInquiriesPage/MemberInquiriesPage';
import EditMemberPage from '../../Main/EditMemberPage/EditMemberPage';
import Topbar from '../../Nav/Topbar';
import * as S from './Content.style';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <S.container fluid isOpen={sidebarIsOpen}>
        <S.overlay isOpen={sidebarIsOpen} />
        <Topbar toggleSidebar={toggleSidebar} />
        <Fragment>
            <S.wrapper>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/list" component={MenmberListPage} />
                    <Route exact path="/warnlist" component={WarnMemberListPage} />
                    <Route exact path="/addmember" component={AddMemberPage} />
                    <Route exact path="/inquiries" component={MemberInquiriesPage} />
                    <Route exact path="/edit/:id" component={EditMemberPage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </S.wrapper>
        </Fragment>
    </S.container>
);

export default Content;
