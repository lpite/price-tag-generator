import { Show, createEffect, createSignal } from "solid-js";
import type { Product } from "../../store/store"

import styles from "./PriceTag.module.scss";


export default function PriceTag(product: Product) {
  if (!product.name?.length) {
    return null;
  }
  const [state, setState] = createSignal({
    noPdv: "",
    pdv: "",
    priceBeforeDot: "",
    priceAfterDot: "",
  })

  createEffect(() => {

    let noPdv = (Number(product.price) / 1.2).toFixed(2);
    let pdv = (Number(product.price) - Number(product.price) / 1.2).toFixed(2);
    let priceBeforeDot = product.price?.toString().split(".")[0];
    let priceAfterDot = product.price?.toString().split(".")[1] || "00";
    setState(() => ({
      noPdv,
      pdv,
      priceAfterDot,
      priceBeforeDot
    }))
  })
  return (
    <div class={styles["price_tag"]}>
      <div
        class={styles["price_tag_body"]}
      >
        <Show when={product.type === "default"}>
          <div class={styles["top"]}>
            <span>
              Код <b class={styles["code"]}>{product.searchCode}</b>
            </span>
            <span>Без ПДВ {state().noPdv}</span>
            <span>ПДВ {state().pdv}</span>
          </div>
        </Show>
        <div class={styles["center"]}>
          <Show when={product.type !== "small"}>
            <span class={styles["name"]} innerHTML={product.name.replace(/\n/gi, "<br/>")}>  </span>
          </Show>
        </div>
        <div class={styles["bottom"]}>
          <Show when={product.type === "small"}>
            <span class={styles["name"]}>{product.searchCode}</span>
          </Show>
          <Show when={product.type === "default"}>
            <span>
              Цiна <b>{state().priceBeforeDot}</b> грн <b>{state().priceAfterDot}</b> коп
            </span>
          </Show>
          <Show when={product.type === "simple"}>
            <span class={styles["code"]}>
              Код
              <b> {product.searchCode}</b>
            </span>
          </Show>
        </div>
      </div>
    
    </div>
  );
}