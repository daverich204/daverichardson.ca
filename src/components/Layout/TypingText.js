import React from 'react';
import Typist from 'react-typist';
import hash from "hash-it";


export default function TypingText({children, delay=null, ...other}) {

    return (
        <Typist key={hash(children)} {...other}>
            {children}
        </Typist>
    );
} 