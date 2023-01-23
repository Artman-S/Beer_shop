import "./Web.css"



function Web() {

    return (
        <div className="container">
            <div>
                <h1>A&B Resort</h1><br />
                <h3>1er projet réalisé en HTML et CSS</h3><br />
                <a target="_blank" href="https://wildcodeschool.github.io/2022-09-JS-RemoteFR-LesCrewStillants-P1-Hotel/">
                <img className="Projet" src="assets\A&BHotel.png" alt="A&B Resort Home" /></a>
                <figcaption>Terminé</figcaption>

            </div>
            <div>
                <h1>House of Cars</h1><br />
                <h3>Hackathon an partenariat avec AWS en React JS et CSS</h3><br />
                <a target="_blank" href="https://github.com/Artman-S/House_of_Cars">
                <img className="Projet" src="assets\Hoc_Homepage.png" alt="House of Cars Home" /></a>
                <figcaption>Terminé</figcaption>
            </div>
            <div>
                <h1>Make Sense</h1><br />
                <h3>Projet fin de formation réalisé en React JS et CSS</h3><br />
                <a target="_blank" href="https://github.com/Artman-S/House_of_Cars">
                <img className="Projet" src="assets\makesense.png" alt="Make Sense Home" /></a>
                <figcaption>En cours</figcaption>
            </div>
            <br />
            <div>
                <h1>Make Sense</h1><br />
                <h3>Projet fin de formation réalisé en React JS et CSS</h3><br />
                <a href="https://github.com/Artman-S/House_of_Cars">
                <img className="Projet" src="assets\makesense.png" alt="Make Sense Home" /></a>
                <figcaption>Terminé</figcaption>
            </div>
            
        </div>
    )
}

export default Web;