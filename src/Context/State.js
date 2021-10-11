import React,{useState} from 'react'
import Context from './Context'
import data from '../Data/data.js';


const State = (props) => {
    const [ info , setInfo]=useState(data);
    const [annotation,setAnnotation] = useState("6163020e7d3434c9f4d955da");
    const [label,setLabel] = useState('category 1')

    const annotationHandler=(id)=>{
        setAnnotation(id);
    }

    const labelHandler=(value)=>{
        setLabel(value);
    }
    return (
        <Context.Provider value={{info , annotation , annotationHandler , label , labelHandler}}>
            {props.children}
        </Context.Provider>
    )
}

export default State
