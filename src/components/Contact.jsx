import { styles } from '../styles';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    user_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_7wnt82i', 'template_02np6ua', formRef.current, { publicKey: 'JctaAMtidcUuTbxT8' })
      // .send(
      //   'service_7wnt82i',
      //   'template_02np6ua',
      //   //formRef.current,
      //   {
      //     from_name: form.name,
      //     to_name: 'Divy',
      //     from_email: form.email,
      //     to_email: 'divy.parikh@hotmail.com',
      //     message: form.message,
      //   },
      //   { publicKey: 'JctaAMtidcUuTbxT8' }
      // )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input type="email" name="user_email" value={form.user_email} onChange={(e) => setForm({ ...form, user_email: e.target.value })} placeholder="Email" className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message here..."
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => { document.querySelector('.contact-btn').setAttribute('src', sendHover); }}
            onMouseOut={() => { document.querySelector('.contact-btn').setAttribute('src', send); }}
          >{loading ? 'Sending' : 'Send'}
            <img src={send} alt="" className="contact-btn sm:w-[26px] sm:h-[26px]  w-[23px] h-[23px] object-contain" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
