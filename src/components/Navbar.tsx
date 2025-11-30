import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'

export const Navbar = () => {
  const { windows, openWindow, closeWindow } = useWindowStore()

  const toggleApp = (app: { id: string; canOpen: boolean }) => {
    if (!app.canOpen) return
    const window = windows[app.id]

    if (!window) {
      console.error(`Window not found for app: ${app.id}`)
      return
    }
    if (window.isOpen) {
      closeWindow(app.id)
    } else {
      openWindow(app.id)
    }
  }
  return (
    <nav>
      <div>
        <img src='/images/logo.svg' alt='logo' />
        <p className='font-bold'>Peter's portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p onClick={() => toggleApp({ id: type, canOpen: true })}>
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format('dddd MMM D h:mm A')}</time>
      </div>
    </nav>
  )
}
