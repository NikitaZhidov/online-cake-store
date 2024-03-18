import MiniCakeCard from "../CakeCard/MiniCakeCard";

const cakes = [
    { img: 'https://api.yarcheplus.ru/thumbnail/740x494/13/486/13486.png', name: 'Муравейник' },
    { img: 'https://butik-tortiana.ru/upload/iblock/03a/03a650137a37ab817fbcd728a3c04cad.png', name: 'Наполеон' },
];

const PopularCakes = () => {
    return <div className="flex items-center gap-8">
        {cakes.map(c => <MiniCakeCard key={c.name} name={c.name} img={c.img} />)}
    </div>;
}

export default PopularCakes;