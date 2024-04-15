import { useSelector } from 'react-redux';
import { selectOrders } from '../../store/selectors';
import CardItemView from '../../components/CardItemView';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const ProfilePage = () => {
  const orders = useSelector(selectOrders);

  return <div>
    <div className='flex items-center gap-4'>
      <div className='h-20 w-20 rounded-full overflow-hidden bg-gray-300 p-6'>
        <img className='object-cover h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
      </div>

      <div>Иван Иванов</div>
    </div>

    <div className='mt-8 flex items-center gap-3'>
      <div className='font-bold text-lg'>E-mail:</div>
      <div className='font-light text-gray-500'>ivan.invanov@gmail.com</div>
    </div>

    <div className='flex items-center gap-3'>
      <div className='font-bold text-lg'>Номер телефона:</div>
      <div className='font-light text-gray-500'>+7921345679</div>
    </div>

    <div className='flex items-center gap-3'>
      <div className='font-bold text-lg'>Адрес доставки:</div>
      <div className='font-light text-gray-500'>г. Петрозаводск, Ленина 33</div>
    </div>

    <div className='mt-12 font-bold text-2xl'>История заказов:</div>

    <div className='flex flex-col py-7'>
      {orders.map((o, index) =>
      <div key={o.date.getTime()} className='flex flex-col'>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <div className='flex items-center gap-1'>
              <span className='bg-green-400 rounded-md mr-4 px-2 py-0.5'>Доставлен</span> <span className='font-bold mr-2'>Заказ #{orders.length - index}</span> от {o.date.toLocaleDateString()}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className='flex flex-col gap-4'>
              {o.cardItems.map(cardItem =>
                <div className='flex items-center justify-between' key={`${o.date.getTime()}-${cardItem.cake.name}-${cardItem.count}`}>
                  <CardItemView cardItem={cardItem} />

                  <div className='flex gap-2'>
                    <div>x{cardItem.count}</div>
                    <div>{cardItem.count * cardItem.cake.price} ₽</div>
                  </div>
                </div>
              )}

              <div className='font-bold text-2xl mt-4'>Итого: {o.cardItems.reduce((acc, curr) => acc + curr.count * curr.cake.price, 0) } ₽</div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>)}
    </div>
  </div>;
}

export default ProfilePage;
