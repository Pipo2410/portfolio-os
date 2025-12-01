import { WindowControls } from '#components'
import { socials } from '#constants'
import { WindowWrapper } from '#hoc/WindowWrapper'

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='contact' />
        <h2>Contact Me</h2>
      </div>
      <div className='p-5 space-y-5'>
        <img src='/images/Peter.jpg' alt='Peter' className='rounded' />

        <h3>Let's Connect</h3>
        <p>Got an idea? Or just want to talk tech? I'm here to help.</p>
        <p>ps.peterstrelec@gmail.com</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <img src={icon} alt={text} className='size-5' />
                <p className='text-sm'>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export { ContactWindow as Contact }
