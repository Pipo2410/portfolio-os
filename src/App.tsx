import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Dock, Navbar, Welcome } from '#components'
import { Resume, Safari, Terminal } from '#windows'

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Safari />
      <Terminal />
      <Resume />
    </main>
  )
}

export default App
