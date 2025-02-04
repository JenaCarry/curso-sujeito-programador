type Info = {
    id: number;
    nome: string;
    descricao?: string;
};

type Category = {
    slug: string;
    quantityProducts: number;
};

type ProductInfo = Info & Category;

const newProduct: ProductInfo = {
    id: 12,
    nome: "Teclado",
    slug: "Teclado Mecânico",
    quantityProducts: 12,
};

console.log(newProduct);
