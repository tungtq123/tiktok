import { useEffect, useState } from "react"
// 1. useEffect(callback)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao dom
// 2. useEffect(callback, [])
// - Chi goi callback 1 lan sau khi component mounted
// 3. useEffect(callback, [deps])
// - Call back se duoc goi lai moi khi deps thay doi

//----------
// 1. Callback luon duoc goi sau khi component mounted
// 2. Cleanup function luon duoc goi khi component unmounted

function Content () {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timerId =  setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return(
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content