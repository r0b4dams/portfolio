import Icon from './Icon';

const ContactCard: React.FC<{ src: string; cardColor: string }> = ({
  src,
  cardColor,
}) => {
  return (
    <div className={`h-[200px] w-[200px] rounded-md ${cardColor}`}>
      <div className='bg-slate-50 flex h-[75px] w-[75px] items-center justify-center rounded-full'>
        <a>
          <Icon src={src} className='flex' height={50} width={50} />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
