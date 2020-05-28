import { useState } from "react";

const SideMenu = ({ count, appName, clickHandler }) => {
  return (
    <div>
      <button onClick={clickHandler}>Click ME!!!</button>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default SideMenu;
