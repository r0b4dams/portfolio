interface IProps {
  [key: string]: any;
}

export const ToggleDarkMode: React.FC<IProps> = (props) => {
  const toggle = () => {
    const html = document.querySelector("html");
    const active = html?.classList.contains("dark");
    if (active) {
      html?.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  };

  return (
    <button className="mb-2" onClick={toggle}>
      mode
    </button>
  );
};
