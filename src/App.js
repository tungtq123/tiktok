import { useState } from 'react'


function App() {
  const [info, setInfo] = useState({
    name: 'TQT',
    age: 21,
    address: 'HD - HN'
  })

  function updateInfo() {
   setInfo(
    {
      ...info,
      bio: 'single'
    }
   )
  }


  return(
    <div id='root'>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={updateInfo}>
        Update
      </button>
    </div>
  )

}

export default App;
