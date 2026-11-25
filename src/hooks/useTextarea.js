import { useState } from "react";

export function useTextarea(initial){

    const [value, setValue]=useState(initial)

    const handleChange=(e)=>{
        setValue(e.target.value)
    }
      const setVal=(val)=>{
        setValue(val)
    }
    const reset=()=>{ setValue(initial)     }

    return {value, handleChange, setVal, reset}
}