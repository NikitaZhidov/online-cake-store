import { mockCakes } from "../../mock-data/cakes";
import CakeCard from "../CakeCard/CakeCard";

const CelebrationCakes = () => {
    return <div className="flex flex-wrap gap-12">
        {mockCakes.slice(2).map(c =>
            <CakeCard key={c.name} name={c.name} description={c.description} price={c.price} img={c.img} />
        )}
    </div>;
}

export default CelebrationCakes;