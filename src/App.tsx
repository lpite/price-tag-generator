import { For } from "solid-js"
import ProductsTable from "./components/ProductsTable/ProductsTable"
import SearchForm from "./components/SearchForm/SearchForm"
import PriceTag from "./components/PriceTag/PriceTag"
import { useStore } from "./store/store"
import Settings from "./components/Settings"

function App() {

  const store = useStore()

  return (
    <div class="flex">
      <Settings />
      <div class="print:hidden p-2 w-full">
        <SearchForm />
        <ProductsTable />
      </div>
      <div 
        class="grid grid-cols-3 mx-1 shrink-0"
      >
        <For each={store.products}>{(product) => (<PriceTag name={product.name} price={product.price} searchCode={product.searchCode} type={product.type} />)}</For>
      </div>
    </div>
  )
}

export default App
