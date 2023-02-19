import { useContext, useRef, useState } from 'react'
import LangContext from '../context/LangContext'
import { FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
/* const regex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
 */
const ContactMe = () => {
  const [sended, setSended] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, 'Contactme_form', form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
      .then((result) => {
        console.log(result.text)
        e.target.reset()
        setSended(true)
        setTimeout(() => setSended(false), 5000)
      }, (error) => {
        console.log(error.text)
      })
  }

  const { translations } = useContext(LangContext)
  return (
    <section className='contactme__section'>
      <h2>{translations.contactme.contactTitle}</h2>
      <div className='container'>
        <form ref={form} onSubmit={sendEmail} className='contactme__form'>
          <input
            className='contactme__form--input-text'
            type='email'
            name='user_email'
            placeholder={translations.contactme.inputText.mailField}
            required
          />
          <input
            className='contactme__form--input-text'
            type='text'
            name='subject'
            placeholder={translations.contactme.inputText.subjectField}
            required
          />
          <textarea
            className='contactme__form--message-input'
            name='message'
            rows='10'
            placeholder={translations.contactme.inputText.messageField}
            required
          />
          <button className='contactme__form--send-button' id={sended ? 'sendedButton' : ''} type='submit'><FiSend /> {!sended ? translations.contactme.sendButtonText : translations.contactme.sendedButtonText}</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
