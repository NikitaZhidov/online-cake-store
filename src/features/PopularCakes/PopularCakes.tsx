import { mockCakes } from "../../mock-data/cakes";
import MiniCakeCard from "../CakeCard/MiniCakeCard";

const PopularCakes = () => {
    return <div className="flex items-center gap-8">
        {mockCakes.slice(0, 2).map(c => <MiniCakeCard key={c.name} name={c.name} img={c.img} />)}
    </div>;
}

export default PopularCakes;