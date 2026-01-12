import Posts from "@/component/Posts";
import { getPosts } from "@/lib/graphql/queries";
import ExchangeRate from "@/component/ExchangeRate";
import { getExchangeRate } from "@/lib/rest/exchange-rate";
import { getStoreCurrency } from "@/lib/rest/edd-settings";
import StoreCurrency from "@/component/StoreCurrency";
import NameForm from "@/component/NameForm";



export default async function Home() {
  const posts = await getPosts();
  const exchangeRate = await getExchangeRate;
  const storeCurrency = await getStoreCurrency();

  console.log(posts);
  return (
    <main className="p-6">
      <Posts posts={posts} />
      <ExchangeRate exchangeRate={exchangeRate} />
      <StoreCurrency currencyData={storeCurrency}/>
      <NameForm />
    </main>
  );
}
