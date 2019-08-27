import React, { Fragment } from 'react';

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Content } from '../Content'
import { TodoList } from '../TodoList'

import todoList from '../../mocks/todoList.json';

export const App = () =>
    <Fragment>
        <Header>My TODO List App</Header>
        <Content title="My Todo List">
            <TodoList todoList={todoList} />
        </Content>
        <Footer />
    </Fragment>