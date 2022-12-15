import { useState } from 'react'

function App() {
  const [weight, setWeight] = useState()
  const [run, setRun] = useState()
  const [savings, setSavings] = useState()
  const [books, setBooks] = useState()

  const [finish, setFinish] = useState()

  var config = require('./config.json');

  return (
    <div className="min-h-screen flex flex-col bg-cyan-800">
      <h1 className="font-['MicrogrammaDBolExt'] text-center text-6xl">75 HARD</h1>
      <h2 className="font-['MicrogrammaDBolExt'] text-gray-700 text-center text-xl">WHO'S GONNA CARRY THE BOATS</h2>
      <h2 className="font-['MicrogrammaDBolExt'] text-gray-900 text-center text-md">{`DAYS LEFT - ${days}`}</h2>
      
      <main className="w-5/6 flex-1 self-center">
        <h2 className="font-['MicrogrammaDBolExt'] text-black text-left text-md">LOSE 7.5KG</h2>
        
        <div className="w-full my-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${(weight.current/weight.goal) * 100}%`}}/>
        </div>

        <button>

        </button>
      </main>
    </div>
  );
}

export default App;
