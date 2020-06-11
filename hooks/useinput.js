import { useState, useCallback } from 'react';

// Custom hook
export default (initialValue = null)=>{

    // id
    const [value,setValue] = useState(initialValue);

    // onChangeId 
    const handler = useCallback((e)=>{
        setValue(e.target.value);
    },[]);

    return [value,handler];
}