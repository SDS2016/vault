// currency conversion
const FormatCurrency = (amount: number, currency: string) => {
    const numberFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol',
    });
    return numberFormat.format(amount);
}

export default FormatCurrency;