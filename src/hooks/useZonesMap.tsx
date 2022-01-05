import { useReducer } from "react";
import CryptoES from 'crypto-es';

const inicialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'SAFE':
            return [...state, action.item]; //retorna um array q é a concatenação atual do array (state) com o novo q está chegando
        case 'DANGER':
            return [...state, action.item];
        default:
            return state;
    }
};

const useZonesMap = () => {
    const [state, dispatch] = useReducer(reducer, inicialState);

    const safe = (coordinate) => {
        dispatch({
            type: 'SAFE',
            item: {
                id: CryptoES.SHA256(Math.random().toFixed(3).toString()).toString(),
                nome: 'check',
                zone: 'SAFE',
                coordenada: coordinate,
                color: "rgba(181, 234, 181, 0.47)",
                border: 'green',
                radius: 35000
            },
        });
    };

    const danger = (coordinate) => {
        dispatch({
            type: 'DANGER',
            item: {
                id: CryptoES.SHA256(Math.random().toFixed(4).toString()).toString(),
                nome: 'exclamation-triangle',
                zone: 'DANGER',
                coordenada: coordinate,
                color: "rgba(209, 0, 0, 0.27)",
                border: 'red',
                radius: 35000
            },
        });
    };

    return [state, safe, danger];

};

export default useZonesMap;

