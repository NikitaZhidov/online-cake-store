import { useDispatch, useSelector } from 'react-redux';
import { selectCard } from '../../store/selectors';
import CardItemView from '../../components/CardItemView';
import { IconButton, Button } from '@mui/material';
import { decreaseCakeFromCard, addCakeToCard, orderCard } from '../../store/global-store';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { NavLink } from 'react-router-dom';
import { CoreRoutes } from '../../routes';


const CartPage = () => {
  const card = useSelector(selectCard);
  const dispatch = useDispatch();

  if (!card.length) {
    return <div className='flex justify-center items-center h-80 flex-col gap-1'>
      <div className='font-light text-3xl text-gray-300'>Корзина пуста</div>
      <NavLink to={`/${CoreRoutes.catalog}`}>
        <Button className='underline' variant='outlined'>Перейти к покупкам</Button>
      </NavLink>
    </div>
  }

  return <div>
    <div className='flex flex-col gap-6'>
      {card.map(c => <div key={c.cake.name} className='flex justify-between gap-4'>
        <CardItemView cardItem={c} />

        <div className='flex items-center gap-4'>
          <div className='text-xl mx-5'>{c.count * c.cake.price} ₽</div>

          <IconButton onClick={() => dispatch(decreaseCakeFromCard(c.cake))} color='primary'>
            <RemoveIcon />
          </IconButton>

          <div className='text-2xl'>{c.count}</div>

          <IconButton color='primary' onClick={() => dispatch(addCakeToCard(c.cake))}>
            <AddIcon />
          </IconButton>
        </div>
      </div>)}
    </div>

    <div className='mt-20 flex items-center justify-between'>
      <div className='text-3xl font-bold'>Итого: {card.reduce((acc, cur) => acc + cur.cake.price * cur.count, 0)} ₽</div>

      <div>
        <Button color='primary' variant='contained' onClick={() => dispatch(orderCard())}>Оформить заказ</Button>
      </div>
    </div>
  </div>;
}

export default CartPage;
