import React from 'react';

export function SimpleText (props) {
    return <p>{props.meuTexto}</p>;
}

export function Text (props) {
    return <p>Texto Completo: {props.meuTexto}</p>;
}

export function  TextWithChildren(props) {
    return <p>{props.children}</p>;
}