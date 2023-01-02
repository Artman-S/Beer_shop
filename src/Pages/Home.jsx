import React from "react";
import Hero from "../Components/Hero";
import Phylosophy from "../Components/Phylosophy";
//import des données
import home from "../data/home";

const Home = () => {
  return (
    <>
      <Hero hero={home.hero}/>
      <Phylosophy phylosophy={home.phylosophy}/>
    </>
  );
};

export default Home;







/*<div className="hero-image">
        <div className="hero-text">
          
          <button>Discover our most famous beers</button>
        </div>
      </div>
      <div className="resume">
        <img
          className="illustration1"
          src="./assets/my-beer-my-work.jpg"
          alt="Tout travail mérite sa bière"
        />
        <h2>Why do we care so much ???</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl
          nunc mi. Est velit egestas dui id ornare arcu odio. Tincidunt vitae
          semper quis lectus nulla at volutpat diam ut. Quis auctor elit sed
          vulputate mi sit amet mauris commodo. Placerat vestibulum lectus
          mauris ultrices eros in cursus turpis massa. <br /> <br /> Laoreet
          suspendisse interdum consectetur libero id faucibus nisl. Ut tristique
          et egestas quis ipsum suspendisse ultrices. Massa tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada proin. Scelerisque in
          dictum non consectetur a. <br /> <br /> Augue lacus viverra vitae
          congue eu consequat ac felis. Nisl nisi scelerisque eu ultrices vitae
          auctor eu augue. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec.
          Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
          Mattis rhoncus urna neque viverra justo nec ultrices dui. Aliquam
          purus sit amet luctus venenatis lectus magna fringilla.
          <br /> <br />
          Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
          Morbi leo urna molestie at elementum eu facilisis. Sapien pellentesque
          habitant morbi tristique senectus et netus et.
        </p>
      </div> */