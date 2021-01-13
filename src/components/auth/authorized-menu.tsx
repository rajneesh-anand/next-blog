import React from "react";
import { FormattedMessage } from "react-intl";

type Props = {
  onLogout: () => void;
};

export const AuthorizedMenu: React.FC<Props> = ({ onLogout }) => {
  return (
    <>
      <div className="menu-item" onClick={onLogout}>
        <a>
          <span>
            <FormattedMessage id="navlinkLogout" defaultMessage="Logout" />
          </span>
        </a>
      </div>
    </>
  );
};
