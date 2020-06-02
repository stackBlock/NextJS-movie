import { useState } from "react";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions/index";

const SideMenu = (props) => {
  const { catagories } = props
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal();
    });
  };

  return (
    <div>
      <Modal ref={ele => modal = ele} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
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

console.log(Modal);

export default SideMenu;
