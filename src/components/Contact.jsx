import { styles } from '../styles';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { useState, useRef } from 'react';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className={`fixed top-24 right-8 z-50 p-4 rounded-lg shadow-lg max-w-md ${type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {type === 'success'
            ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          }
        </div>
        <div className="ml-3">
          <p className="font-medium">{message}</p>
        </div>
        <button onClick={onClose} className="ml-auto -mx-1.5 -my-1.5 bg-white/20 text-white rounded-lg p-1.5 hover:bg-white/30 focus:ring-2 focus:ring-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    user_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!form.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    emailjs.sendForm(
      'service_7wnt82i',
      'template_02np6ua',
      formRef.current,
      { publicKey: 'JctaAMtidcUuTbxT8' }
    )
      .then(
        () => {
          setLoading(false);
          setNotification({
            type: 'success',
            message: 'Thank you. I will get back to you as soon as possible.'
          });

          setForm({
            name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          setNotification({
            type: 'error',
            message: 'Something went wrong. Please try again.'
          });
        }
      );
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* {notification && <Notification type={notification.type} message={notification.message} onClose={closeNotification} />} */}
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-jet p-8 rounded-2xl shadow-xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 font-poppins">
          <div className="flex flex-col">
            <label className="text-timberWolf font-medium mb-4">Your Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className={`bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-2 ${formErrors.name ? 'border-red-500' : 'border-transparent'} font-medium transition-all duration-300 focus:border-timberWolf`} />
            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-timberWolf font-medium mb-4">Your Email</label>
            <input type="email" name="user_email" value={form.user_email} onChange={handleChange} placeholder="Email" className={`bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-2 ${formErrors.user_email ? 'border-red-500' : 'border-transparent'} font-medium transition-all duration-300 focus:border-timberWolf`} />
            {formErrors.user_email && <p className="text-red-500 text-sm mt-1">{formErrors.user_email}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-timberWolf font-medium mb-4">Your Message</label>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="Your message here..." className={`bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-2 ${formErrors.message ? 'border-red-500' : 'border-transparent'} font-medium resize-none transition-all duration-300 focus:border-timberWolf`} />
            {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
          </div>
          <motion.button type="submit" whileTap={{ scale: 0.95 }} className={`live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[150px] sm:h-[50px] w-[120px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out ${loading ? 'opacity-70 cursor-wait' : ''} mt-4 self-start`} disabled={loading} onMouseOver={() => { const btn = document.querySelector('.contact-btn'); if (btn) btn.setAttribute('src', sendHover); }} onMouseOut={() => { const btn = document.querySelector('.contact-btn'); if (btn) btn.setAttribute('src', send); }}>
            <span>{loading ? 'Sending...' : 'Send'}</span>
            <img src={send} alt="" className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
