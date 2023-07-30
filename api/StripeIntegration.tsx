// get products api call from backend
export const getProducts = async (searchTeram: string) => {
    let postData = searchTeram.length > 0? {"search":searchTeram}  : {};
    const response = await fetch('https://prncsikwvviobywpyxjp.supabase.co/functions/v1/vault-get-products',{
        method: 'POST',
        body:JSON.stringify(postData),
    })
    const json = await response.json();
    return json;
}

export const getPaymentIntent = async () => {
    const response = await fetch('https://prncsikwvviobywpyxjp.supabase.co/functions/v1/vault-get-payment-intent',{
        method: 'POST',
        body:JSON.stringify({}),
    })
    const json = await response.json();
    return json;
}