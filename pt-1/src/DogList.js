const DogList = ({ dogs }) => {
    return (
        <div>
            {dogs.map(dog => (
                <div key={`dogshow-${dog.name}`}>
                    <p>{dog.name}</p>
                    <img src={dog.src} />
                </div>
            ))}
        </div>
    );
}

export default DogList;