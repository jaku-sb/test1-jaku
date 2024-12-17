function maskCard(cardNumber, maskSymbol) {
    if (cardNumber.length < 10) {
        return "Неверный номер карты";
    }

    const firstSix = cardNumber.slice(0, 6);
    const lastFour = cardNumber.slice(-5);
    const maskedPart = maskSymbol.repeat(cardNumber.length - 10);

    return firstSix + maskedPart + lastFour;
}

// Примеры использования
console.log(maskCard("4815154823541789", "X"));
console.log(maskCard("4815154823541789", "*"));
console.log(maskCard("1234567890123456", "#"));
console.log(maskCard("12345678", "*"))
