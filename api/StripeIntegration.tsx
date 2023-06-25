// get products api call from backend
export const getProducts = async () => {
    const response = await fetch('https://prncsikwvviobywpyxjp.supabase.co/functions/v1/vault-get-products');
    const json = await response.json();
    return json;
}


