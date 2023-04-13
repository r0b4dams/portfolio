import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface IProps {
  page: React.ReactNode;
}

export const DefaultLayout: React.FC<IProps> = ({ page }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="container grow">{page}</main>
      <Footer />
    </div>
  );
};
