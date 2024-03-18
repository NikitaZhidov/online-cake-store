import { CAKE_IMAGE_SRC } from "../../utils/cake-images";

type Props = {
    text: string;
}

const PromotionCard = (props: Props) => {
    return <div className="relative h-64 w-48 shadow-sm rounded-lg overflow-hidden p-2">
        <img className="absolute inset-0 object-cover h-full w-full z-0 blur-sm opacity-70" src={CAKE_IMAGE_SRC} alt="" />
        <div className="relative z-10 text-white text-xl font-light leading-none">{props.text}</div>
    </div>;
}

export default PromotionCard;