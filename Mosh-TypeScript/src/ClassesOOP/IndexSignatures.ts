class SeatAssignment {
  //A1,A2,..
  //Mosh,Ruth,..
  //   A1: string;
  //   A2: string;//Ruth
  [seatNumber: string]: string; //index signature property
}
let seats = new SeatAssignment();
(seats.A1 = "Mosh"), (seats.A2 = "John");
//seats['A1'] = 'Mosh';
