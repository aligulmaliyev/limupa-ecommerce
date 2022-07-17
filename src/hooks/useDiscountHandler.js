import { useState, useCallback } from 'react';
import { getDicountValue } from "../utils/getDiscountValue";

export function useDiscountHandler() {
    const [discount, setDiscountValues] = useState({ isDiscount: false, discountValue: 0, discountedPrice: 0 });
    const onDiscount = useCallback(
        (price, discountVal) => {
            let isDiscount = discountVal > 0;
            if (isDiscount) {
                let discountedPrice = getDicountValue(price, discountVal)
                setDiscountValues({ isDiscount: true, discountValue: discountVal, discountedPrice: Number(discountedPrice) });
            }
        },
        [],
    )

    return [discount, onDiscount]
}