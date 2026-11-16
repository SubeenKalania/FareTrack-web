// Mock data for FareTrack. Prices are in CAD.
// Each flight runs daily on its route for now, so there is no date field yet.
// priceDrop: how many dollars the price has dropped (0 means no drop).
// arrivalDayOffset: 0 = arrives the same day, 1 = next day, 2 = two days later.

export const airports = [
  // Canada
  { code: "YOW", name: "Ottawa Macdonald Cartier International", city: "Ottawa", country: "Canada" },
  { code: "YYZ", name: "Toronto Pearson International", city: "Toronto", country: "Canada" },
  { code: "YUL", name: "Montreal Trudeau International", city: "Montreal", country: "Canada" },
  { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada" },
  { code: "YYC", name: "Calgary International", city: "Calgary", country: "Canada" },
  // United States
  { code: "JFK", name: "John F Kennedy International", city: "New York", country: "United States" },
  { code: "EWR", name: "Newark Liberty International", city: "New York", country: "United States" },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "United States" },
  { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "United States" },
  { code: "ORD", name: "Chicago O Hare International", city: "Chicago", country: "United States" },
  { code: "MIA", name: "Miami International", city: "Miami", country: "United States" },
  // United Kingdom
  { code: "LHR", name: "London Heathrow", city: "London", country: "United Kingdom" },
  { code: "LGW", name: "London Gatwick", city: "London", country: "United Kingdom" },
  // Europe
  { code: "CDG", name: "Paris Charles de Gaulle", city: "Paris", country: "France" },
  // India
  { code: "DEL", name: "Indira Gandhi International", city: "Delhi", country: "India" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International", city: "Mumbai", country: "India" },
  // Middle East, Asia Pacific, Latin America
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "United Arab Emirates" },
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", country: "Australia" },
  { code: "HND", name: "Tokyo Haneda", city: "Tokyo", country: "Japan" },
  { code: "SIN", name: "Singapore Changi", city: "Singapore", country: "Singapore" },
  { code: "MEX", name: "Mexico City International", city: "Mexico City", country: "Mexico" },
];

export const flights = [
  { id: 1, airline: "Air Canada", flightNo: "AC 8102", from: "YOW", to: "YYZ", departTime: "6:15 AM", arriveTime: "7:30 AM", arrivalDayOffset: 0, duration: "1h 15m", stops: 0, price: 189, priceDrop: 12 },
  { id: 2, airline: "Air Canada", flightNo: "AC 8120", from: "YOW", to: "YYZ", departTime: "5:45 PM", arriveTime: "7:00 PM", arrivalDayOffset: 0, duration: "1h 15m", stops: 0, price: 214, priceDrop: 0 },
  { id: 3, airline: "Air Canada", flightNo: "AC 8301", from: "YOW", to: "YUL", departTime: "8:00 AM", arriveTime: "8:55 AM", arrivalDayOffset: 0, duration: "55m", stops: 0, price: 149, priceDrop: 0 },
  { id: 4, airline: "WestJet", flightNo: "WS 3345", from: "YOW", to: "YVR", departTime: "7:10 AM", arriveTime: "9:45 AM", arrivalDayOffset: 0, duration: "5h 35m", stops: 0, price: 412, priceDrop: 25 },
  { id: 5, airline: "Air Canada", flightNo: "AC 304", from: "YOW", to: "YVR", departTime: "1:20 PM", arriveTime: "3:50 PM", arrivalDayOffset: 0, duration: "5h 30m", stops: 0, price: 438, priceDrop: 0 },
  { id: 6, airline: "Air Canada", flightNo: "AC 8878", from: "YYZ", to: "JFK", departTime: "9:05 AM", arriveTime: "10:40 AM", arrivalDayOffset: 0, duration: "1h 35m", stops: 0, price: 256, priceDrop: 18 },
  { id: 7, airline: "Delta", flightNo: "DL 1422", from: "LAX", to: "JFK", departTime: "8:45 AM", arriveTime: "4:55 PM", arrivalDayOffset: 0, duration: "5h 10m", stops: 0, price: 234, priceDrop: 12 },
  { id: 8, airline: "American Airlines", flightNo: "AA 2192", from: "JFK", to: "LAX", departTime: "10:45 AM", arriveTime: "2:05 PM", arrivalDayOffset: 0, duration: "6h 20m", stops: 0, price: 300, priceDrop: 0 },
  { id: 9, airline: "United", flightNo: "UA 531", from: "YYZ", to: "LAX", departTime: "7:30 AM", arriveTime: "10:15 AM", arrivalDayOffset: 0, duration: "5h 45m", stops: 0, price: 389, priceDrop: 30 },
  { id: 10, airline: "Air Canada", flightNo: "AC 792", from: "YYZ", to: "LHR", departTime: "9:55 PM", arriveTime: "9:45 AM", arrivalDayOffset: 1, duration: "6h 50m", stops: 0, price: 812, priceDrop: 45 },
  { id: 11, airline: "British Airways", flightNo: "BA 1031", from: "YYZ", to: "LHR", departTime: "10:30 PM", arriveTime: "10:30 AM", arrivalDayOffset: 1, duration: "7h 00m", stops: 0, price: 845, priceDrop: 0 },
  { id: 12, airline: "Air France", flightNo: "AF 7345", from: "YUL", to: "CDG", departTime: "7:45 PM", arriveTime: "9:00 AM", arrivalDayOffset: 1, duration: "7h 15m", stops: 0, price: 698, priceDrop: 22 },
  { id: 13, airline: "Air Canada", flightNo: "AC 872", from: "YYZ", to: "CDG", departTime: "6:50 PM", arriveTime: "8:15 AM", arrivalDayOffset: 1, duration: "7h 25m", stops: 0, price: 756, priceDrop: 0 },
  { id: 14, airline: "Air India", flightNo: "AI 2188", from: "YYZ", to: "DEL", departTime: "10:30 PM", arriveTime: "10:30 PM", arrivalDayOffset: 1, duration: "13h 30m", stops: 0, price: 1184, priceDrop: 60 },
  { id: 15, airline: "Air Canada", flightNo: "AC 7765", from: "YOW", to: "BOM", departTime: "7:00 AM", arriveTime: "3:10 PM", arrivalDayOffset: 1, duration: "21h 40m", stops: 1, price: 1052, priceDrop: 0 },
  { id: 16, airline: "Air India", flightNo: "AI 1146", from: "BOM", to: "YOW", departTime: "3:15 AM", arriveTime: "1:35 PM", arrivalDayOffset: 0, duration: "20h 50m", stops: 1, price: 1098, priceDrop: 35 },
  { id: 17, airline: "Air India", flightNo: "AI 1186", from: "DEL", to: "YYZ", departTime: "2:20 AM", arriveTime: "6:00 AM", arrivalDayOffset: 0, duration: "14h 10m", stops: 0, price: 1210, priceDrop: 0 },
  { id: 18, airline: "Emirates", flightNo: "EK 7413", from: "YYZ", to: "DXB", departTime: "11:00 PM", arriveTime: "8:30 PM", arrivalDayOffset: 1, duration: "12h 30m", stops: 0, price: 1295, priceDrop: 50 },
  { id: 19, airline: "Qantas", flightNo: "QF 8504", from: "YVR", to: "SYD", departTime: "10:30 PM", arriveTime: "8:45 AM", arrivalDayOffset: 2, duration: "15h 15m", stops: 0, price: 1685, priceDrop: 90 },
  { id: 20, airline: "Qantas", flightNo: "QF 8505", from: "SYD", to: "YVR", departTime: "11:30 AM", arriveTime: "6:00 AM", arrivalDayOffset: 0, duration: "13h 30m", stops: 0, price: 1540, priceDrop: 0 },
  { id: 21, airline: "WestJet", flightNo: "WS 3182", from: "YVR", to: "YYC", departTime: "8:20 AM", arriveTime: "10:55 AM", arrivalDayOffset: 0, duration: "1h 35m", stops: 0, price: 167, priceDrop: 0 },
  { id: 22, airline: "Air Canada", flightNo: "AC 2171", from: "YYC", to: "YOW", departTime: "6:30 AM", arriveTime: "12:20 PM", arrivalDayOffset: 0, duration: "3h 50m", stops: 0, price: 398, priceDrop: 20 },
  { id: 23, airline: "British Airways", flightNo: "BA 1170", from: "JFK", to: "LHR", departTime: "9:30 PM", arriveTime: "9:25 AM", arrivalDayOffset: 1, duration: "6h 55m", stops: 0, price: 724, priceDrop: 40 },
  { id: 24, airline: "British Airways", flightNo: "BA 1173", from: "LHR", to: "JFK", departTime: "10:40 AM", arriveTime: "1:45 PM", arrivalDayOffset: 0, duration: "8h 05m", stops: 0, price: 698, priceDrop: 0 },
  { id: 25, airline: "Air France", flightNo: "AF 7346", from: "CDG", to: "YUL", departTime: "1:15 PM", arriveTime: "3:10 PM", arrivalDayOffset: 0, duration: "7h 55m", stops: 0, price: 642, priceDrop: 15 },
  { id: 26, airline: "Singapore Airlines", flightNo: "SQ 2310", from: "SIN", to: "SYD", departTime: "8:35 AM", arriveTime: "7:30 PM", arrivalDayOffset: 0, duration: "7h 55m", stops: 0, price: 612, priceDrop: 0 },
  { id: 27, airline: "ANA", flightNo: "NH 1062", from: "HND", to: "LAX", departTime: "5:55 PM", arriveTime: "10:35 AM", arrivalDayOffset: 0, duration: "9h 40m", stops: 0, price: 1245, priceDrop: 75 },
  { id: 28, airline: "ANA", flightNo: "NH 1063", from: "LAX", to: "HND", departTime: "11:25 AM", arriveTime: "4:00 PM", arrivalDayOffset: 1, duration: "11h 35m", stops: 0, price: 1190, priceDrop: 0 },
  { id: 29, airline: "Air Canada", flightNo: "AC 1521", from: "MIA", to: "YYZ", departTime: "12:10 PM", arriveTime: "3:15 PM", arrivalDayOffset: 0, duration: "3h 05m", stops: 0, price: 342, priceDrop: 28 },
  { id: 30, airline: "Aeromexico", flightNo: "AM 6920", from: "MEX", to: "YYZ", departTime: "7:50 AM", arriveTime: "1:40 PM", arrivalDayOffset: 0, duration: "4h 50m", stops: 0, price: 589, priceDrop: 0 },
];
