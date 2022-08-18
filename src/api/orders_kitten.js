export const fetchAllOrders = async () => {
  const response = await fetch(`/api/orders_kitten`);
  const result = await response.json();
  return result;
};

export const fetchOrdersByCart = async (id) => {
  const response = await fetch(`/api/orders_kitten/cartOrder/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchOrderById = async (id) => {
  const response = await fetch(`api/orders_kitten/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

// addingToCart
export const createOrder = async ({ order_id, kitten_id }) => {
  const response = await fetch(`/api/orders_kitten/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order_id,
      kitten_id,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateOrders = async (orderId, { kitten_id, order_id }) => {
  const response = await fetch(`/api/orders_kitten/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      kitten_id,
      order_id,
    }),
  });
  const result = await response.json();
  return result;
};

// removingFromCart
export const deleteOrders = async (orderId) => {
  const response = await fetch(`/api/orders_kitten/${orderId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
