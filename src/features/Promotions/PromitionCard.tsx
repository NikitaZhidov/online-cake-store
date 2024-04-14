import { Promotion } from "../../mock-data/promotions";

type Props = {
    promotion: Promotion;
}

const PromotionCard = (props: Props) => {
    return <div className="relative w-64 shadow-md border border-black/5 rounded-lg overflow-hidden">
        <div className="w-full h-16 left-0 p-1.5 text-center flex items-center justify-center border-b border-b-black/20">
            <div className="relative z-10 leading-none text-lg">{props.promotion.name}</div>
        </div>
        <img className="object-cover h-64 w-full z-0 opacity-70" src={props.promotion.img} alt="" />

        <div className="w-full h-12 left-0 p-1.5">
            <div className="relative z-10 leading-none text-sm font-light text-gray-400">{props.promotion.description}</div>
        </div>
    </div>;
}

export default PromotionCard;