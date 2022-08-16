export const fetchAllOrders = async () => {
  const response = await fetch(`/api/orders`);
  const result = await response.json();
  return result;
};

export const fetchOrdersByCart = async (id) => {
  const response = await fetch(`/api/orders/cartOrder/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log("Result from fetchOrdersByCart frontend API", result);
  return result;
};

export const fetchOrderById = async (id) => {
  const response = await fetch(`api/orders/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const createOrder = async ({ kitten_id, cart_id }) => {
  const response = await fetch(`/api/orders/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kitten_id,
      cart_id,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateOrders = async (orderId, { kitten_id, cart_id }) => {
  const response = await fetch(`/api/orders/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kitten_id,
      cart_id,
    }),
  });
  const result = await response.json();
  return result;
};

export const deleteOrders = async (orderId) => {
  const response = await fetch(`/api/orders/${orderId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
