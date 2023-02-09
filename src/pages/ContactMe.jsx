import { useContext } from 'react'
import LangContext from '../context/LangContext'
import { FiSend } from 'react-icons/fi'

const ContactMe = () => {
  const { translations } = useContext(LangContext)
  return (
    <section className='contactme__section'>
      <h2>{translations.contactme.contactTitle}</h2>
      <div className='container'>
        <form action='/login' method='post' className='contactme__form'>
          <input
            className='contactme__form--input-text'
            type='email'
            name='Email'
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
            name='mesage'
            rows='10'
            placeholder={translations.contactme.inputText.messageField}
            required
          />
          <button className='contactme__form--send-button' type='submit'><FiSend /> {translations.contactme.sendButtonText}</button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
