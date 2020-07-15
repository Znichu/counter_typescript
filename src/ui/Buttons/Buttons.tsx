import React from "react";

type Props = {
    setIncrementCounter: (value: number) => void
}

export function Button(props: Props) {

    return(
        <button>increment</button>
    )

}