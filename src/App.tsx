import { useState } from 'react'
import Split from 'react-split'
import CodeEditor from '../components/Editor'
import Preview from '../components/Preview'

function App() {
  const [code, setCode] = useState('// Kodunuzu buraya yazın')

  return (
    <Split
      className="flex w-full h-screen"
      direction="horizontal"
      sizes={[50, 50]}
      minSize={200}
      gutterSize={8}
    >
      <div className="p-4 overflow-auto bg-gray-100">
        <CodeEditor code={code} setCode={setCode} />
      </div>
      <div className="p-4 overflow-auto bg-white">
        <Preview code={code} />
      </div>
    </Split>
  )
}

export default App
