//Objects In JavaScript are dynamic
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Ruth",
  retire: (date: Date) => {
    console.log(date);
  },
};
// employee. name = 'Mosh';

//Always make sure the code you write makes sense
