import { Product, useStore } from "../store/store";

export default function TableRow(product: Product & { index: number }) {
	const store = useStore(store => store)


	return (
		<div class="ring-1 rounded-md  p-1 my-1.5">
			<div class="w-full">
				<textarea class="w-full rounded-md" value={product.name} onInput={({ currentTarget }) => store.changeProduct(product.index, "name", currentTarget.value)}> 
					
				</textarea>
				{/*<input type="text" class="w-full border-r-2" value={product.name} onInput={({ currentTarget }) => changeProduct(product.index, "name", currentTarget.value)} />*/}
			</div>
			<div class="flex">
				<div>
					<span>Код -</span>
					<input type="number" class="w-12 ring-1 rounded-md mx-2 px-1" value={product.searchCode} onInput={({ currentTarget }) => store.changeProduct(product.index, "searchCode", currentTarget.value)} />
				</div>
						
				<div>
					<span>Ціна -</span>

					<input type="number" class="w-12 ring-1 rounded-md mx-2 px-1" value={product.price} onInput={({ currentTarget }) => store.changeProduct(product.index, "price", Number(currentTarget.value))} />
				</div>
				<div>
					<span>тип -</span>
					<select class="p-1.5 mx-2 rounded-md" value={product.type} onChange={({ target }) => store.changeProduct(product.index, "type", target.value as any)}>
						<option value="default">Стандарт</option>
						<option value="simple">Вітрина</option>
						<option value="small">Маленький</option>
					</select>
				</div>
				<div>
					<button class="p-2 mx-2 bg-rose-400 rounded-md text-white" onClick={() => store.removeProduct(product.index)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
							<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
						</svg>
					</button>
					
				</div>
			</div>
		</div>)
}