function handleResponse(response) {
    if (response.success === true) {
        console.log(response.data);
    }
    else {
        console.error(response.error);
    }
}
handleResponse({ success: true, data: "Hello World" });
// Logs: "Hello World"
handleResponse({ success: false, error: "Something went wrong" });
// Logs error: "Something went wrong"
