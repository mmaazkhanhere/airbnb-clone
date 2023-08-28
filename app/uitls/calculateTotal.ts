export const calculateTotal = (total: number, discount?: number): number => {
    if (discount) {
        const totalPrice = (total - discount);
        return totalPrice;
    }
    return total;
}