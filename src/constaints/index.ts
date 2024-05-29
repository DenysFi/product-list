import { Product } from "@/types/products";

export const defaultProducts: Product[] = [
    {
        id: 1,
        imageUrl: "empty.jpg",
        name: "Product 1",
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        weight: "200g",
        comments: [1, 3]
    },
    {
        id: 2,
        imageUrl: "pa.jpg",
        name: "Product 2",
        count: 10,
        size: {
            width: 150,
            height: 150
        },
        weight: "500g",
        comments: [2]
    },
    {
        id: 3,
        imageUrl: "empty.jpg",
        name: "Product 3",
        count: 7,
        size: {
            width: 250,
            height: 250
        },
        weight: "300g",
        comments: [4]
    }
];

export const defaultComments = [
    {
        id: 1,
        productId: 1,
        description: 'some text here',
        date: '14:00 22.08.2021'
    },
    {
        id: 2,
        productId: 2,
        description: 'another text here',
        date: '15:30 23.08.2021'
    },
    {
        id: 3,
        productId: 1,
        description: 'more text here',
        date: '16:45 24.08.2021'
    },
    {
        id: 4,
        productId: 3,
        description: 'more text here',
        date: '16:45 24.08.2021'
    }
]

export const defaultProdDBName = 'products'