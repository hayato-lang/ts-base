import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
}

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dd>
      <dl>名前</dl>
      <dd>{user.name}</dd>
      <dl>趣味</dl>
      <dd>{user.hobbies?.join("/")}</dd>
    </dd>
  );
}