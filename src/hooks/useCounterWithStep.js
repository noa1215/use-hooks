import { useState } from "react";

export function useCounterWithStep(initial, step){

    const [value, setValue]=useState(initial)

    const inc=()=>{
        setValue(prev=>prev+step)
    }
      const dec=()=>{
        setValue(prev=>prev-step)
    }
    const reset=()=>{ setValue(initial)     }

    return {value, inc, dec, reset}
}