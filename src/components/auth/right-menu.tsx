import React from "react";
import dynamic from "next/dynamic";
const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  avatar: string;
  isAuthenticated: boolean;
};

export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
}) => {
  return (
    <AuthMenu
      avatar={avatar}
      onJoin={onJoin}
      onLogout={onLogout}
      isAuthenticated={isAuthenticated}
    />
  );
};
