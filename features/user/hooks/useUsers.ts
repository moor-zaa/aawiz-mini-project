import { useEffect, useState } from "react";
import { UserDto } from "../dto/user.dto";
import { UserRepository } from "../api/user.api";

const useUsers = () => {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const userService = new UserRepository();

  useEffect(() => {
    userService
      .getUsers({ limit: 6 })
      .then((res) => {
        setUsers(res.data.users as UserDto[]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading };
};

export default useUsers;
