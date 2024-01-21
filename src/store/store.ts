import create from 'solid-zustand'

export type Store = {
  products: Product[],
  addProduct: (p: Product) => void,
  changeProduct: <Tkey extends keyof Product>(i: number, k: Tkey, v: Product[Tkey]) => void,
  removeProduct: (i: number) => void
}

export type Product = {
  searchCode: string,
  name: string,
  price: number,
  type: "default" | "simple" | "small";

}

export const useStore = create<Store>((set) => ({
  products: [],
  addProduct: (product) => set((state) => {
    console.log("addProduct", product);
    console.dir("addProduct state", state);

    return {

      products: [...state.products, product]
    }
  }),
  changeProduct: (i, k, v) => set((state) => {
    const newProducts = JSON.parse(JSON.stringify(state.products))
    const product = newProducts[i];
    product[k] = v;
    console.log(i)
    console.log("changeProduct", product);
    console.log("changeProduct store", newProducts)
    return {
      products: newProducts
    }
  }),
  removeProduct: (index) => set((state) => {
    const newProducts = [...state.products.slice(0, index), ...state.products.slice(index + 1)];

    return ({
      products: newProducts
    })
  })
}))