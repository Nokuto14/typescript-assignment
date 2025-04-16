// TODO: 書籍管理のためのインターフェースを定義してください
// - addBook: 書籍を追加するメソッド（書籍情報を引数に取り、追加された書籍のIDを返す）
// - getBook: IDで書籍を取得するメソッド（IDを引数に取り、書籍情報またはnullを返す）
// - updateBook: 書籍情報を更新するメソッド（IDと更新情報を引数に取り、更新の成功/失敗を真偽値で返す）
// - deleteBook: 書籍を削除するメソッド（IDを引数に取り、削除の成功/失敗を真偽値で返す）
// - searchBooks: 条件に合う書籍を検索するメソッド（検索条件を引数に取り、書籍の配列を返す）
// - getAllBooks: すべての書籍を取得するメソッド（書籍の配列を返す）


export interface BookManager {
    addBook(book: Book): number; // 書籍を追加するメソッド
    getBook(id: number): Book | null; // IDで書籍を取得するメソッド
    updateBook(id: number, updates: Partial<Book>): boolean; // 書籍情報を更新するメソッド
    deleteBook(id: number): boolean; // 書籍を削除するメソッド
    searchBooks(criteria: Partial<Book>): Book[]; // 条件に合う書籍を検索するメソッド
    getAllBooks(): Book[]; // すべての書籍を取得するメソッド
}

// 必要な型を適切にインポートしてください
import { Book } from "../types/index";