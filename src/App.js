import React from "react";
import styles from "./App.module.scss"
import ItemsList from "./components/ItemsList";


function App() {
    return (
        <div className={styles.app}>
            <div className="box">
                <ItemsList/>
            </div>
        </div>
    );
}

export default App;
