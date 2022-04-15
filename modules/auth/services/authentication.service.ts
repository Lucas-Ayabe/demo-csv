export class AuthenticationService {
  authenticate(email: string, password: string) {
    const admin = { email: "admin@domain.com", password: "admin" };
    const client = { email: "client@domain.com", password: "client" };
    return [admin, client].some(
      (credentials) =>
        credentials.email === email && credentials.password === password
    );
  }
}
