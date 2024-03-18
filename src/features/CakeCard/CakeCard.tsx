import { Button } from "@mui/material";

type Props = {
    img: string;
    name: string;
    description: string;
    price: number;
}

const CakeCard = (props: Props) => {
    return <div className="rounded-lg overflow-hidden w-56 pb-1">
        <div className="w-56 h-56 overflow-hidden">
            <img src={props.img} className="object-cover h-full w-full" alt="" />
        </div>

        <div>
            <div className="text-2xl">{props.name}</div>
            <div className="mt-2 text-sm leading-none font-light text-gray-400">{props.description}</div>

            <div className="mt-6 flex items-center justify-between">
                <div className="font-bold tracking-tighter">{props.price} ₽</div>
                <Button color="primary" variant="contained">В корзину</Button>
            </div>
        </div>
    </div>;
}

export default CakeCard;