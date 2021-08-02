
import commerce from "../lib/commerce";

export async function getStaticProps() {


  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <>
      <pre>{JSON.stringify(merchant, null, 2)}</pre>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </>
  );
}