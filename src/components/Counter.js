import React, {useState} from 'react'

function Counter() {

    const [likes, setLikes] = useState(0)

    function increment(){
        setLikes(likes + 1)
    }
    
    function decrement(){
        setLikes(likes - 1)
    }

    return(
    <div>
        <div className='CounterBlock'>
            <p>
                {likes}
            </p>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    </div>
    )
}

export default Counter