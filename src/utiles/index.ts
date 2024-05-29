import { Product } from "@/types/products";

export function loadFromLC(key: string) {
    const data = localStorage.getItem(key);
    if (!data) return null;

    return JSON.parse(data)
}

export function saveToLC<T>(key: string, data: T[]) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function validate(data: Product) {
    return data.name.length && data.size.height && data.size.width
}