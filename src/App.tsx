import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {RootState} from "./bll/store";
import {getCounterValue, setDecrementCounter, setIncrementCounter, setResetCounter} from "./bll/counter_reducer";
import {Counter} from "./ui/Counter/Counter";

type MapStateProps = {
  counter: number
}
type MapDispatchProps = {
    setIncrementCounter: (value: number) => void
    setDecrementCounter: (value: number) => void
    setResetCounter: (value: number) => void
    getCounterValue: () => void
}
type Props = MapStateProps & MapDispatchProps

class App extends React.Component<Props> {

    componentDidMount(): void {
        this.props.getCounterValue();
    }

    render() {

        let { counter, setIncrementCounter, setDecrementCounter, getCounterValue, setResetCounter } = this.props;

        return (
            <div className="App">
                <Counter setIncrementCounter={ setIncrementCounter }
                         setDecrementCounter={ setDecrementCounter }
                         getCounterValue={ getCounterValue }
                         setResetCounter={ setResetCounter }
                         counter={ counter }/>
            </div>
        );
    }
}

let mapStateToProps = (state: RootState) => ({
  counter: state.counter.value
})

export default connect(mapStateToProps, {getCounterValue, setIncrementCounter, setDecrementCounter, setResetCounter}) (App);
