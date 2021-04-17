import React, { useState } from 'react';
import SideBar from '../Nav/Sidebar';
import Content from './Content/Content';

const Router = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (
        <div className="App wrapper">
            <SideBar  toggleSidebar={toggleSidebar} isOpen={sidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>
    );
};

export default Router;
