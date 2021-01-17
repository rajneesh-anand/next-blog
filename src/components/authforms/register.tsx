import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import { useCurrentUser } from "../../hooks/index";
import Link from "next/link";
const isBrowser = typeof window !== "undefined";

import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  Offer,
  LinkButton,
  HelperText,
} from "./authentication-form.style";

import { Facebook } from "../../assets/icons/Facebook";
import { Google } from "../../assets/icons/Google";
import { AuthContext } from "../../contexts/auth/auth.context";
import { FormattedMessage, useIntl } from "react-intl";
import { Input } from "../../components/forms/input";

const Register = () => {
  const intl = useIntl();
  const [user, { mutate }] = useCurrentUser();
  const { authDispatch } = useContext<any>(AuthContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  useEffect(() => {
    console.log(user);
    if (user) Router.replace("/");
  }, [user]);

  const toggleSignInForm = () => {
    authDispatch({
      type: "SIGNIN",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      if (isBrowser) {
        localStorage.setItem("session_user", JSON.stringify(userObj.user));
      }
      mutate(userObj);
    } else {
      setData({ ...data, error: await res.text() });
    }
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <h6>Sign Up</h6>
          <form onSubmit={handleSubmit}>
            {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}

            <Input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder={intl.formatMessage({
                id: "emailAddressPlaceholder",
                defaultMessage: "User Name",
              })}
              value={data.name}
              required
              height="48px"
              backgroundColor="#F7F7F7"
              mb="10px"
            />

            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder={intl.formatMessage({
                id: "emailAddressPlaceholder",
                defaultMessage: "Email Address.",
              })}
              value={data.email}
              required
              height="48px"
              backgroundColor="#F7F7F7"
              mb="10px"
            />
            <Input
              id="password"
              type="password"
              name="password"
              placeholder={intl.formatMessage({
                id: "passwordPlaceholder",
                defaultMessage: "Password (min 6 characters)",
              })}
              value={data.password}
              required
              height="48px"
              backgroundColor="#F7F7F7"
              mb="10px"
              onChange={handleChange}
            />
            <HelperText style={{ padding: "5px 0 5px" }}>
              <FormattedMessage
                id="signUpText"
                defaultMessage="By signing up, you agree to "
              />
              &nbsp;
              <Link href="/termspolicy">
                <a>
                  <FormattedMessage
                    id="termsConditionText"
                    defaultMessage="Terms &amp; Conditions"
                  />
                </a>
              </Link>
            </HelperText>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="primary"
                type="submit"
                style={{ paddingLeft: 30, paddingRight: 30 }}
              >
                <FormattedMessage id="continueBtn" defaultMessage="Register" />
              </Button>
            </div>
          </form>
          {/* <div style={{ display: "flex" }}>
            <div>
              <Button
                variant="primary"
                style={{
                  width: "100%",
                  backgroundColor: "#4267b2",
                }}
              >
                <IconWrapper>
                  <Facebook />
                </IconWrapper>
                <FormattedMessage
                  id="continueFacebookBtn"
                  defaultMessage="Continue with Facebook"
                />
              </Button>
            </div>
            <div>
              <Button
                variant="primary"
                style={{ width: "100%", backgroundColor: "#4285f4" }}
              >
                <IconWrapper>
                  <Google />
                </IconWrapper>
                <FormattedMessage
                  id="continueGoogleBtn"
                  defaultMessage="Continue with Google"
                />
              </Button>
            </div>
          </div> */}

          <Offer style={{ padding: "8px 0" }}>
            <FormattedMessage
              id="alreadyHaveAccount"
              defaultMessage="Already have an account ?  "
            />
            <LinkButton onClick={toggleSignInForm}>
              <FormattedMessage id="loginBtnText" defaultMessage="Login" />
            </LinkButton>
          </Offer>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Register;
