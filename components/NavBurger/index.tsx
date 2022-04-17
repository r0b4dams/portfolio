type MenuProps = {
  active: boolean;
  toggleActive: () => void;
};

const styles = {
  active: {
    top: 'rotate-45 translate-y-[9px]',
    mid: 'opacity-0',
    bot: '-rotate-45 translate-y-[-9px]',
  },
  bar: 'w-[36px] h-[3px] transition duration-500 bg-slate-50',
  burger: 'space-y-[6px] cursor-pointer z-[999]',
};

const NavBurger: React.FC<MenuProps> = ({ active, toggleActive }) => {
  return (
    <div id='nav-burger' className={styles.burger} onClick={toggleActive}>
      <div
        id='bar-top'
        className={active ? `${styles.bar} ${styles.active.top}` : styles.bar}
      ></div>
      <div
        id='bar-mid'
        className={active ? `${styles.bar} ${styles.active.mid}` : styles.bar}
      ></div>
      <div
        id='bar-bot'
        className={active ? `${styles.bar} ${styles.active.bot}` : styles.bar}
      ></div>
    </div>
  );
};

export default NavBurger;
