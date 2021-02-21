import React, {Component} from "react";
import styles from './ItemsList.module.scss'
import cx from 'classnames'
import withCollapse from "../hoc/withCollapse";

const items = [
    `Docs1`,
    `Docs2`,
    `Docs3`,
    `Docs4`,
    `Docs5`,
];

class ItemsList extends Component {

    render() {
        const {isCollapsed, toggle} = this.props;
        const listClass = cx(styles.list, {
            [styles.isCollapsed]: isCollapsed,
        });

        return (
            <div>
                <button onClick={toggle} className="button is-dark is-large">Collapse</button>
                <ul className={listClass}>
                    {items.map(item => (
                        <li className="notification is-link">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}


export default withCollapse(ItemsList);
