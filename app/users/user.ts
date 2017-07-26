export class User {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
    public address?: {
      street?: string,
      suite?: string,
      city?: string,
      zipcode?: string,
    },
    public phone?: string
    ) {
  }
}

