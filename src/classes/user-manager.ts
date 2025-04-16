// TODO: ユーザー管理クラスを作成してください
// - コンストラクタで初期のユーザーリストを受け取れるようにする
// - ユーザーの追加、取得、更新、削除ができるメソッドを持つ
// - すべてのユーザーを取得するメソッドを持つ
// - privateプロパティとしてユーザーリストを持つ
// - ユーザーIDは追加時に自動的に割り当てる

class UserManager {// ユーザー管理クラス
    private users: User[] = []; // ユーザーリストを保持するプライベートプロパティ
    private nextID: number = 1; // 次のユーザーIDを保持するプライベートプロパティ

    // 初期のユーザーリストを受け取るコンストラクタ
    constructor(initialUsers: User[] = []) {// コンストラクタで初期のユーザーリストを受け取る
        // 初期のユーザーリストが提供されていない場合は空のリストで初期化
        this.users = initialUsers; // 初期のユーザーリストで初期化
    }

    // ユーザーを追加するメソッド
    addUser(user: User): number {// ユーザーを追加するメソッド
        user.id = this.nextID++; // ユニークなIDを生成するために現在のタイムスタンプを使用
        this.users.push(user);// ユーザーをリストに追加
        return user.id;// 追加されたユーザーのIDを返す
    }

    // IDでユーザーを取得するメソッド
    getUser(id: number): User | null {// ユーザーをIDで取得するメソッド
        return this.users.find(user => user.id === id) || null;// ユーザーを検索し、見つからなければnullを返す
    }

    /**getUserを通常の関数式で書いた場合
        getUser(id: number): User | null {
            return this.users.find(function(user) {
                return user.id === id;
            }) || null;
        }
     */

    // ユーザー情報を更新するメソッド
    updateUser(id: number, updates: Partial<User>): boolean {// ユーザー情報を更新するメソッド
        // ユーザーをIDで検索し、見つかった場合は更新する
        const user = this.getUser(id);// ユーザーをIDで検索
        if (user) {// ユーザーが見つかった場合
            Object.assign(user, updates);// ユーザー情報を更新
            return true;// 更新成功を返す
        }
        return false;// ユーザーが見つからなかった場合はfalseを返す
    }

    // ユーザーを削除するメソッド
    deleteUser(id: number): boolean {// ユーザーをIDで検索し、見つかった場合はユーザーを削除するメソッド
        const index = this.users.findIndex(user => user.id === id);// ユーザーをIDで検索し、インデックスを取得
        if (index !== -1) {// ユーザーが見つかった場合
            this.users.splice(index, 1);// ユーザーをリストから削除
            return true;// 削除成功を返す
        }
        return false;// ユーザーが見つからなかった場合はfalseを返す
    }

    /**deleteUserを通常の関数式で書いた場合
        deleteUser(id: number): boolean {
            const index = this.users.findIndex(function(user) {
                return user.id === id;
            });
            if (index !== -1) {
                this.users.splice(index, 1);
                return true;
            }
        return false;
        }
    */

    // すべてのユーザーを取得するメソッド
    getAllUsers(): User[] {// すべてのユーザーを取得するメソッド
        return this.users;// ユーザーリストを返す
    }
}


// 必要な型を適切にインポートしてください
import { User } from "../types/index";