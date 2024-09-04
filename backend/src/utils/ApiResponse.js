class ApiResponse {
  constructor(statuscode, data, message = "Success") {
    this.statuscode = statuscode;
    this.message = message;
    this.data = null;
    this.success = statuscode < 400;
  }
}

export { ApiResponse };
