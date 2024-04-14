export interface Promotion {
    img: string;
    name: string;
    description: string;
}

export const mockPromotions: Promotion[] = [
    {
        name: 'Подборка специально для вас',
        img: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg',
        description: 'Выберите самые подходящие торты!'
    },
    {
        name: 'Стартуем',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiz19qU_3J7-P0NJVAacW93ALs_bOKdPD9ZfiLR8x4mQ&s',
        description: 'Скидка на весенний ассортимент!'
    },
    {
        name: 'Крем от СУПЕР ТОРТ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpDwpJ6q-VV2X0P6vopV1Q6k3K-y8Y2iAcYG9XSKedQ&s',
        description: 'ПОПРОБУЙТЕ НОВЫЙ КРЕМ, СДЕЛАННЫЙ ПО УНИКАЛЬНОМУ РЕЦЕПТУ'
    },
    {
        name: 'Зима всё!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXw8o_n0OqhTXb6omS2RM2LP1WLyZI0yxldkM6ctz4yw&s',
        description: 'Вспомните зиму с этим тортом'
    },
    {
        name: '3=2 АКЦИЯ!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh07JyoWeYoplo_2orWO2aaWxLUfauIZX1woa6K_i6-g&s',
        description: 'ВЫГОДА! БЕРИТЕ 3 ТОРТА ПО ЦЕНЕ 2-х!'
    },
];
