import React,{useState,useEffect} from 'react'
import "../index.css";
const Advice = () => {
    const [advice,setAdvice] = useState();
    const [click,setClick] = useState(0);

    useEffect(()=>{
         fetch('https://api.adviceslip.com/advice')
         .then(res=>res.json())
         .then(data=>setAdvice(data.slip.advice));
    },[click])
  return (
    <div className='advice_app'>
        <div className='new-advice'>
              <p>{advice}</p>
               <button onClick={()=> setClick(click + 1)}>Give me a Advice</button>
        </div>        
    </div>
  )
}

export default Advice