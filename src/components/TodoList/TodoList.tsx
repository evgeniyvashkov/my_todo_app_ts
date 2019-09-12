import React from 'react';

import { TodoListItem } from '../TodoListItem'
import ITodoListItemsProps from '../TodoListItem/ITodoListItems.interface'


interface ITodoListProps {
    todoList: ITodoListItemsProps[],
    onToggleComplete: (id: number) => void,
    onDelete: (id: number) => void,
}

export const TodoList = ({ todoList, onToggleComplete,onDelete }: ITodoListProps) => {
    const todoListArray = todoList.map(({ id, title, completed }) => {
        return <TodoListItem
            title={title}
            completed={completed}
            id={id}
            key={id}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
        />
    }
    );

    console.log('Rerender TODOList')

    return (
        <div className="todoList-container">
            <ul className="todoList">
                {todoListArray}
            </ul>
        </div>
    )
}