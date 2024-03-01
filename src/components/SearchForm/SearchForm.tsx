import { JSX, createSignal } from "solid-js";
import { useStore } from "../../store/store"


export default function SearchForm() {
	const store = useStore();

	const [searchValue, setSearchValue] = createSignal("");
	const [defaultType, setDefaultType] = createSignal("default")

	const onFormSubmit: JSX.EventHandlerUnion<
		HTMLFormElement,
		Event & {
			submitter: HTMLElement;
		}
	> = async (e) => {
		e.preventDefault();

		const productsUrl = localStorage.getItem("productsUrl") || "";

		if (!productsUrl) {
			alert("Немає юрлу");
		}

		const { result: { data: { json: product } } } = await fetch(productsUrl.replace("%", searchValue), {
			mode: "cors",
			method: "GET",
			headers: {
				// "Authorization": token,
				// "Access-Control-Allow-Origin": "*"
			}
		}).then(res => res.json()).catch(() => {});
		if (product) {
			const d = defaultType()
			store.addProduct({ ...product, type: d + "" });
			setSearchValue("");
		} else {
			alert("Такого товару ще немає (((")
		}

		
	}

	return (
		<form class="flex h-10" onSubmit={onFormSubmit}>
			<input 
				value={searchValue()} 
				onInput={({ currentTarget }) => setSearchValue(currentTarget.value)} 
				type="number" 
				class="m-1 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Пошуковий код" 
			/>
			<select value={defaultType()} onChange={({ target }) => setDefaultType(target.value)} class="m-1 block py-0 px-2 rounded-md">
				<option value="default">Стандарт</option>
				<option value="simple">Вітрина</option>
			</select>
			<label class="flex items-center justify-center mx-2">
				Маленькі
				<input  onChange={() => store.setSmallPriceTags(!store.smallPriceTags)} type="checkbox" class="mx-2" />
			</label>
			<button class="m-1 rounded-md ring-gray-300 ring-1 px-5">search</button>
		</form>
	)
}