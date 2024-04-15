import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addCakeToCard, decreaseCakeFromCard } from '../../store/global-store';
import { Cake } from '../../mock-data/cakes';
import { selectCakeInCardCount } from '../../store/selectors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
    cake: Cake;
}

const CakeCard = (props: Props) => {
    const dispatch = useDispatch();
    const inCardCount = useSelector(selectCakeInCardCount(props.cake));

    return <div className="rounded-lg overflow-hidden w-56 pb-1">
        <div className="w-56 h-56 overflow-hidden">
            <img src={props.cake.img} className="object-cover h-full w-full" alt="" />
        </div>

        <div>
            <div className="text-2xl">{props.cake.name}</div>
            <div className="mt-2 text-sm leading-none font-light text-gray-400">{props.cake.description}</div>

            <div className="mt-6 flex items-center justify-between">
                <div className="font-bold tracking-tighter">{props.cake.price} ₽</div>
                {
                    inCardCount > 0
                        ?
                        <div className='flex gap-4'>
                            <IconButton onClick={() => dispatch(decreaseCakeFromCard(props.cake))} color='primary'>
                                <RemoveIcon />
                            </IconButton>

                            <div className='text-2xl'>{inCardCount}</div>

                            <IconButton color='primary' onClick={() => dispatch(addCakeToCard(props.cake))}>
                                <AddIcon />
                            </IconButton>
                        </div>
                        : <Button onClick={() => dispatch(addCakeToCard(props.cake))} color="primary" variant="contained">
                            В корзину
                        </Button>
                }

            </div>
        </div>
    </div>;
}

export default CakeCard;