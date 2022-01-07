import { useState, useReducer } from "react";
import CryptoES from 'crypto-es';

const inicialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'SAFE':
            return (console.log(action.item),
                [...state, action.item]); //retorna um array q é a concatenação atual do array (state) com o novo q está chegando
        case 'DANGER':
            return (console.log(action.item),
            [...state, action.item]);
        case 'DRAG':
            return state.map(item => {
                if (item.id === action.id) {
                    return { ...item, coordenada: action.coordinate };
                } else {
                    return item;
                }
            });
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
                icon: 'check',
                zone: 'SAFE',
                coordenada: coordinate,
                color: "rgba(181, 234, 181, 0.47)",
                border: 'green',
                radius: 200,
                info:{
                    titulo: 'Lugar Seguro',
                    desc: 'Aqui você está seguro!'
                }
            },
        });
    };

    const danger = (coordinate) => {
        dispatch({
            type: 'DANGER',
            item: {
                id: CryptoES.SHA256(Math.random().toFixed(4).toString()).toString(),
                icon: 'exclamation-triangle',
                zone: 'DANGER',
                coordenada: coordinate,
                color: "rgba(209, 0, 0, 0.27)",
                border: 'red',
                radius: 200,
                info:{
                    titulo: 'Lugar Perigoso',
                    desc: 'Aqui você NÃO está seguro!'
                }
            },
        });
    };
    
    const drag = (id, coordinate) => {
        dispatch({
            type: 'DRAG',
            id: id,
            coordinate: coordinate
        });
    };
    return [state, safe, danger, drag];

};

export default useZonesMap;

