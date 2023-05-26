import Btn from "../btn";

function Todo ({arr}){
    return(
        <div>
            {
              Array.isArray(arr) && 0 < arr.length ? arr.map((e,i)=>{
                    return(
                        <div className={e.classCrossed} key={"product"+i}>
                            <p>{e.name}</p>
                            <div>
                                <Btn value="✍️ - редагувати" className="btn" eventFN={e.edit} id={i}/>
                                <Btn value="✅ - куплено" className="btn" eventFN={e.done} id={i}/>
                                <Btn value="❌ - видалити" className="btn" eventFN={e.remove} id={i}/>
                            </div>
                        </div>
                    )
                }):  <div className={'product'} key={"product"}>
               </div>
            }
        </div>
    )
}

export default Todo;

