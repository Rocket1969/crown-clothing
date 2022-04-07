import SignUpForm from "../../components/sign-up-form/Sign-Up-Form.component";
import SignInForm from "../../components/sign-in-form/Sign-in-Form.component";
import "./authentication.scss"

const Authentication = () => {
 
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
