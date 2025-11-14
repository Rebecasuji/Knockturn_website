import { randomUUID } from "crypto";

// ✅ Define User and InsertUser types here directly (so no missing import)
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

// InsertUser means a user object *before* the id is generated
export type InsertUser = Omit<User, "id">;

// Interface defining methods for any storage implementation
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

// Export an instance of MemStorage
export const storage = new MemStorage();
