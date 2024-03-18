import CakeCard from "../CakeCard/CakeCard";

const cakes = [
    { img: 'https://api.yarcheplus.ru/thumbnail/740x494/13/486/13486.png', name: 'Муравейник', description: 'Очень вкусный торт на праздник', price: 279 },
    { img: 'https://butik-tortiana.ru/upload/iblock/03a/03a650137a37ab817fbcd728a3c04cad.png', name: 'Наполеон', description: 'Очень вкусный торт на праздник', price: 319 },
];

const CelebrationCakes = () => {
    return <div className="flex flex-wrap gap-12">
        {cakes.map(c =>
            <CakeCard key={c.name} name={c.name} description={c.description} price={c.price} img={c.img} />
        )}
    </div>;
}

export default CelebrationCakes;