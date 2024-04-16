import React from "react";
import Welcome from "../../home/components/Welcome";
import MenuT from "../components/menuT";

const TabletProject: React.FC = () => {
  return (
    <div className="space-between">
      <Welcome />
      <MenuT />
    </div>
  );
};

export default TabletProject;
