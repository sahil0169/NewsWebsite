import React from "react"

export default function Side(props) {

    function Bar() { 
        return (
            <div className="Side4">
                <div className="Side3">
            <h3 onClick={()=>props.toggle("category","general")}>General</h3>
            <h3 onClick={()=>props.toggle("category","entertainment")}>Entertainment</h3>
            <h3 onClick={()=>props.toggle("category","business")}>Business</h3>
            <h3 onClick={()=>props.toggle("category","health")}>Health</h3>
            <h3 onClick={()=>props.toggle("category","sports")}>Sports</h3>
            <h3 onClick={()=>props.toggle("category","technology")}>Technology</h3>
            <h3 onClick={()=>props.toggle("category","science")}>Science</h3>
          
        </div>
            </div>
            
        )
    }
    const [count, setCount] = React.useState(false)
    return (

        <div className="Side1">
            <button className="Side2" onClick={()=>setCount(prevCount=>!prevCount)}>MENU</button>
            { count==true && Bar()}    
        </div>
    )
}
