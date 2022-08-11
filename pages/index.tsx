import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import ProductList from "../components/ProuctList";

const GET_PRODUCTS = gql`
  query {
    getAllProducts {
      data {
        _id
        name
        description
        price
        imageUrl
        shop {
          _id
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  const { loading, data } = useQuery(GET_PRODUCTS);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {loading ? <p>Loading...</p> : <ProductList products={data?.getAllProducts.data}/>}
    </div>
  );
};

export default Home;
