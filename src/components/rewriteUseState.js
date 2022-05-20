import React, {useState} from 'react'

function RewriteUseState(){
    let [name, setName] = useState('')
    let [perName, setPerName] = useState('')

    function setPerNameFunction(_newName){
        setPerName(perName = _newName)
    }

    function changeName(){
        setName(name = perName)
    }

    return(
        <div>
            <div className='CounterBlock'>
                <p>
                    текущее имя: {name}
                </p>
                <button onClick={changeName}>
                    change
                </button>
                <input  onChange={event => setPerNameFunction(event.target.value)}/>
            </div>
        </div>
    )
}
export default RewriteUseState;