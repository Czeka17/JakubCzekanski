import { useState,ChangeEvent,FormEvent } from 'react';
import styles from './contact.module.scss'
import emailjs from '@emailjs/browser';
import Modal from './Modal';
import { CSSTransition } from 'react-transition-group';
interface FormData {
    name: string;
    email: string;
    message: string;
  }
function Contact(){
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
      });
      const [title,setTitle] = useState('')
      const [message,setMessage] = useState('')
      const [showModal, setShowModal] = useState(false);
      const [isLoading, setIsLoading] = useState(false)
      function hideModalHandler(){
        setShowModal(false)
      }
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault();
        emailjs.init(`${process.env.NEXT_PUBLIC_EMAIL_KEY}`);
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          };
          if(formData.name === '' || formData.email === '' || !formData.email.includes("@") || formData.message === '' ){
            setTitle("Error!")
            setMessage("Invalid inputs")
            setShowModal(true)
                setIsLoading(false)
          }
          else{
        try {
            emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_KEY}`, `${process.env.NEXT_PUBLIC_TEMPLATE_KEY}`, templateParams)
            .then((response) => {
                setTitle('Success!')
                setMessage('Email has been sent!')
                setShowModal(true)
                setIsLoading(false)
                setFormData({name: '',
                email: '',
                message: ''})
              })
              .catch((error) => {
                setTitle('Oops...')
                setMessage('Something went wrong. please try again later.')
                setShowModal(true)
                setIsLoading(false)
                setFormData({name: '',
                email: '',
                message: ''})
              });
        
        } catch (error) {
          console.error('Error:', error);
          setTitle('Oops...')
                setMessage('Something went wrong. please try again later.')
                setShowModal(false)
                setIsLoading(false)
                setFormData({name: '',
                email: '',
                message: ''})
        }
      }
      };
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    return <section className={styles.contact} id='contact'>
            <h2 className={styles.contact__title}>Contact</h2>
        <div className={styles.contact__box}>
        <p>
        Thank you for visiting! Feel free to reach out to me using the form
        below or by sending an email to <span>jczekanski123@gmail.com</span>.
      </p>
      <hr/>
            <form className={styles.contact__form} onSubmit={handleSubmit}>
            <div className={styles['contact__form-input']} >
            <input type='text' name='name' id='name' required value={formData.name} onChange={handleChange} />
            <span>Name</span>
            </div>
            <div className={styles['contact__form-input']}>
            <input type='text' name='email' id='email'required value={formData.email} onChange={handleChange}/>
            <span>Email</span>
            </div>
            <div className={styles['contact__form-textarea']}>
            <textarea rows={5} id='message' name='message' required value={formData.message} onChange={handleChange}></textarea>
            <span>Message</span>
            </div>
            <div className={styles['contact__form-button']}><button disabled={isLoading}>{isLoading ? 'Sending' : 'Submit'}</button></div>
            </form>
        </div>
        {showModal && <Modal closeModal={hideModalHandler} title={title} message={message} showModal={showModal} />}
    </section>
}
export default Contact;