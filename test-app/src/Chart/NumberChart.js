 
 import './NumberChart.css';

 const NumberChart =(props)=>{
    return(
       <div className='center'>
           <strong>{props.value}</strong>
       </div> 
    )
}

export default NumberChart;