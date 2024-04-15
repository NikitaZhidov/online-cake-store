import { Button } from "@mui/material"
import { useSelector } from 'react-redux';
import { selectCardItemsCount } from '../store/selectors';
import { NavLink } from 'react-router-dom';
import { CoreRoutes } from '../routes';

const CardButton = () => {
    const itemsCount = useSelector(selectCardItemsCount);

    return <NavLink to={CoreRoutes.cart}>
        <Button variant="contained" color="primary">
            Корзина  {itemsCount ? `(${itemsCount})` : ''}
        </Button>
    </NavLink>;
}

export default CardButton;