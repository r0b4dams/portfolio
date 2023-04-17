import { animated, useTransition } from "@react-spring/web";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Props {
  page: JSX.Element;
}

export const DefaultLayout: React.FC<Props> = ({ page }) => {
  const pageTransition = useTransition(page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  return (
    <div className="h-screen flex flex-col">
      <Header />
      {pageTransition((style, animatedPage) => (
        <animated.main style={style} className="flex flex-col container grow px-5">
          {animatedPage}
        </animated.main>
      ))}
      <Footer />
    </div>
  );
};
