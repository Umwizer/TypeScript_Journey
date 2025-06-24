type Response1 =
  | { success: true; data: string }
  | { success: false; error: string };

function handleResponse(response: Response1) {
  if (response.success === true) {
    console.log(response.data);
  } else {
    console.error(response.error);
  }
}
handleResponse({ success: true, data: "Hello World" });
// Logs: "Hello World"

handleResponse({ success: false, error: "Something went wrong" });
// Logs error: "Something went wrong"
