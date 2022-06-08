import { useSprings, animated } from 'react-spring';

type MenuProps = {
  active: boolean;
  handleToggle: () => void;
};

const items = [
  { name: 'top', opacity: 1, y: 9, rotate: 45 },
  { name: 'mid', opacity: 0, y: 0, rotate: 0 },
  { name: 'bot', opacity: 1, y: -9, rotate: -45 },
];

const NavBurger: React.FC<MenuProps> = ({ active, handleToggle }) => {
  const bars = useSprings(
    items.length,
    items.map((item) => ({
      to: {
        y: active ? item.y : 0,
        rotate: active ? item.rotate : 0,
        opacity: active ? item.opacity : 1,
      },
    }))
  );

  return (
    <button
      id='nav-burger'
      type='button'
      className='space-y-[6px] cursor-pointer z-[999] md:hidden'
      onClick={handleToggle}
    >
      {bars.map((style, idx) => (
        <animated.div
          key={items[idx].name}
          style={style}
          className='w-[36px] h-[3px] bg-black'
        />
      ))}
    </button>
  );
};

export default NavBurger;
