 
 import './NumberChart.css';

 const NumberChart =(props)=>{
    return(
       <div className='center'>
           <div className="text">{props.value}</div>
           <div className="helper-text">{props.percentValue}</div>
       </div> 
    )
}

export default NumberChart;