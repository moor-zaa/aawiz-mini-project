import { HttpClientInstance } from "@/services/http-client.service";
import { UserDto } from "../dto/user.dto";

export class UserRepository {
  async getUsers(params?: any): Promise<{ data: { users: UserDto[] } }> {
    const response = await HttpClientInstance.get<{ users: UserDto[] }>(
      "users",
      { params }
    );
    return response;
  }
}
