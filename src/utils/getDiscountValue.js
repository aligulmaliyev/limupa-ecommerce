export const getDicountValue = (price, discount) => {
    return Number((price - (price * discount / 100)).toFixed(2))
}