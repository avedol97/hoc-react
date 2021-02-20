import React from "react";
import ItemsList from "../components/ItemsList";
import styles from './Docs.module.scss'

const Docs = () => {
    return (
        <div>Docs
            <div className={styles.box}>
    <ItemsList/>
        </div>
        </div>
    )
}
export default Docs;
