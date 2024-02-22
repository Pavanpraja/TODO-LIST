import React from 'react'

const ReturnText = ({curEle, id, onSelect, Onmousedown, Onmouseup, shadow}) => {
    
    return(
        <div className="listwithbtn">
        <button onClick={()=>onSelect(id)} onMouseDown={Onmousedown} onMouseUp={Onmouseup} style={{boxShadow: shadow}}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply"/></button>
            <li>{curEle}</li>
        </div>
    )
}

export default ReturnText
