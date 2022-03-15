import { backend } from "../../../libs";

export const fetchDesks = async (token: string) => {
  const { data } = await backend.get("/desks", {
    headers: {
      Authorization: token,
    },
  });
  return data;
};
export const fetchBookings = async (token: string) => {
  const { data } = await backend.get("/bookings", {
    headers: {
      Authorization: token,
    },
  });
  return data;
};
