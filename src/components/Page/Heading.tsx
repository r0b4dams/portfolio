interface IProps {
  children: React.ReactNode;
}

export const Heading: React.FC<IProps> = ({ children }) => {
  return <h1 className='font-bold my-5 text-3xl sm:text-5xl md:text-7xl'>{children}</h1>;
};
