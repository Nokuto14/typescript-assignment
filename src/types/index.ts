// TODO: 以下の型を定義してください

// 1. 書籍のカテゴリを表す列挙型（Enum）
// カテゴリは「Fiction」「NonFiction」「Science」「Programming」「Other」を含む

enum BookCategory {// 書籍のカテゴリを列挙型として定義
    Fiction = "Fiction",
    NonFiction = "NonFiction",
    Science = "Science",
    Programming = "Programming",
    Other = "Other"
}

// 2. 書籍の情報を表すインターフェース
// - id: 数値
// - title: 文字列
// - author: 文字列
// - price: 数値
// - category: 上で定義したカテゴリの列挙型
// - inStock: 真偽値（オプショナル）
// - tags: 文字列の配列（オプショナル）

interface Book{// 書籍の情報を表すインターフェース
    id: number;
    title: string;
    author: string;
    price: number;
    category: BookCategory;
    inStock?: boolean;// 書籍の在庫状況を表すオプショナルなプロパティ
    tags?: string[];// 書籍のタグを表すオプショナルなプロパティ
}

// 3. ユーザー情報を表すインターフェース
// - id: 数値
// - name: 文字列
// - email: 文字列
// - isAdmin: 真偽値（デフォルト値はfalse）

interface User {// ユーザー情報を表すインターフェース
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

// ユーザー情報を生成する関数
// - name: 文字列
// - email: 文字列
// - isAdmin: 真偽値（デフォルト値はfalse）
// - 戻り値: ユーザー情報を含むオブジェクト
function createUser(id: number, name: string, email: string, isAdmin: boolean = false): User {
    return{id,name,email,isAdmin};// ユーザー情報を含むオブジェクトを返す
}
// 4. 注文情報を表すインターフェース
// - id: 数値
// - userId: 数値
// - books: 書籍IDと数量を含むオブジェクトの配列
// - totalAmount: 数値
// - orderDate: Date型
// - status: 「Pending」「Shipped」「Delivered」「Cancelled」のいずれかの文字列リテラル型

interface Order{
    id : number;
    userId : number;
    books : { bookId: number; quantity: number }[];
    totalAmount : number;
    orderDate : Date;
    status : "Pending" | "Shipped" | "Delivered" | "Cancelled";
}

// 5. 必要に応じて、型をエクスポートしてください
export { Book, BookCategory, User, Order };