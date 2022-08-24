export const fetchAllKittens = async () => {
  const response = await fetch(`/api/kittens`);
  const result = await response.json();
  return result;
};

export const fetchKittenById = async (id) => {
  const response = await fetch(`/api/kittens/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchAvailableKittens = async () => {
  const response = await fetch(`/api/kittens/available`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchUnavailableKittens = async () => {
  const response = await fetch(`/api/kittens/unavailable`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchKittensByBreed = async (breed) => {
  const response = await fetch(`api/kittens/${breed}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const fetchKittenByName = async (name) => {
  const response = await fetch(`api/kittens/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const createKitten = async ({
  name,
  breed,
  description,
  price,
  img_url,
  available,
}) => {
  const response = await fetch(`api/kittens/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      breed: breed,
      description: description,
      price: price,
      img_url: img_url,
      available: available,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateKitten = async ({
  kittenId,
  name,
  breed,
  description,
  price,
  img_url,
  available,
}) => {
  const response = await fetch(`api/kittens/${kittenId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      breed: breed,
      description: description,
      price: price,
      img_url: img_url,
      available: available,
    }),
  });
  const result = await response.json();
  console.log("Patched result from frontend API:", result);
  return result;
};

export const deleteKitten = async (kittenId) => {
  const response = await fetch(`/api/kittens/${kittenId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
