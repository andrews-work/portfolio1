import React from "react";
import Welcome from "../../home/components/Welcome";
import MenuM from "../components/menuM";

const MobileProject: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Welcome />
      <MenuM />
    </div>
  );
};

export default MobileProject;
