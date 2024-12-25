import { For } from "solid-js"
import { useStore } from "../../store/store"
import TableRow from "../TableRow"


export default function ProductsTable() {
	const store = useStore()

	return (
		<div class="m-1 w-full mt-10">
			<For each={store.products}>{(product, index) => (
				<TableRow index={index()} {...product} />
			)}</For>	
		</div>
	)
}