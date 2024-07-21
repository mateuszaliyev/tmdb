import { Header } from "@/components/header";
import { TopRatedMediaSection } from "@/components/media/top-rated/section";

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
    <TopRatedMediaSection locale={locale} mediaType="movie" />
    <TopRatedMediaSection locale={locale} mediaType="tv" />
  </>
);

export default Home;
