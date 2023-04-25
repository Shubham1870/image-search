import React, { useState } from "react";
import Unsplash,{toJson } from "unsplash-js";
import "./image.css"
const Image = () => {
  const [search, setSearch] = useState("");
  const [photo, setPhoto] = useState([]);

  const unsplash = new Unsplash({
    accessKey: "LXdW22C5xDKnpBEgMliDoS9ZsO5svIT_SV4E-6TFOHA",
    secret:"jtJIFW0towPJDKSXt8OWP3ZECLnYs1LABBBl-FrDxMI"
  });

  const searchPhoto = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(search, 1, 30, { orientation: "portrait" })
      .then(toJson)
      .then((json) => {
        setPhoto(json.results);
      });
  };

  return (
    <div className="main">
      <div className="second-container">
        <h1 className="photo">Photo Search</h1>
        <form className="form" onSubmit={searchPhoto}>  
        <div id="search"> <input
            type="text"
            name="query"
            className="input-1"
            placeholder={"search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="button">
            Search
          </button></div>
         
        </form>
        <div className="display">
          {photo.map((photos) => (
            <span className="display-slate" key={photos.id}>
              <img
                className="image"
                alt={photos.alt_description}
                src={photos.urls.full}
                width="50%"
                height="50%"
              ></img>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Image;