interface UserIconProps {
  avatarUrl: string;
}

const UserIcon = ({avatarUrl}: UserIconProps) => {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer size-15 rounded-full bg-white`}
    >
      <img src={avatarUrl} className="size-12" />
    </div>
  );
};

export default UserIcon;
