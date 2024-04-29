import React from "react";

export default function useForm(){
    const [value, setValue] = React.useState('');

    function onChange({target}){
        setValue(target.value);
    }

    return{value, setValue, onChange}

}