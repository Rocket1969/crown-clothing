import SignUpForm from "../../components/sign-up-form/Sign-Up-Form.component";
import SignInForm from "../../components/sign-in-form/Sign-in-Form.component";
import { AuthenticationContainer } from "./authentication.styles.jsx"

const Authentication = () => {
 
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
