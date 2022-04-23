import ContactCard from './ContactCard';

const ContactContainer = () => {
  return (
    <section className='container flex flex-wrap items-center justify-around'>
      <ContactCard src={'/icons/email.svg'} cardColor={'bg-slate-500'} />
      <ContactCard src={'/icons/linkedin.svg'} cardColor={'bg-slate-600'} />
      <ContactCard src={'/icons/github.svg'} cardColor={'bg-slate-700'} />
      <ContactCard src={'/icons/resume.svg'} cardColor={'bg-slate-800'} />
    </section>
  );
};

export default ContactContainer;
