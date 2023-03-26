import React, { useState } from 'react';
// TodoForm.jsで作成した，やることの追加に関するTodoFormコンポーネントをインポート
import TodoForm from "./TodoForm";
// Todo.jsで作成した，削除に関するTodoコンポーネントをインポート
import Todo from "./Todo";

// Webアプリ本体
function App() {
    // 初期表示のTodo項目
    const [todos, setTodos] = useState([
        { text: "食う" },
        { text: "寝る" },
        { text: "遊ぶ" }
    ]);

    // Todo項目の追加
    const add = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    // Todo項目の削除
    const complete = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // jsx記述
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key={index} complete={complete} index={index} todo={todo} />
            ))}
            <TodoForm add={add} />
        </div>
    );
}

export default App;
