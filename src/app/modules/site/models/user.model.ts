class User {
  id: number;
  name: string;
  password: string;
  email: string;
  rg: string;
  cpf: string;
  job: string;
  employerId: number;
  userTypeId: number;
  isActive: boolean;
  createdAt: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.password = '';
    this.email = '';
    this.rg = '';
    this.cpf = '';
    this.job = '';
    this.employerId = 0;
    this.userTypeId = 0;
    this.isActive = true;
    this.createdAt = '';
  }
}

export default User;
