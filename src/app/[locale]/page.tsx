import type { Locale } from "@/locales";

type HomeProps = {
  params: {
    locale: Locale;
  };
};

const Home = ({ params: { locale } }: HomeProps) => <main>Hello {locale}</main>;

export default Home;
