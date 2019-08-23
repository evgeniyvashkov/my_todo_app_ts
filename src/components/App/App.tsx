import React from 'react';

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Content } from '../Content'

export const App = () =>
    <>
        <Header>My TODO List App</Header>
        <Content>
            {children}
        </Content>
        <Footer />
    </>