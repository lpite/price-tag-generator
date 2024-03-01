import create from 'solid-zustand'

export type Store = {
  products: Product[],
  smallPriceTags: boolean,
  addProduct: (p: Product) => void,
  changeProduct: <Tkey extends keyof Product>(i: number, k: Tkey, v: Product[Tkey]) => void,
  removeProduct: (i: number) => void,
  setSmallPriceTags: (s: boolean) => void
}

export type Product = {
  searchCode: string,
  name: string,
  price: number,
  type: "default" | "simple" | "small";

}

export const useStore = create<Store>((set) => ({
  products: [],
  smallPriceTags: false,
  addProduct: (product) => set((state) => {
    return {

      products: [...state.products, product]
    }
  }),
  changeProduct: (i, k, v) => set((state) => {
    const newProducts = JSON.parse(JSON.stringify(state.products))
    const product = newProducts[i];
    product[k] = v;
    return {
      products: newProducts
    }
  }),
  removeProduct: (index) => set((state) => {
    const newProducts = [...state.products.slice(0, index), ...state.products.slice(index + 1)];

    return ({
      products: newProducts
    })
  }),
  setSmallPriceTags: (s) => set(() => {
    console.log(s)
    return {
      smallPriceTags: s
    }
  })
}))