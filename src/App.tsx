import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Dock, Navbar, Welcome } from '#components'
import { Finder, Image, Resume, Safari, Terminal, Text } from '#windows'

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
      <Text />
      <Image />
      <Finder />
    </main>
  )
}

export default App
