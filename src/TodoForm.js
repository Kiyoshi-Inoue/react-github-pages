import React, { useState } from "react";

// やることを追加するReactコンポーネントを作成
export default function TodoForm({ add }) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        add(value);
        setValue("");
    };

    // jsx記述
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <input type="submit" value="追加" />
        </form>
    );
}
