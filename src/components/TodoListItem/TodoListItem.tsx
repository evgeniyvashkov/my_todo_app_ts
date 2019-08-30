import React, { PureComponent } from 'react';

import { Button } from '../Button';
import ITodoListItemsProps from './ITodoListItems.interface'

interface IState {
    isOpen: boolean
}

export class TodoListItem extends PureComponent<ITodoListItemsProps, IState> {
    constructor(props: ITodoListItemsProps) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggleOpenStatus = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { title, completed, id } = this.props;
        const classNames = `todoListItem ${completed ? 'completed' : ''} ${this.state.isOpen ? 'expanded' : ''}`;

        return (
            <li className={classNames}  onClick={this.toggleOpenStatus}>
                <div className="icon-status"></div>
                <div className="title">{title}</div>
                <div className="trigger">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455">
                        <path fill="#394754" d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M227.5,327.148 L99.411,199.476l21.178-21.248L227.5,284.791l106.911-106.563l21.178,21.248L227.5,327.148z" />
                    </svg>
                </div>

                {this.state.isOpen &&
                    <div className="actions">
                        <Button className='btn btn-red' onClick={() => console.log('clicked')}>delete</Button>
                        <Button className={`btn ${completed ? 'btn-green' : 'btn-yellow'}`} onClick={() => console.log('clicked')}>Completed</Button>
                    </div>}
            </li>
        );
    }
};