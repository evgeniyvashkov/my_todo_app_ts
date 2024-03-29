import React from 'react';

import ITodoListItemsProps from './ITodoListItems.interface'

export const TodoListItem = ({ title, completed }: ITodoListItemsProps) => {
    const classNames = `todoListItem${completed ? ' completed' : ''}`;
    // console.log('rendered li')
    return (
        <li className={classNames}>
            <div className="icon-status"></div>
            <div className="title">{title}</div>
            <div className="trigger">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
                    <path fill="#394754" d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M227.5,327.148
                        L99.411,199.476l21.178-21.248L227.5,284.791l106.911-106.563l21.178,21.248L227.5,327.148z"/>
                </svg>
            </div>
        </li>
    );
};