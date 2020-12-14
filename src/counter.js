import React from "react";

export class Button extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentValue: 0
    //     };
    // }

    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.startvalue
        };
    }
    render() {
        const handlerClick = () => {
            this.setState({ currentValue: this.state.currentValue + 100 });
        };
        return <button onClick={handlerClick}>{this.state.currentValue}</button>;
    }
}