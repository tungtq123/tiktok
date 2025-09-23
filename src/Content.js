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

// const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']


// Ex 1: Scroll
// function Content() {
//     const [type, setType] = useState('posts')
//     const [posts, setPosts] = useState([])
//     const [showGoToTop, setShowGoToTop] = useState(false)
    
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//         .then(res => res.json())
//         .then(posts => (
//             setPosts(posts)
//         ))
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             if(window.scrollY >= 200) {
//                 //Show
//                 setShowGoToTop(true)
//             }
//             else {
//                 //Hide
//                 setShowGoToTop(false)
//             }

//             // setShowGoToTop(window.scrollY >= 200)
//         }
//         window.addEventListener('scroll', handleScroll)

//         // Cleanup function 
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return(
//        <div>
//             {tabs.map((tab) => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333',
//                     }: {}}
//                     onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20
//                     }}
//                 >
//                     Go To Top
//                 </button>
//             )}
//        </div>
//     )
// }



// Ex 2: Resize
function Content () {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup func
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content