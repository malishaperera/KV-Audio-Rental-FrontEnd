import ProductCard from "./components/products";

function App() {
  return (
    <>
      <ProductCard
        photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEKk1DaaAsuqNnnM9yrZ_6OK6I7CiM1EFEg&s"
        name="JBL Audio MINI 3"
        price={40.8}
        description="A compact and portable audio speaker with superior sound quality."
      />

      <ProductCard
        photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEKk1DaaAsuqNnnM9yrZ_6OK6I7CiM1EFEg&s"
        name="JBL Audio MINI 3"
        price={40.8}
        description="A compact and portable audio speaker with superior sound quality."
      />
    </>
  );
}

export default App;
