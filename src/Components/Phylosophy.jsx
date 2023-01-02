import "./Phylosophy.css";

//création d'une function fléchée avec props 
const Phylosophy = ({ phylosophy }) => {

    return (
        <>
        <div className="resume">
                <h2>{phylosophy.title}</h2>
                <p>{phylosophy.description}</p>
        </div>
        </>
)
}

export default Phylosophy;