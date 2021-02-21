import React from "react";
import cx from 'classnames';
import {compose} from "recompose";
import styles from "./Columns.module.scss"
import withCollapse from "../../hoc/withCollapse";
import withAuth from "../../hoc/withAuth";

const Columns = ({isCollapsed, toggle, isAuthorised, toggleAuth}) => {
    const rowClass = cx('columns', {
        [styles.isCollapsed]: isCollapsed,
    });

    return (
        <div className="columns">
            <div className="column">
                <p>Collapsed: {isCollapsed.toString()}</p>
                <p>Authorised: {isAuthorised.toString()}</p>
                <button onClick={toggle} className="button is-dark is-large">Collapse</button>
                <button onClick={toggleAuth} className="button is-warning is-large">{isAuthorised ? "logout" : "login"}</button>
                {
                    isAuthorised ? (
                        <div className={rowClass}>
                            <div className="column">
                                <div className="notification is-link">First</div>
                            </div>
                            <div className="column">
                                <div className="notification is-link">Second</div>
                            </div>
                            <div className="column">
                                <div className="notification is-link">Third</div>
                            </div>
                            <div className="column">
                                <div className="notification is-link">Fourth</div>
                            </div>
                        </div>
                    ) : (
                        <h2 className="title">You must sign in to see this content!;)</h2>
                    )}
            </div>
        </div>
    );
}


export default compose(withAuth,withCollapse)(Columns);
