import React, {useState} from "react";



export default function Counter (){


    const [count, setCount] = useState<number>(0);


    function increase() {
        setCount(count + 1)
    }


    return (
        <div>
            <button onClick={increase}>Klick</button>
            Zähler:{count}
        </div>

    );

}
