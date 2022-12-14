export const fetchCartById = async (cartid) => {
  const response = await fetch(`api/orders/${cartid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchCartByUserId = async (userid) => {
  const response = await fetch(`api/orders/userCart/${userid}`, {
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
  const response = await fetch(`api/orders`, {
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
  const response = await fetch(`api/orders/${cartId}`, {
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
