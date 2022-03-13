import { backend } from "../../../libs";

export const fetchDesks = async () => {
  const { data } = await backend.get("/desks");
  return data;
};
export const fetchBookings = async () => {
  const { data } = await backend.get("/bookings");
  return data;
};
