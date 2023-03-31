import {
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useRef,
  useState,
} from "react";
import Heading from "./Heading";
import Section from "./Section";
import FormInputField from "./FormInputField";
import FormTextareaField from "./FormTextareaField";

const Contact: FunctionComponent = () => {
  const [contactName, setContactName] = useState("");
  const [hasContactNameError, setHasContactNameError] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [hasContactEmailError, setHasContactEmailError] = useState(false);
  const [contactComment, setContactComment] = useState("");
  const [hasContactCommentError, setHasContactCommentError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleContactFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValidCheck = isFormValid();
    if (isFormValidCheck) {
      setSubmitMessage("Sent! Thanks.");
      setTimeout(() => {
        setSubmitMessage("");
      }, 1500);
    }
  };

  const isFormValid = () => {
    if (!contactName) {
      setHasContactNameError(true);
      nameRef.current?.focus();
    }
    if (!contactEmail) {
      setHasContactEmailError(true);
      emailRef.current?.focus();
    }
    if (!contactComment) {
      setHasContactCommentError(true);
      textareaRef.current?.focus();
    }
    if (!contactName || !contactEmail || !contactEmail) {
      return false;
    }
    return true;
  };

  return (
    <Section>
      <Heading>Contact us</Heading>
      <form
        onSubmit={(e) => handleContactFormSubmit(e)}
        noValidate
        className="px-5 sm:px-0"
      >
        <FormInputField
          ref={nameRef}
          labelText="Your name"
          inputType="text"
          id="contactName"
          isRequired={true}
          errorMessage="Name is required"
          hasError={hasContactNameError}
          value={contactName}
          onInputChange={(val) => setContactName(val)}
        />
        <FormInputField
          ref={emailRef}
          labelText="Email"
          inputType="email"
          id="contactEmail"
          isRequired={true}
          errorMessage="Email is required"
          hasError={hasContactEmailError}
          value={contactEmail}
          onInputChange={(val) => setContactEmail(val)}
        />
        <FormTextareaField
          ref={textareaRef}
          labelText="Comment"
          id="contactComment"
          isRequired={true}
          errorMessage="Comment is required"
          hasError={hasContactCommentError}
          value={contactComment}
          onInputChange={(val) => setContactComment(val)}
        />
        <div>
          <button className="btn btn-primary">Submit</button>
          <output className="ml-5">
            {submitMessage && (
              <span className="bg-purple-100 border-l-2 border-purple-500 p-2.5">
                {submitMessage}
              </span>
            )}
          </output>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
