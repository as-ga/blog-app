import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  Account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
    
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique, email, password, name);
      if (userAccount) {
        return userAccount;
      } else {
        throw new Error("Error creating account");
      }
    } catch (error) {
      throw
      error
    }
  }
  
}

const authService = new AuthService();
export default AuthService;
