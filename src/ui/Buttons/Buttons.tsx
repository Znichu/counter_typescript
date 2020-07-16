import React from "react";

type Props = {
    increment: () => void
    decrement: () => void
    reset: () => void
}

export function Buttons(props: Props) {
    let { increment, decrement, reset } = props;

    return (
        <>
            <button onClick={ increment }>increment</button>
            <button onClick={ decrement }>decrement</button>
            <button onClick={ reset } >reset</button>
        </>
    )

}