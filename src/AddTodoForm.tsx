import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>("");
    const htmlElRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const submitHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        newTodo.trim() !== "" && addTodo(newTodo); // Checks if todo is not empty
        setNewTodo("")
        if (htmlElRef && htmlElRef.current) { // Strict assurance to remove possible null values
            htmlElRef.current.focus()
        }
    }

    return (
        <form>
            <input autoFocus ref={htmlElRef} type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={submitHandler}>Add Todo</button>
        </form>
    );
};