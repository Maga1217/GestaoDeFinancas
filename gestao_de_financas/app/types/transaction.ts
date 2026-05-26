import { Category } from "./category";

export type TransactionType = "INCOME" | "EXPENSE";

export type Transaction = {
    id: string;
    title: string;
    description?: string;
    amount: number;
    type: TransactionType;
    categoryId: Category["id"];
    date: Date;
};