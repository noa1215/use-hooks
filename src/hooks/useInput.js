import { useState } from "react";

export function useInput(initial){

    const [value, setValue]=useState(initial)

    const handleChange=(e)=>{
        setValue(e.target.value)
    }
      const setValuee=(newVal)=>{
        setValue(newVal)
    }
    const reset=()=>{ setValue(initial)     }

    return {value, handleChange, setValuee, reset}
}