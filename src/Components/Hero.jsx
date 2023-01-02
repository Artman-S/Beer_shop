import "./Hero.css";

//création d'une function fléchée avec props 
const Hero = ({ hero }) => {

    return (
        <>
        <div className="hero-image">
            <div className="hero-text">
                <h1>{hero.title}</h1>
                <p>{hero.subTitle}</p>
                <button>Discover our most famous beers</button>
            </div>
        </div>
        <div className="resume">
        <img
          className="illustration1"
          src="./assets/my-beer-my-work.jpg"
          alt="Tout travail mérite sa bière"
        />
        <h2></h2>
        <p></p>
      </div>
        </>
)
}

export default Hero;