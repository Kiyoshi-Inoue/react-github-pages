import React from "react";

// 削除ボタンに関するReactコンポーネントを作成
export default function Todo({ todo, complete, index }) {
    // jsx記述
    return (
        <p>
            <button onClick={() => complete(index)}>削除</button> {todo.text}
        </p>
    );
}
