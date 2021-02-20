import React from "react";
import cs from 'classnames';

const Columns = () => (
    <>
        <button className="button is-dark is-large">Collapse</button>
        <div className="columns">
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
    </>

);

export default Columns;
