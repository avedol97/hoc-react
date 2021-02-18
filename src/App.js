import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import styles from "./App.module.scss"
import ItemsList from "./components/ItemsList";
import Docs from "./views/Docs";
import Tips from "./views/Tips";
import Patterns from "./views/Patterns";
import Components from "./views/Components";
import Header from "./components/Header/Header";


function App() {
    return (
        <Router>
            <Header/>
        <div className={styles.app}>
            <div className="box">
                <Route path="/" exact component={Docs}/>
                <Route path="/Tips" exact component={Tips}/>
                <Route path="/Patterns" exact component={Patterns}/>
                <Route path="/Components" exact component={Components}/>
            </div>
            <div className={styles.box}>
                <ItemsList/>
            </div>
        </div>
        </Router>
    );
}

export default App;
