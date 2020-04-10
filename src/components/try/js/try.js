import React from "react";
import ReactDOM from "react-dom";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
//

// import "lightgallery.js/dist/css/lightgallery.css";

const GROUP1 = [
  "https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
];

const PhotoItem = ({ image, group }) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

function Try() {
  return (
    <LightgalleryProvider
      onAfterSlide={() => {
        console.log("onAfterSlide");
      }}
    >
      <h1 style={{ textAlign: "center" }}>Group 1</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        {GROUP1.map((p, idx) => (
          <PhotoItem key={idx} image={p} group="group1" />
        ))}
      </div>
    </LightgalleryProvider>
  );
}

export default Try;
