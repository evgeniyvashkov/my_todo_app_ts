import React from 'react';

import { TodoListItem } from '../TodoListItem'
import ITodoListItemsProps from '../TodoListItem/ITodoListItems.interface'


interface ITodoListProps {
    todoList: ITodoListItemsProps[]
}


export const TodoList = ({ todoList }: ITodoListProps) => {
    const todoListArray = todoList.map(({ id, title, completed }) => 
        {   
            console.log(id, title, completed)
            return <TodoListItem title={title} completed={completed} id={id} key={id}/>
        }
    );

    return (
        <div className="todoList-container">
            <ul className="todoList">
                {todoListArray}
            </ul>
        </div>
    )
}