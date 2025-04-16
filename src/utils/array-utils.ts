// TODO: 以下のジェネリック関数を実装してください

// 1. フィルタリング関数
// - 任意の型の配列と条件関数を引数に取り、条件を満たす要素だけの新しい配列を返す
// - 条件関数は要素を引数に取り、真偽値を返す関数

function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {// フィルタリング関数
// - 任意の型の配列と条件関数を引数に取り、条件を満たす要素だけの新しい配列を返す
// - 条件関数は要素を引数に取り、真偽値を返す関数
    return array.filter(predicate);// 条件を満たす要素だけの新しい配列を返す
}

// 2. ソート関数
// - 任意の型の配列と比較関数を引数に取り、ソートされた新しい配列を返す
// - 比較関数は2つの要素を引数に取り、数値を返す関数（Array.sortと同様の動作）

function sortArray<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {// ソート関数
// - 任意の型の配列と比較関数を引数に取り、ソートされた新しい配列を返す
// - 比較関数は2つの要素を引数に取り、数値を返す関数（Array.sortと同様の動作）
// - compareFnは、aがbより小さい場合は負の値、等しい場合は0、大きい場合は正の値を返す関数
    return [...array].sort(compareFn);// 任意の型の配列と比較関数を引数に取り、ソートされた新しい配列を返す
}

// 3. マッピング関数
// - 任意の型の配列と変換関数を引数に取り、変換された新しい配列を返す
// - 変換関数は元の型の要素を引数に取り、新しい型の値を返す関数

function mapArray<T, U>(array: T[], mapFn: (item: T) => U): U[] {// マッピング関数
// - 任意の型の配列と変換関数を引数に取り、変換された新しい配列を返す
// - 変換関数は元の型の要素を引数に取り、新しい型の値を返す関数
    return array.map(mapFn);// 変換された新しい配列を返す
}

// 4. ページネーション関数
// - 任意の型の配列、ページ番号、ページサイズを引数に取り、指定ページの要素だけの新しい配列を返す
// - ページ番号は1から始まる
// - 無効なページ番号の場合は空配列を返す

function pagenateArray<T>(array: T[], pageNumber: number, pageSize: number): T[] {// ページネーション関数
// - 任意の型の配列、ページ番号、ページサイズを引数に取り、指定ページの要素だけの新しい配列を返す
// - ページ番号は1から始まる
// - 無効なページ番号の場合は空配列を返す
    if (pageNumber < 1 || pageSize < 1) {// ページ番号とページサイズが1未満の場合
// - 無効なページ番号の場合は空配列を返す
        return [];// 空配列を返す
    }
    const startIndex = (pageNumber - 1) * pageSize;// 開始インデックスを計算
    return array.slice(startIndex, startIndex + pageSize);// 指定ページの要素だけの新しい配列を返す
// - array.slice(start, end)は、startからendまでの要素を含む新しい配列を返す
}

// 5. 各関数をエクスポートしてください
export { filterArray, sortArray, mapArray, pagenateArray };// 各関数をエクスポート