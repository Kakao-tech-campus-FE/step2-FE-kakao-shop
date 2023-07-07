export class JwtPayload {
  sub: string;
  role: string;
  id: number;
  exp: number;
  constructor(data: JwtPayload) {
    this.sub = data.sub;
    this.role = data.role;
    this.id = data.id;
    this.exp = data.exp;
  }
}
