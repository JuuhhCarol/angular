export interface Icomidas {
    id: string;
    name: string;
    price: string;
    image: string;
    deliveryTime: string; 
    rating: number;       
    storeName: string;    
    neighborhood: string; 
}

const MockFood: Icomidas[] = [
    {
        id: "1",
        name: "Lasanha à bolonhesa",
        price: "42.90",
        image: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/lasanha-bolonhesa.jpg",
        deliveryTime: "40-55 min",
        rating: 4.8,
        storeName: "Cantina do Nonno",
        neighborhood: "Santa Felicidade"
    },
    {
        id: "2",
        name: "Frango grelhado com legumes",
        price: "38.50",
        image: "https://seguiareceita.com/wp-content/uploads/2026/01/frango-grelhado-com-legumes-no-vapor-1.jpg",
        deliveryTime: "30-45 min",
        rating: 4.5,
        storeName: "Fit & Sabor",
        neighborhood: "Água Verde"
    },
    {
        id: "3",
        name: "Risoto de cogumelos",
        price: "45.00",
        image: "https://www.boqnews.com/wp-content/uploads/2020/11/risoto.png",
        deliveryTime: "45-60 min",
        rating: 4.9,
        storeName: "Risoto Gourmet",
        neighborhood: "Batel"
    },
    {
        id: "4",
        name: "Salada Caesar com frango",
        price: "29.90",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnkxWF2pmcn2aHqul2eBxj-V9ObZvTE4KHQ&s",
        deliveryTime: "20-35 min",
        rating: 4.3,
        storeName: "Horta no Prato",
        neighborhood: "Juvevê"
    },
    {
        id: "5",
        name: "Pizza de quatro queijos",
        price: "49.90",
        image: "https://claudia.abril.com.br/wp-content/uploads/2020/02/pizza-quatro-queijos-comitc3aa-umami.jpg?quality=70&strip=info&w=960",
        deliveryTime: "35-50 min",
        rating: 4.7,
        storeName: "Pizzaria Curitibana",
        neighborhood: "Portão"
    },
    {
        id: "6",
        name: "Hambúrguer artesanal com batata frita",
        price: "34.50",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH2fprgL1ZwkHlXJNhnnq8crqZHZzYJKVEg&s",
        deliveryTime: "25-40 min",
        rating: 4.6,
        storeName: "Burger do Largo",
        neighborhood: "São Francisco"
    },
    {
        id: "7",
        name: "Sushi especial 12 peças",
        price: "55.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4poxdP92df4gWzGTY33Wg4A7oBhoNoKct5A&s",
        deliveryTime: "50-65 min",
        rating: 4.9,
        storeName: "Kyoto Sushi Lab",
        neighborhood: "Bigorrilho"
    },
    {
        id: "8",
        name: "Espaguete ao pesto",
        price: "36.80",
        image: "https://www.comidaereceitas.com.br/wp-content/uploads/2011/08/Espaguete-ao-molho-pesto-vegan-freepik.jpg",
        deliveryTime: "30-45 min",
        rating: 4.4,
        storeName: "Massa Viva",
        neighborhood: "Rebouças"
    },
    {
        id: "9",
        name: "Filé mignon ao molho madeira",
        price: "68.90",
        image: "https://sabores-new.s3.amazonaws.com/public/2024/11/bife-ao-molho-madeira.jpg",
        deliveryTime: "45-55 min",
        rating: 4.8,
        storeName: "Grelhados Curitiba",
        neighborhood: "Cabral"
    },
    {
        id: "10",
        name: "Churros de KinderBueno",
        price: "22.00",
        image: "https://bhaz.com.br/wp-content/uploads/2017/01/15965090_1752991185022451_6222201980701817500_n.jpg",
        deliveryTime: "15-30 min",
        rating: 5.0,
        storeName: "Doce Jardim",
        neighborhood: "Jardim das Américas"
    }
];

export default MockFood;