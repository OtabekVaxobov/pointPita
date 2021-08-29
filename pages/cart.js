import { useCartState } from "../context/cart";

function CartItem(name, quantity, line_total) {
    return(
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{line_total.formatted_with_symbol}</p>
        </div>
    )
}

export default function CartPage() {
    const {line_items, subtotal} = useCartState()

    const isEmpty = line_items.length === 0;

    if(isEmpty) return <p>empty cart</p>

    return (
        <div>
            <h1>Cart</h1>

            {/* <pre>
                {JSON.stringify(line_items, null, 2)}
            </pre> */}

            {line_items.map((item) => (
                <CartItem key={item.id} { ...item} />
            ))}
            <hr />
            <p><strong>Sub total:</strong>{subtotal.formatted_with_symbol}</p>
        </div>
    )
}