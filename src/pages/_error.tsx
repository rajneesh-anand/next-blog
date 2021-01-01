import { NextPageContext } from "next";
import { ReactNode } from "react";

interface IProps {
  statusCode: ReactNode;
}

const Error = ({ statusCode }: IProps) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
