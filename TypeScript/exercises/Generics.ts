// Define a generic interface ApiResponse<T> that includes data, status, and error
interface ApiResponse<T> {
  data: T;
  status: number;
  error: string;
}
