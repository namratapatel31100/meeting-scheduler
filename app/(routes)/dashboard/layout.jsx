"use client"
import React, { useState } from 'react';
import SideNavBar from './_components/SideNavBar';
import DashboardHeader from './_components/DashboardHeader';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '../../../components/ui/button';

function DashboardLayout({ children }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // Function to toggle the side navigation bar
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen); // Toggles the state between true and false
  };

  return (
    <div className="flex">
      {/* Side Navigation Bar */}
      <div
        className={`bg-slate-50 h-screen fixed md:w-64 ${
          isSideNavOpen ? 'block' : 'hidden' // Conditionally shows or hides the sidebar based on isSideNavOpen state
        } md:block`}
      >
        <SideNavBar /> {/* Renders the side navigation bar component */}
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 ${isSideNavOpen ? '' : 'ml-0'} md:ml-64`}>
        <DashboardHeader /> {/* Renders the dashboard header component */}
        <Toaster /> {/* Renders the toaster component */}
        <div className="md:hidden text-center text-white">
        <Button variant="ghost"  className="flex gap-2 w-full 
                mt-7 " onClick={toggleSideNav}>
          Navigation {/* Button text */}
        </Button>
      </div>
        {children} {/* Renders the children components passed to DashboardLayout */}
      

      
      
      </div>
    </div>
  );
}

export default DashboardLayout;
