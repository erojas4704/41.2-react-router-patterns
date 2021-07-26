import { useParams } from "react-router-dom";

const DogDetails = ({ getDogByName }) => {
    const { name } = useParams();
    const dog = getDogByName(name);

    return (
        <div className="dog-view">
            <h3>{dog.name}</h3>
            <img src={dog.src} alt={dog.name} />
            <ul>
                {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;