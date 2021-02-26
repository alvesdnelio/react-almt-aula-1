import React, { useRef, useEffect } from 'react';

function SampleUseRef() {

    const inputRef = useRef(null);

    const onButtonClick = (event) => {
        /** Retorna o elemento */
        console.log(inputRef.current)

        /** Retorna o valor */
        console.log(inputRef.current.value)

        inputRef.current.value = "Nélio Souza Alves"
        inputRef.current.focus();

        console.log(this);
    }

    return (
        <>
            <input ref={inputRef} type="text" disbaled="true"/>

            <button className="button-success" onClick={onButtonClick}>
                Adicionar
            </button>
        </>
    );
}

export default SampleUseRef;