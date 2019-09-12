import React, { Component, Fragment } from 'react';

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Content } from '../Content'
import { TodoList } from '../TodoList'

import todoList from '../../mocks/todoList.json';
import ITodoListItemsProps from '../TodoListItem/ITodoListItems.interface';
// import { TodosAPI } from '../../constants';


interface IAppState {
    todoList: ITodoListItemsProps[]
}

export class App extends Component<{}, IAppState> {
    constructor(props: IAppState) {
        super(props);

        this.state = {
            todoList: this.sortArray(todoList)
        }
    }

    componentDidMount() {
        const todoList = fetch(`https://jsonplaceholder.typicode.com/users/1/todos?_limit=30`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    todoList:data
                })
            });
    }

    //toggle task's status (complited, in progress)
    onToggleComplete = (id: number) => {
        let newTodoList = this.state.todoList.map(item => {
            if (item.id === id) item.completed = !item.completed;
            return item;
        })

        newTodoList = this.sortArray(newTodoList);

        this.setState({ todoList: newTodoList })
    }

    //delete item
    onDeleteItem = (id: number) => {
        let newTodoList = this.state.todoList.filter(item => item.id !== id);
        this.setState({
            todoList: newTodoList
        })
    }

    //function for costing array (first is in propgress tasks, then completed)
    sortArray = (todoList: ITodoListItemsProps[]) => {
        let sortedList = todoList.sort((a: ITodoListItemsProps, b: ITodoListItemsProps): number => {
            if (a.completed > b.completed) {
                return 1
            }

            if (a.completed < b.completed) {
                return -1
            }

            return 0;
        });

        return sortedList;
    }

    render() {
        return (
            <Fragment>
                <Header>TODO App</Header>
                <Content title="Todo List">
                    <TodoList todoList={this.state.todoList} onToggleComplete={this.onToggleComplete} onDelete={this.onDeleteItem} />
                </Content>
                <Footer />
            </Fragment >
        )
    }
}