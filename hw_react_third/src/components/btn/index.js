function Btn({value, className='', eventFN,id =''}){
    return(
        <button className={className} onClick={()=>{eventFN(id)}} type="button">{value}</button>
    )
}

export default Btn;


