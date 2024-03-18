import PromotionCard from "./PromitionCard";

const promotions = [
    { text: 'Подборка специально для вас' },
    { text: 'Стартуем' },
    { text: 'Крем от СУПЕР ТОРТ' },
    { text: 'Зима всё!' },
    { text: '3=2 АКЦИЯ!' },
];

const PromotionsList = () => {
    return <div className="flex items-center gap-4">
        {promotions.map(p => <PromotionCard key={p.text} text={p.text} />)}
    </div>;
}

export default PromotionsList;