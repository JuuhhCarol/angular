export interface Iprodutos {
    id: string;
    name: string;
    price: string;
    image: string; 
}

const MockProdutos: Iprodutos[] = [
    {
        id: "1",
        name: "arroz tipo 1 premium 5kg",
        price: "45.90",
        image: "https://giassi.vtexassets.com/arquivos/ids/2036833-800-450?v=638588594846470000&width=800&height=450&aspect=true"
    },
    {
        id: "2",
        name: "Miojo Tomate Suave",
        price: "3.80",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROr9noieakETAj4-UnpqmrmMrcAN6dqOcnxA&s"
    },
    {
        id: "3",
        name: "macarrão grano duro importado 500g",
        price: "9.90",
        image: "https://rbsm.com.br/wp-content/uploads/2024/11/7898254520107-1.png"
    },
    {
        id: "4",
        name: "azeite de oliva extra virgem 500ml",
        price: "32.00",
        image: "https://emporioquatroestrelas.vteximg.com.br/arquivos/ids/235665-1000-1000/Azeite-de-Oliva-Extra-Virgem-500ml-Gallo-ProImagem-17208.jpg?v=638942354421370000"
    },
    {
        id: "5",
        name: "açúcar demerara orgânico 1kg",
        price: "7.50",
        image: "https://bistek.vtexassets.com/arquivos/ids/193426-600-600?v=638537987096830000&width=600&height=600&aspect=truer"
    },
    {
        id: "6",
        name: "Água de Bandido",
        price: "300.90",
        image: "https://mercantilnovaera.vtexassets.com/arquivos/ids/218731/Licor-Jack-Daniel-s-Tennessee-Sabor-Maca-Verde-Garrafa-700ml.png?v=638630482198830000"
    },
    {
        id: "7",
        name: "café gourmet 500g",
        price: "28.90",
        image: "https://cafestore.vteximg.com.br/arquivos/ids/166141-1000-1000/16.jpg.jpg?v=638760023518200000"
    },
    {
        id: "8",
        name: "chocolate meio amargo 70% cacau",
        price: "14.50",
        image: "https://cdn.awsli.com.br/761/761999/produto/14807007352684bbffe.jpg"
    },
    {
        id: "9",
        name: "manteiga com sal 200g",
        price: "11.90",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7Xn2qNrVf5ngKrJQOdWSDlsvBytI4dRCFA&s"
    },
    {
        id: "10",
        name: "ovos caipiras (dúzia)",
        price: "18.00",
        image: "https://certifiedhumanebrasil.org/wp-content/uploads/2017/11/ovo-caipira-e-ovo-organico.jpg"
    }
];

export default MockProdutos;