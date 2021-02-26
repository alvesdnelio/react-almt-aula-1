import React, { useState, useEffect } from 'react';

function CountDown(){
    const [countIncrement, setCountIncrement] = useState(0);
    const [countDecrement, setCountDecrement] = useState(0);

    useEffect(() => {
        // console.log('Componente sendo renderizado');
    });

    useEffect(() => {
        // console.log(`Contador atualizado (+1): ${countIncrement}`);
    }, [countIncrement]);

    useEffect(() => {
        // console.log(`Contador atualizado (-1): ${countDecrement}`);
    }, [countDecrement]);

    useEffect(() => {
        // console.log('Primeiro carregamento');
    }, []);

    return (
        <>
            <p>Contador Positivo: {countIncrement}</p>
            <p>Contador Negativo: {countDecrement}</p>
            <button onClick={() => setCountIncrement(countIncrement+1)}>
                Adicionar {countIncrement}
            </button>

            <button onClick={() => setCountDecrement(countDecrement-1)}>
                Remover {countDecrement}
            </button>

            <input type="text" onChange={() => console.log('Teste')} />
        </>
    );
}

/* 
 * Pode ser exportador o export antes da function exempo
 * export function CountDown() {}
 * A Chamada precisa content chaves, exemplo {CountDown}
**/
export default CountDown;