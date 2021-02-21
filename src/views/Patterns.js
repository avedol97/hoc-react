import React from "react";

const MyComponent = props => (
    <div>
        <p>Heloo Krystian</p>
        {props.render('Krystian')}
    </div>
);

const Patterns = () => (
    <div>
    <h2 className="title is-3">Patterns</h2>
        <MyComponent render={
           (data) =>  <p>Hello {data} </p>
                }/>
    </div>
)

export default Patterns;
