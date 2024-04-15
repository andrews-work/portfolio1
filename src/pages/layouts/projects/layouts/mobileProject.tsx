import React from "react";
import WelcomeM from "../../home/components/WelcomeM";
import MenuM from "../components/menuM";

const MobileProject: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeM />
      <MenuM />
    </div>
  );
};

export default MobileProject;
