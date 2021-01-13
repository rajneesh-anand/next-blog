import React, { useContext } from "react";
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
import { Input } from "../../components/forms/input";

export default function SignInModal() {
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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

  const loginCallback = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", `${email}.${password}`);
      authDispatch({ type: "SIGNIN_SUCCESS" });
    }
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Heading>
            <FormattedMessage id="welcomeBack" defaultMessage="Welcome Back" />
          </Heading>
          <SubHeading>
            <FormattedMessage
              id="loginText"
              defaultMessage="Login with your email &amp; password"
            />
          </SubHeading>
          <form onSubmit={loginCallback}>
            <Input
              type="email"
              placeholder={intl.formatMessage({
                id: "emailAddressPlaceholder",
                defaultMessage: "Email Address.",
              })}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
              height="48px"
              backgroundColor="#F7F7F7"
              mb="10px"
            />

            <Input
              type="password"
              placeholder={intl.formatMessage({
                id: "passwordPlaceholder",
                defaultMessage: "Password (min 6 characters)",
              })}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
              height="48px"
              backgroundColor="#F7F7F7"
              mb="10px"
            />

            <Button
              variant="primary"
              size="big"
              style={{ width: "100%" }}
              type="submit"
            >
              <FormattedMessage id="continueBtn" defaultMessage="Continue" />
            </Button>
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
            onClick={loginCallback}
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
            onClick={loginCallback}
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
}
