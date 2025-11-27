import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <img src='/images/logo.svg' alt='logo' />
        <p className='font-bold'>Peter's portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id} className=''>
              <p>{name}</p>
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
