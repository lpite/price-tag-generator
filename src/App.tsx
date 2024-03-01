import { For, Show } from "solid-js"
import ProductsTable from "./components/ProductsTable/ProductsTable"
import SearchForm from "./components/SearchForm/SearchForm"
import PriceTag from "./components/PriceTag/PriceTag"
import { useStore } from "./store/store"
import Settings from "./components/Settings"
import SmallPriceTag from "./components/SmallPriceTag"

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
        class={`grid ${store.smallPriceTags ? "grid-cols-4 gap-1" : "grid-cols-3"} mx-1 shrink-0`}
      >
        <Show when={!store.smallPriceTags}>
          <For each={store.products}>{(product) => (<PriceTag name={product.name} price={product.price} searchCode={product.searchCode} type={product.type} />)}</For>
        </Show>

        <Show when={store.smallPriceTags}>
          <For each={store.products}>{(product) => (<SmallPriceTag name={product.name} searchCode={product.searchCode} />)}</For>
        </Show>
      </div>
    </div>
  )
}

export default App
