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
            todoList: todoList
        }
    }

    onToggleComplete = (id: number) => {
        console.log(id)
        const newTodoList = this.state.todoList.map(item => {
            if (item.id === id) item.completed = !item.completed;
            return item;
        })

        console.log(newTodoList)

        this.setState({ todoList: newTodoList })
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

    render() {
        console.log('Rerender App')

        return (
            <Fragment>
                <Header>TODO App</Header>
                <Content title="Todo List">
                    <TodoList todoList={this.state.todoList} onToggleComplete={this.onToggleComplete} />
                </Content>
                <Footer />
            </Fragment>
        )
    }
}

Dear recruiter, 

I would like to apply for Front-End Developer position.
I have 1+ year experience in HTML/CSS/JS and work as a HTML Developer.
My goal is to use stack of front-end technologies thus I am looking for a new position connecting with programming.

I can also add that I am familiar with (Less/Sass), JS (es5,es6) and
have some expirience in React/Redux. 
At the moment I am curious about TypeScript and getting familiar with it.

Apologies that I can't prove my words with code examples from my job (because of NDA) but you can find
some code examples in github(github.com/evgeniyvashkov).
I will be happy to asnwer any questions you may have.
Please do not hesitate to contact me.