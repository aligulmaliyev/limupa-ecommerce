export const getDicountValue = (price, discount) => {
    return price - (price * discount / 100)
}