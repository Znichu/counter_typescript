import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004',
});

export type ResponseCounterType = {
    value: number
}

export const counterAPI = {
    getValue() {
        return instance.get<ResponseCounterType>("/counter")
            .then(res => res.data)
    },
    increment(value: number) {
        return instance.put<ResponseCounterType>("/counter", {value})
            .then(res => res.data)
    },
    decrement(value: number) {
        return instance.put<ResponseCounterType>("/counter", {value})
            .then(res => res.data)
    },
    reset(value: number) {
        return instance.put<ResponseCounterType>("/counter", {value})
            .then(res => res.data)
    }
}