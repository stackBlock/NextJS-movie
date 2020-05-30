import { useState } from "react";

const SideMenu = ( {appName, catagories} ) => {
  // const { cata } = props
  return (
    <div>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {catagories.map((cat) => (
          <a key={cat.id} href="#" className="list-group-item">
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
