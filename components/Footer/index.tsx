import React from 'react';

const styles = {
  position: 'fixed bottom-0 left-0 right-0 z-[999]',
  height: 'h-[5vh]',
  flex: 'flex items-center',
  bgColor: 'bg-slate-900',
  txtColor: 'text-slate-50',
};

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer
      className={`${styles.position} ${styles.height} ${styles.flex} ${styles.bgColor} ${styles.txtColor}`}
    >
      Robert Adams
    </footer>
  );
};

export default Footer;
