// TODO: BookManagerインターフェースを実装した書籍管理クラスを作成してください
// - コンストラクタで初期の書籍リストを受け取れるようにする
// - 各メソッドを適切に実装する
// - privateプロパティとして書籍リストを持つ
// - 書籍IDは追加時に自動的に割り当てる

// - 書籍のカテゴリは列挙型(enum)、書籍の情報はインターフェースを使用する
class BookStore implements BookManager {// 書籍管理クラス
    // 書籍のカテゴリを列挙型として定義
    private books: Book[] = []; // 書籍リストを保持するプライベートプロパティ
    private nextID: number = 1; // 次の書籍IDを保持するプライベートプロパティ

    // 初期の書籍リストを受け取るコンストラクタ
    constructor(initialBooks: Book[] = []) {// コンストラクタで初期の書籍リストを受け取る
        // 初期の書籍リストが提供されていない場合は空のリストで初期化
        this.books = initialBooks; // 初期の書籍リストで初期化
    }

    // 書籍を追加して書籍情報を引数に取り、追加された書籍のIDを返すメソッド
    addBook(book: Book): number {// 書籍を追加するメソッド
        book.id = this.nextID++; //
        this.books.push(book);// 書籍をリストに追加
        return book.id;// 追加された書籍のIDを返す
    }
    
    // IDで書籍を取得してIDを引数に取り、書籍情報またはnullを返すメソッド
    getBook(id: number): Book | null {// 書籍をIDで取得して書籍をIDで検索し、見つかった場合はその書籍情報を返すメソッド
        return this.books.find(book => book.id === id) || null;// 書籍を検索し、見つからなければnullを返す
    }

    // 書籍情報を更新してIDと更新情報を引数に取り、更新の成功/失敗を真偽値で返すメソッド
    updateBook(id: number, updates: Partial<Book>): boolean {// 書籍情報を更新するメソッド
        // 書籍をIDで検索し、見つかった場合は更新する
        const book = this.getBook(id);// 書籍をIDで検索
        if (book) {// 書籍が見つかった場合
            Object.assign(book, updates);// 書籍情報を更新
            return true;// 更新成功を返す
        }
        return false;// 書籍が見つからなかった場合はfalseを返す
    }

    // 書籍を削除してIDを引数に取り、削除の成功/失敗を真偽値で返すメソッド
    deleteBook(id: number): boolean {// 書籍をIDで検索し、見つかった場合は書籍を削除するメソッド
        const index = this.books.findIndex(book => book.id === id);// 書籍をIDで検索し、インデックスを取得
        if (index !== -1) {// 書籍が見つかった場合
            this.books.splice(index, 1);// 書籍をリストから削除
            return true;// 削除成功を返す
        }
        return false;// 書籍が見つからなかった場合はfalseを返す
    }

    // 条件に合う書籍を検索して検索条件を引数に取り、書籍の配列を返すメソッド
    searchBooks(criteria: Partial<Book>): Book[] {// 検索条件に基づいて書籍をフィルタリングして書籍を検索するメソッド
        return this.books.filter(book => {// 書籍リストをフィルタリング
            return Object.keys(criteria).every(key => {// 検索条件のすべてのプロパティに対して
                return book[key as keyof Book] === criteria[key as keyof Book];// 書籍のプロパティと検索条件のプロパティが一致するかを確認
            });
        });
    }

    // すべての書籍を取得して書籍の配列を返すメソッド
    getAllBooks(): Book[] {// すべての書籍を取得するメソッド
        return this.books;// 書籍リストを返す
    }
}

// 必要なインターフェースと型を適切にインポートしてください
import { Book } from "../types/index";
import { BookManager } from "../interfaces/book-manager";