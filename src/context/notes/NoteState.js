import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = {
        "name":"Vinay",
        "class":"10"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name":"Deshgani",
                "class":"10"
            });
        }, 1000);
    }
    return(
        <noteContext.Provider value = {{state:state,update:update}}>
            {props.children}
        </noteContext.Provider>
    ); 
    
}

export default NoteState;