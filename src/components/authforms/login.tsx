import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../../hooks/index";
const isBrowser = typeof window !== "undefined";
import {
  LinkButton,
  Button,
  IconWrapper,
  Wrapper,
  Container,
  OfferSection,
  Offer,
} from "./authentication-form.style";

import { Facebook } from "../../assets/icons/Facebook";
import { Google } from "../../assets/icons/Google";
import { AuthContext } from "../../contexts/auth/auth.context";
import { FormattedMessage, useIntl } from "react-intl";
import { Input } from "../../components/forms/input";

const Login = () => {
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);

  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push("/");
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const toggleSignUpForm = () => {
    authDispatch({
      type: "SIGNUP",
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: "FORGOTPASS",
    });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      email: data.email,
      password: data.password,
    };
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      if (isBrowser) {
        localStorage.setItem("session_user", JSON.stringify(userObj.user));
      }
      mutate(userObj);
      authDispatch({ type: "SIGNIN_SUCCESS" });
    } else {
      setErrorMsg("Incorrect username or password. Try again!");
    }
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <h6>Sign In</h6>
          <form onSubmit={onSubmit}>
            {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="primary"
                type="submit"
                style={{ paddingLeft: 30, paddingRight: 30 }}
              >
                <FormattedMessage id="continueBtn" defaultMessage="Login" />
              </Button>
            </div>
          </form>
          <OfferSection>
            <Offer>
              <FormattedMessage
                id="dontHaveAccount"
                defaultMessage="Don't have any account? "
              />
              <LinkButton onClick={toggleSignUpForm}>
                <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up" />
              </LinkButton>
            </Offer>
            <Offer>
              <FormattedMessage
                id="forgotPasswordText"
                defaultMessage="Forgot your password?"
              />
              <LinkButton onClick={toggleForgotPassForm}>
                <FormattedMessage id="resetText" defaultMessage="Reset It" />
              </LinkButton>
            </Offer>
          </OfferSection>
          {/* 
          <Divider>
            <span>
              <FormattedMessage id="orText" defaultMessage="or" />
            </span>
          </Divider> */}

          <div style={{ display: "flex" }}>
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
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Login;
