interface IProps {
  children: React.ReactNode;
}

export const Body: React.FC<IProps> = ({ children }) => {
  return <div className='w-full md:flex grow'>{children}</div>;
};
