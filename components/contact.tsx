import { useState,ChangeEvent,FormEvent } from 'react';
import styles from './contact.module.scss'
import emailjs from '@emailjs/browser';
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
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.init(`${process.env.NEXT_PUBLIC_EMAIL_KEY}`);
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          };
        try {
            emailjs.send('service_yuorp79', 'template_jg8c5jv', templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response.text);       
              })
              .catch((error) => {
                
              });
        
        } catch (error) {
          console.error('Error:', error);
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
            <div className={styles['contact__form-button']}><button>Submit</button></div>
            </form>
        </div>
    </section>
}
export default Contact;