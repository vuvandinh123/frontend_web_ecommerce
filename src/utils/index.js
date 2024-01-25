
function formathDate(date) {
    if (!date) {
        return '';
    }
    const inputDate = new Date(date);
    const formattedDate = `${inputDate.getHours()}:${inputDate.getMinutes()} ${inputDate.getDate()}/${inputDate.getMonth() + 1}/${inputDate.getFullYear()}`;
    return formattedDate;
}
function formatPrice(value) {
    const formattedNumber = value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD' // Định dạng thành tiền USD
    });
    return formattedNumber
}
function currencyConverter(price,data) {
    let total = price;
    if(data.currency != "USD"){
        total *= data.rate;
    }
    const priceNews = new Intl.NumberFormat(data.from, {
        style: "currency",
        currency: data.currency,
      }).format(total);
   return priceNews
}
export { formathDate, formatPrice ,currencyConverter}