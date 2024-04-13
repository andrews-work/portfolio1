import React from "react";
import Welcome from "../../home/components/Welcome";
import MenuM from "../components/menuM";

const TabletProject: React.FC = () => {
  return (
    <div className="space-between">
      <Welcome />
      <MenuM />
    </div>
  );
};

export default TabletProject;
