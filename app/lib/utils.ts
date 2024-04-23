export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatWeight = (amount: number) => {
  return (amount / 1000).toFixed(3);
};

export const pricePerWeight = (price: number, weight: number) => {
  return (price / weight).toFixed(2);
};

export const priceToCents = (price: number) => {
  return price * 100;
};

export const weightToGrams = (weight: number) => {
  return weight * 1000;
};
