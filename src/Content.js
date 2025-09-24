import { useRef,useState } from "react"
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
// 3. Cleanup function luon duoc goi truoc khi callback duoc goi (tru lan mounted)

function Content () {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content