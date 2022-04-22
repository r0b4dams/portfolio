import Link from 'next/link';

type MenuProps = {
  active: boolean;
  toggleActive: () => void;
};

const styles = {
  anchor: 'text-slate-50',
  overlay: 'fixed top-0 w-full z-10 overflow-hidden bg-slate-900',
  transition: 'transition-all duration-500',
  flex: 'flex flex-col justify-center items-center',
  hide: 'h-0',
  show: 'h-full',
};

const base = `${styles.overlay} ${styles.flex} ${styles.transition}`;

const NavOverlay: React.FC<MenuProps> = ({ active, toggleActive }) => {
  return (
    <nav
      id='nav-overlay'
      className={active ? `${base} ${styles.show}` : `${base} ${styles.hide}`}
    >
      <Link href='/portfolio'>
        <a onClick={toggleActive} className={styles.anchor}>
          Portfolio
        </a>
      </Link>
      <Link href='/about'>
        <a onClick={toggleActive} className={styles.anchor}>
          About
        </a>
      </Link>
      <Link href='/contact'>
        <a onClick={toggleActive} className={styles.anchor}>
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default NavOverlay;
