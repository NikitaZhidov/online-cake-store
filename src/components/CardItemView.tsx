import { CardItem } from '../mock-data/card-item';

type Props = {
  cardItem: CardItem;
}

const CardItemView = (props: Props) => {
  return <div>
    <div className='flex gap-3 items-center'>
      <div className='h-24 w-24 rounded-md overflow-hidden shadow-md border border-black/15'>
        <img className='w-full h-full object-contain' src={props.cardItem.cake.img} alt="" />
      </div>

      <div className='flex flex-col h-full'>
        <div className='text-2xl leading-none'>{props.cardItem.cake.name}</div>
        <div className='text-xs text-gray-300'>{props.cardItem.cake.description}</div>

        <div className='mt-4 text-2xl font-light'>{props.cardItem.cake.price} ₽</div>
      </div>
    </div>
  </div>;
}

export default CardItemView;