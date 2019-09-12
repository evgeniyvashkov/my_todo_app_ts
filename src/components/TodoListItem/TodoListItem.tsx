import React, { PureComponent } from 'react';

import { Button } from '../Button';
import ITodoListItemsProps from './ITodoListItems.interface';
import { ReactComponent as ArrowImg } from './arrow.svg';

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

    toggleOpenStatus = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { title, completed, id, onToggleComplete, onDelete } = this.props;
        const classNames = `todoListItem ${completed ? 'completed' : ''} ${this.state.isOpen ? 'expanded' : ''}`;

        return (
            <li className={classNames} onClick={this.toggleOpenStatus}>
                <div className="icon-status"></div>
                <div className="title">{title}</div>
                <div className="trigger">
                    <ArrowImg />
                </div>

                {this.state.isOpen &&
                    <div className="actions">
                        <Button className='btn btn-red' onClick={() => onDelete(id)}>delete</Button>
                        {(completed) ? <Button className="btn btn-yellow" onClick={() => onToggleComplete(id)}>Reopen</Button> : <Button className="btn btn-green" onClick={() => onToggleComplete(id)}>Completed</Button>}
                    </div>}
            </li>
        );
    }
};
