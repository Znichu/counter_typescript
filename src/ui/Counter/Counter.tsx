import React from "react";
import {Buttons} from "../Buttons/Buttons";

type Props = {
    counter: number
    setIncrementCounter: (value: number) => void
    setDecrementCounter: (value: number) => void
    setResetCounter: (value: number) => void
    getCounterValue: () => void
}
type State = {
    counter: number
}

export class Counter extends React.Component<Props, State> {

    state: State = {
        counter: this.props.counter
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if (prevState.counter !== this.props.counter) {
            this.setState({counter: this.props.counter})
        }
    }
    render() {

        const increment = () => {
            this.setState((prevState) => ({counter: prevState.counter + 1}),
                () => {
                    this.props.setIncrementCounter(this.state.counter);
                });
        }
        const decrement = () => {
            this.setState((prevState) => ({counter: prevState.counter - 1}),
                () => {
                    this.props.setDecrementCounter(this.state.counter);
                });
        }
        const reset = () => {
            this.setState({counter: 0},
                () => {
                    this.props.setResetCounter(this.state.counter);
                });
        }

        return (
            <>
                <h1>{this.state.counter}</h1>
                <Buttons increment={increment}
                         decrement={decrement}
                         reset={reset}
                />
            </>
        )

    }
}


