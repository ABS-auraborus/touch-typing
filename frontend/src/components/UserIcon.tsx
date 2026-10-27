interface UserIconProps {
  avatarUrl: string;
}

const UserIcon = ({avatarUrl}: UserIconProps) => {
  return (
    <div
      className={`cursor-pointer size-15 rounded-full bg-white bg-no-repeat bg-cover bg-center bg-[url(${avatarUrl})]`}
    ></div>
  );
};

export default UserIcon;
