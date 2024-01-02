import {toast} from 'react-toastify';

const SingleColor=({color,index})=>{
    // Object Destructuring
    const {hex,weight}=color;
    const saveToClipboard=async()=>{
    if (navigator.clipboard){
    try{
    await navigator.clipboard.writeText(`#${hex}`)
    toast.success('Color copied to the Clipboard')  
    } catch{
    toast.error('Failed to Copy to the Clipboard')    
    }
        
    }
    else{
        toast.error('Clipboard not Found')
    }
    }
    return(
    // Using the Ternary Operator to set the className Dynamically
    <article className={index > 10 ? 'color color-light': 'color'} style={{background:`#${hex}`}}
    onClick={saveToClipboard}
    >
    <p className="percent-value">{weight} %</p>
    <p className="percent-value">#{hex} %</p>
    </article>
    )
}

export default SingleColor;