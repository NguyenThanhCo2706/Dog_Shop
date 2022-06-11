import DogCard from "./DogCard";
import "./dog.css"

const DogsPage = (props) => {
    const { allDogs } = props;
    return (
        <>
            <section className="dogs-container">
                {allDogs.map((dog) => {
                    return (
                        <div key={dog.id}>
                            <DogCard dog={dog} />
                        </div>
                    )
                })}
            </section>
        </>
    );
}

export default DogsPage;