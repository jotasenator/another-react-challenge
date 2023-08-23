import "./App.css";
import { GenericItem } from "./components/item/GenericItem";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { YouMightAlsoLike } from "./components/youMightAlsoLike/YouMightAlsoLike";
import { OrderSummary } from "./components/orderSummary/OrderSummary";
import Parent from "./components/levelUpState/Parent";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div className="genericContainer-orderSummaryContainer">
        <div className="genericContainer">
          <GenericItem
            name={"My Christmas pack"}
            packDetails={["container", "Green, Small", "Blue"]}
            packInfo={[
              "Cardboard box",
              "Unisex Short Sleeve T-Shirt",
              "Basic bottle",
            ]}
            editRemove={true}
            remove={false}
            price={(71.2).toFixed(2)}
          />

          <GenericItem
            name={"Basic T-Shirt"}
            editRemove={false}
            remove={true}
            price={(13.5).toFixed(2)}
          />

          <GenericItem
            name={"Woman bottle"}
            editRemove={false}
            remove={true}
            price={(36.5).toFixed(2)}
          />
        </div>
        <div className="orderSummaryContainer">
          <OrderSummary />
        </div>
      </div>
      <div>
        <h2 className="youMightAlsoTitle">You Might Also Like</h2>
      </div>
      <div className="youMightAlsoLike">
        <YouMightAlsoLike />
        <YouMightAlsoLike />
        <YouMightAlsoLike />
        <YouMightAlsoLike />
      </div>

      {/* <Parent /> */}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
