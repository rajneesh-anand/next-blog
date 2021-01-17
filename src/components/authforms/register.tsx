import React, { useContext, useState, useEffect } from "react";
import Router from "next/router";
import { useCurrentUser } from "../../hooks/index";

import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  LinkButton,
} from "./authentication-form.style";

import { Facebook } from "../../assets/icons/Facebook";
import { Google } from "../../assets/icons/Google";
import { AuthContext } from "../../contexts/auth/auth.context";
import { FormattedMessage } from "react-intl";

const Register = () => {
  const [user, { mutate }] = useCurrentUser();
  const { authDispatch } = useContext<any>(AuthContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  useEffect(() => {
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
      mutate(userObj);
      console.log(userObj);
    } else {
      setData({ ...data, error: await res.text() });
    }
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder=" Email"
              onChange={handleChange}
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button type="submit">sign up</button>
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
              id="alreadyHaveAccount"
              defaultMessage="Already have an account?"
            />{" "}
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
