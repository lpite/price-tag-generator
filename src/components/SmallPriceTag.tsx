type SmallPriceTagProps = {
	name: string,
	searchCode: string
}

export default function SmallPriceTag(props: SmallPriceTagProps) {
	return (
		<div class="text-center  border-2 border-black flex items-center justify-center flex-col" style={{ width: "193.5px", height: "86px" }}>
			<p class="m-0 leading-tight font-bold">
				{props.name}
			</p>
			<p class="m-0">
				Код <b class="text-lg">{props.searchCode}</b>
			</p>
		</div>
	)
}