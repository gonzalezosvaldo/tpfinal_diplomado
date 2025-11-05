export const fetchChocolates = async () => {
  const BASE_URL = "https://6907c21eb1879c890edaa4a9.mockapi.io/api/Chocolat";
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching Chocolate:", error);
    throw error;
  }
};