import React, {Component} from "react";
import styles from './ItemsList.module.scss'
import cx from 'classnames'

const items = [
    `Lorem ipsum.`,
    `Lorem ipsum.`,
    `Lorem ipsum.`,
    `Lorem ipsum.`,
];

class ItemsList extends Component {
    state = {
        isCollapsed: false,
    }

    toggle = () => {
        this.setState(prevstate => ({
            isCollapsed: !prevstate.isCollapsed,
        }));

    };

    render() {
        const listClass = cx(styles.list,{
            [styles.isCollapsed]: this.state.isCollapsed,
        });

        return (
            <div>
                <button onClick={this.toggle} className="button is-dark is-large">Collapse</button>
                <ul className={listClass}>
                    {items.map(item => (
                        <li className="notification is-primary">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}


export default ItemsList;
