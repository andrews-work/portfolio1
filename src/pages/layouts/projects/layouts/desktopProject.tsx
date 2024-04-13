import React from "react";
import Welcome from "../../home/components/Welcome";
import Menu from "../components/Menu";

const DesktopProject: React.FC = () => {

  return (
    <div className="flex-col w-full h-full">
      <Welcome />
      <Menu />
    </div>
  );
};

export default DesktopProject;
