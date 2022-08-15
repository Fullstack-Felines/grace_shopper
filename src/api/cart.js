export const fetchCartById = async (id) => {
  const response = await fetch(`api/cart/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const createCart = async ({
  customer_id,
  total_amount,
  is_active,
  shipping_address,
}) => {
  const response = await fetch(`api/cart/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_id,
      total_amount,
      is_active,
      shipping_address,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateCart = async (
  cartId,
  { customer_id, total_amount, is_active, shipping_address }
) => {
  const response = await fetch(`api/cart/${cartId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_id,
      total_amount,
      is_active,
      shipping_address,
    }),
  });
  const result = await response.json();
  return result;
};
