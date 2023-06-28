import {useEffect, useState} from "react";

const Test = () => {
    const [state, setState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setState(1)
        }, 3000)
        clearTimeout(timer)
    }, [])

    return <Test className={ `test ` + state === 1? 0:1}>Test</Test>
}