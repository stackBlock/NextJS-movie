import { useState } from "react";
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'

const SideMenu = ( {appName, catagories} ) => {
  // const { cata } = props
  return (
    <div>
      <Modal>
      <MovieCreateForm />
      </Modal>
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

console.log(Modal)

export default SideMenu;

