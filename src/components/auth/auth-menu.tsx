import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "../modal/modal";
import { useModal } from "../modal/useModal";
import AuthenticationForm from "../../features/authentication-form";
import Popover from "../../components/popover/popover";
import { AuthorizedMenu } from "./authorized-menu";

interface Props {
  isAuthenticated: boolean;
  onJoin: () => void;
  onLogout: () => void;
  avatar: string;
}

const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar }: Props) => {
  const { isShown, toggle } = useModal();

  return !isAuthenticated ? (
    <div>
      <Button onClick={toggle}>JOIN</Button>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Login"
        modalContent={<AuthenticationForm />}
      />
    </div>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<img src={avatar} alt="user" />}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
