import { mockPromotions } from "../../mock-data/promotions";
import PromotionCard from "../../features/Promotions/PromitionCard";

const PromotionsPage = () => {
    return <div>
        <div className='ml-1 font-bold text-3xl mb-8'>Доступные акции</div>

        <div className="flex items-center gap-6 flex-wrap">
            {mockPromotions.map(p => <PromotionCard key={p.name} promotion={p} />)}
        </div>
    </div>;
}

export default PromotionsPage;
