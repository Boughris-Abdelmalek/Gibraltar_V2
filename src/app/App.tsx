import React from "react";
import Header from "../components/Header/Header";

const App: React.FC = () => {
  const [products, setProducts] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
    const data = await response.json();

    setProducts(data);
  }

  React.useEffect(() => {
    fetchData();
  }, [])
  
  console.log(products);
  return (
    <div>
      <Header />
      App
    </div>
  );
};

export default App;
