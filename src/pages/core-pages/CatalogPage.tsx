import CakeCard from "../../features/CakeCard/CakeCard";
import { mockCakes } from "../../mock-data/cakes";

const CatalogPage = () => {
    return <div>
        <div className='ml-1 font-bold text-3xl mb-4'>Весь каталог</div>

        <div className="flex flex-wrap gap-12">
            {mockCakes.map(c =>
                <CakeCard cake={c} key={c.name} />
            )}
        </div>
    </div>;
}

export default CatalogPage;
