import React, { useState } from 'react'
var additionNum: number = 0;

export default function Addition() {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()

    function inputHandler1(e: any) {
        setNum1(e.target.value)
        console.log(num1);
    }
    
    function inputHandler2(e: any) {
        setNum2(e.target.value)
        console.log(num2);
    }

    function AddNum(e: any) {
        e.preventDefault()
        additionNum = Number(num1) + Number(num2)
    console.log(additionNum);
    
    }
    return (
        <div>
            <form action="" >
                <input type="text" id='num1' onChange={inputHandler1} />
                <input type="text" id='num2' onChange={inputHandler2} />
                <button onClick={AddNum}>Add</button>
            </form>
            {additionNum}
        </div>
    )
}

