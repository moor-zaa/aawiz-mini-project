import Card from "@/components/card/card.component";
import { UserDto } from "../../dto/user.dto";
import { FC } from "react";
import Image from "next/image";

interface UserCardProps {
  user: UserDto;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="flex flex-row gap-3 items-center p-4">
      <div className="shrink-0">
        <Image
          src={user.image}
          width={48}
          height={48}
          alt={user.firstName + user.lastName}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-md">
          <p className="truncate">{user.firstName} {user.lastName}</p>
        </div>
        <p className="text-xs truncate">{user.email}</p>
      </div>
    </Card>
  );
};

export default UserCard;