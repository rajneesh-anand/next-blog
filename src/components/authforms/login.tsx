import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCurrentUser } from "../../hooks/index";
const isBrowser = typeof window !== "undefined";
import {
  LinkButton,
  Button,
  IconWrapper,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
} from "./authentication-form.style";

import { Facebook } from "../../assets/icons/Facebook";
import { Google } from "../../assets/icons/Google";
import { AuthContext } from "../../contexts/auth/auth.context";
import { FormattedMessage, useIntl } from "react-intl";
// import { Input } from "../../components/forms/input";

const Login = () => {
  // const intl = useIntl();
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
      console.log(userObj);
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
          <h2>Sign in</h2>
          <form onSubmit={onSubmit}>
            {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
            <label htmlFor="email">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </label>
            <button type="submit">Sign in</button>
            <Link href="/forget-password">
              <a>Forget password</a>
            </Link>
          </form>
        </div>

        <div>
          <Button
            variant="primary"
            size="big"
            style={{
              width: "100%",
              backgroundColor: "#4267b2",
              marginBottom: 10,
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

          <Button
            variant="primary"
            size="big"
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

          <Offer style={{ padding: "20px 0" }}>
            <FormattedMessage
              id="dontHaveAccount"
              defaultMessage="Don't have any account?"
            />
            <LinkButton onClick={toggleSignUpForm}>
              <FormattedMessage id="signUpBtnText" defaultMessage="Sign Up" />
            </LinkButton>
          </Offer>
        </div>
      </Container>

      <OfferSection>
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
    </Wrapper>
  );
};

export default Login;
