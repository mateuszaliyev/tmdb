import { Header } from "@/components/header";

import type { Locale } from "@/locales";

type HomeProps = {
  params: {
    locale: Locale;
  };
  searchParams: {
    query?: string;
  };
};

const Home = ({ params: { locale }, searchParams: { query } }: HomeProps) => (
  <>
    <Header locale={locale} query={query} />
  </>
);

export default Home;
