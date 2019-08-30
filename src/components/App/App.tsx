import React, { Component, Fragment } from 'react';

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Content } from '../Content'
import { TodoList } from '../TodoList'

import todoList from '../../mocks/todoList.json';
import ITodoListItemsProps from '../TodoListItem/ITodoListItems.interface';
import { TodosAPI } from '../../constants';


interface IAppState {
    todoList: ITodoListItemsProps[]
}

export class App extends Component<{}, IAppState> {
    constructor(props: IAppState) {
        super(props);

        this.state = {
            todoList: todoList
        }
    }

    // componentDidMount() {
    //     let ITEMS; 
    //     fetch(TodosAPI)
    //         .then(res => res.json())
    //         .then(items => {
    //             ITEMS = items;
    //             console.log('fetched')
    //             console.log(ITEMS)
    //         });
       
    // }

    // toggleItemStatus = (event: React.MouseEvent) => {
    //     console.dir(event.currentTarget);
    //     event.currentTarget.classList.toggle('open') // this.setState({todoList:newTodoList})
    // }

    render() {
        return (
            <Fragment>
                <Header>TODO App</Header>
                <Content title="Todo List">
                    <TodoList todoList={this.state.todoList} />
                </Content>
                <Footer />
            </Fragment>
        )
    }
}