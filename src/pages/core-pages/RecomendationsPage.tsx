import CakeCard from "../../features/CakeCard/CakeCard";
import CelebrationCakes from "../../features/CelebrationCakes/CelebrationCakes";
import PopularCakes from "../../features/PopularCakes/PopularCakes";
import PromotionsList from "../../features/Promotions/PromitionsList";
import { mockCakes } from "../../mock-data/cakes";

const RecomendationsPage = () => {
    return <div>
        <div className='py-6'>
            <PromotionsList />
        </div>

        <div className='py-8'>
            <div className='ml-1 font-medium text-lg mb-4'>Часто заказывают:</div>

            <PopularCakes />
        </div>

        <div className='py-8'>
            <div className='ml-1 font-bold text-3xl mb-4'>На праздник:</div>

            <CelebrationCakes />
        </div>
    </div>;
}

export default RecomendationsPage;
