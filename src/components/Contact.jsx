import { styles } from '../styles';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(
      'service_ek9a29r',
      'template_uc4pdnk',
      form.current,
      { publicKey: 'I3A7Lu_Sm11swn7gH' }
    )
      .then(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.log(error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  useEffect(() => {
    emailjs.init('I3A7Lu_Sm11swn7gH');
  }, []);

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-jet p-8 rounded-2xl shadow-xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <form ref={form} onSubmit={sendEmail} className="mt-10 flex flex-col gap-6 font-poppins">
          <div className="flex flex-col">
            <label className="text-timberWolf font-medium mb-4">Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={`bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border font-medium transition-all duration-300 focus:border-timberWolf`} />
          </div>
          <div className="flex flex-col">
            <label className="text-timberWolf font-medium mb-4">Your Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={`bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border font-medium transition-all duration-300 focus:border-timberWolf`} />
          </div>
          <div className="flex flex-col">
            <label className="text-timberWolf font-medium mb-4">Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message here..." className={`bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border font-medium resize-none transition-all duration-300 focus:border-timberWolf`} />
          </div>
          <motion.button type="submit" disabled={isSubmitting} whileTap={{ scale: 0.95 }} className={`live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[150px] sm:h-[50px] w-[120px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out ${isSubmitting ? 'opacity-70 cursor-wait' : ''} mt-4 self-start`} onMouseOver={() => { const btn = document.querySelector('.contact-btn'); if (btn) btn.setAttribute('src', sendHover); }} onMouseOut={() => { const btn = document.querySelector('.contact-btn'); if (btn) btn.setAttribute('src', send); }}>
            <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
            <img src={send} alt="" className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain" />
          </motion.button>
          {submitStatus === 'success' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">Your message has been sent successfully!</motion.div>}
          {submitStatus === 'error' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-center">Failed to send message. Please try again later.</motion.div>}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
