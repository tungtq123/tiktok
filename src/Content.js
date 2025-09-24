import { memo } from "react"

function Content ({ count }) {
    console.log('Re-render');
    
    return (
        <div>
            <h1>Hello Guys! {count}</h1>
        </div>
    )
}

export default memo(Content)