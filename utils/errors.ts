export class CustomError extends Error {
  status: number;
  ok: boolean;
  url: null;

  constructor(message: string, status: number, ok: boolean, url: null) {
    super(message);
    this.status = status;
    this.ok = ok;
    this.url = url;
  }

  static userNotFound(username: string) {
    return new CustomError(`User ${username} not found.`, 404, false, null);
  }

  static incorrectPassword() {
    return new CustomError("Incorrect password.", 401, false, null);
  }
}
