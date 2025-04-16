// TODO: 初期データを定義し、エクスポートしてください
// - 少なくとも5冊の書籍データを作成
// - 少なくとも3人のユーザーデータを作成
// - 必要な型を適切にインポートしてください

export const books: Book[] = [
    { id: 1, title: "Book 1", author: "Author 1", price: 1000, category: BookCategory.Fiction, inStock: true, tags: ["tag1", "tag2"] },
    { id: 2, title: "Book 2", author: "Author 2", price: 2000, category: BookCategory.NonFiction, inStock: false, tags: ["tag3"] },
    { id: 3, title: "Book 3", author: "Author 3", price: 1500, category: BookCategory.Science, inStock: true, tags: ["tag4", "tag5"] },
    { id: 4, title: "Book 4", author: "Author 4", price: 2500, category: BookCategory.Programming, inStock: true, tags: ["tag6"] },
    { id: 5, title: "Book 5", author: "Author 5", price: 3000, category: BookCategory.Other, inStock: false, tags: ["tag7", "tag8"] },
];

export const users: User[] = [
    { id}
]
import { Book, BookCategory } from "../types/index"; // 書籍の情報を表すインターフェースとカテゴリの列挙型をインポート