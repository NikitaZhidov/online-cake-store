import { Promotion } from "../../mock-data/promotions";
import { CAKE_IMAGE_SRC } from "../../utils/cake-images";

type Props = {
    promotion: Promotion;
}

const PromotionMiniCard = (props: Props) => {
    return <div className="relative h-64 w-48 shadow-md border border-black/5 rounded-lg overflow-hidden p-2">
        <img className="absolute inset-0 object-cover h-full w-full z-0 blur-sm opacity-70" src={props.promotion.img} alt="" />
        <div className="absolute top-0 w-full h-16 bg-black/30 left-0 p-1.5 text-center flex items-center justify-center">
            <div className="relative z-10 text-white leading-none text-lg">{props.promotion.name}</div>
        </div>
    </div>;
}

export default PromotionMiniCard;