export const registerUser = async (
  username,
  password,
  name,
  address,
  phonenumber,
  email
) => {
  const response = await fetch(`/api/authorization/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      name: name,
      address: address,
      phonenumber: phonenumber,
      email: email,
    }),
  });
  const result = await response.json();
  console.log("response from src", response);
  console.log("result from src", result);
  return result;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`/api/authorization/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const result = await response.json();
  return result;
};

export const fetchMe = async () => {
  const response = await fetch(`/api/authorization/me`);
  const result = await response.json();
  return result;
};
