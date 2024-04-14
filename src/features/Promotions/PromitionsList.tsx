import { NavLink } from "react-router-dom";
import { mockPromotions } from "../../mock-data/promotions";
import PromotionMiniCard from "./PromitionMiniCard";
import { CoreRoutes } from "../../routes";

const PromotionsList = () => {
    return <div className="flex items-center gap-4">
        {mockPromotions.map(p => <NavLink key={p.name} to={CoreRoutes.promotions}>
            <PromotionMiniCard promotion={p} />
        </NavLink>)}
    </div>;
}

export default PromotionsList;