"use client";

import React from "react";
import DeviceSize from "../../../components/DeviceSize";
import DesktopProject from "./layouts/desktopProject";
import MobileProject from "./layouts/mobileProject";
import TabletProject from "./layouts/tabletProject";

const ProjectsPage: React.FC = () => {
  return (
    <DeviceSize>
      {(screenSize) => {
        if (screenSize === "mobile") {
          return <MobileProject />;
        } else if (screenSize === "tablet") {
          return <TabletProject />;
        } else {
          return <DesktopProject />;
        }
      }}
    </DeviceSize>
  );
};

export default ProjectsPage;
