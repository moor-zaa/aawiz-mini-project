"use client";

import useUsers from "./hooks/useUsers";
import UserCard from "./components/user-cards/user-card.component";
import Card from "@/components/card/card.component";
import Icon from "@/components/icon/icon.component";
import { Button } from "@/components/button/button.component";

const Users = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <div>Loading Users ...</div>;

  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">Top Users</h2>

      <Card className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Button size="sm" variant="outline" className="text-xs">
            View More <Icon iconName="arrow_forward" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Users;