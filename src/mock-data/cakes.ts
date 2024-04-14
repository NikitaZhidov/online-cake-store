export interface Cake {
    img: string;
    name: string;
    description: string;
    price: number;
}

export const mockCakes: Cake[] = [
    { img: 'https://api.yarcheplus.ru/thumbnail/740x494/13/486/13486.png', name: 'Муравейник', description: 'Очень вкусный торт на праздник', price: 279 },
    { img: 'https://butik-tortiana.ru/upload/iblock/03a/03a650137a37ab817fbcd728a3c04cad.png', name: 'Наполеон', description: 'Очень вкусный торт на праздник', price: 319 },
    { img: 'https://lafamillia.ru/wa-data/public/shop/products/06/00/6/images/13/13.742x0@2x.png', name: 'Сметанник', description: 'Лучший выбор', price: 219 },
    { img: 'https://tirolpirog.ru/wp-content/assets/dynamic/2014/09/pie-piece-curd.png', name: 'Твороженный', description: 'Для тех, кто на диете', price: 519 },
];