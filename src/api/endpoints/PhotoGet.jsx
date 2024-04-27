import React from 'react';
import { json } from 'stream/consumers';

export default function PhotoGet(){
    const [id, setId] = React.useState('');

    function handleSubmit(event){
        event.preventDefault;
        fetch('https://dogsapi.origamid.dev/json/api/photo').then(response => {
            console.log(response);
            return response.json()
        }).then(json);
        return json
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={id} onChange={({target}) => setId(target.value)} />
            <button>Enviar</button>
        </form>
    )
}