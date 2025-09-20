import { useState } from 'react'


// Ex 1:
// function App() {

// const [take, setTake] = useState('Chưa lấy phần thưởng')

// const gifts = [
//   "CPU 19",
//   "RAM 32GB RGB",
//   "RGB Keyboard"
// ]

// function takeGift () {
//   setTake(gifts[Math.floor(Math.random() * 3)])
// }

// return(
//   <div style={{padding: 32}}>
//     <h1>{take}</h1>
//     <button onClick={takeGift}>Lấy phần thưởng</button>
//   </div>
// )
// }

// Ex 2: (Two way binding)
// function App() {
//   const [name, setName] = useState('')

//   console.log(name);
  

//   return(
//     <div style={{padding: 32}}>
//       <input 
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => setName('Nguyen Van BBB')}>Change</button>
//     </div>
//   )
// }

// Ex 3:
// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = () => {
//     // CALL API
//     console.log({
//       name, 
//       email
//     })
//   }

//   return(
//     <div style={{padding: 32}}>
//       <input 
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input 
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

// Ex 4:

// Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {
//   const [checked, setChecked] = useState(2)

//   const handleSubmit = () => {
//       console.log({id: checked})
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="radio"
//             checked={checked == course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}   

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
  const [checked, setChecked] = useState([])
  console.log(checked)
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        // Uncheck
        return checked.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      } 
    })
  }

  const handleSubmit = () => {
      console.log({id: checked})
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}   

      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default App;
