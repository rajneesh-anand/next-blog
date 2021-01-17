import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "../modal/modal";
import { useModal } from "../modal/useModal";
import AuthenticationForm from "../authforms";
import Popover from "../../components/popover/popover";
import { AuthorizedMenu } from "./authorized-menu";

interface Props {
  isAuthenticated: boolean;
  onJoin: () => void;
  onLogout: () => void;
  avatar: string;
  user: string;
}

const AuthMenu = ({
  isAuthenticated,
  onJoin,
  onLogout,
  avatar,
  user,
}: Props) => {
  const { isShown, toggle } = useModal();

  return !isAuthenticated ? (
    <div>
      <Button onClick={toggle}>JOIN</Button>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="BLOGGER"
        modalContent={<AuthenticationForm />}
      />
    </div>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={user}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
