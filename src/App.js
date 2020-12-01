import storeItems from "./items.json"
import Store from "./components/Store/Store"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <>
      <Store items={storeItems} />
      <Cart />
    </>
  )
}

export default App
