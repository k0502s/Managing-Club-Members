import React, { useState } from 'react';
import SideBar from '../Nav/Sidebar';
import Content from './Content/Content';

const Router = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const [MsidebarIsOpen, setMSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const toggleMSidebar = () => setMSidebarOpen(!MsidebarIsOpen);

    return (
        <div className="App">
            <SideBar toggleSidebar={toggleSidebar} toggleMSidebar={toggleMSidebar} isOpen={sidebarIsOpen} isMOpen={MsidebarIsOpen} />
            <Content toggleSidebar={toggleSidebar} toggleMSidebar={toggleMSidebar} sidebarIsOpen={sidebarIsOpen} MsidebarIsOpen={MsidebarIsOpen}/>
        </div>
    );
};

export default Router;
