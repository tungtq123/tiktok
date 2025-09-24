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
// 3. Cleanup function luon duoc goi truoc khi callback duoc goi (tru lan mounted)

const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content () {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {

        const handleComment = (e) => {
            console.log(e);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)
    
        // Cleanup func
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 
                                'red' :
                                '#333',
                            cursor: 'pointer'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content