export async function GetHotelID(id) {
  const res = await fetch(`http://localhost:3000/host/${id}`);
  const data = await res.json();
  return data;
}

export async function GetHotelAmenities(id) {
  const res = await fetch(`http://localhost:3000/amenities/hotel/${id}`);
  const data = await res.json();
  return data;
}

export async function GetHotelReviews(id) {
  const res = await fetch(`http://localhost:3000/reviews/hotel/${id}`);
  const data = await res.json();
  return data;
}

export async function GetHotelRooms(id) {
  const res = await fetch(`http://localhost:3000/rooms/hotel/${id}`);
  const data = await res.json();
  return data;
}

export async function GetRoom(id) {
  const res = await fetch(`http://localhost:3000/rooms/${id}`);
  const data = await res.json();
  return data;
}
