export enum Category {
  "expense" = "EXPENSE",
  "income" = "INCOME",
}

export interface ITransaction {
  id: number;
  title: string;
  category: Category;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}
