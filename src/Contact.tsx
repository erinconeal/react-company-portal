import { FormEvent, FunctionComponent, useRef, useState } from "react";
import Heading from "./Heading";
import Section from "./Section";
import FormInputField from "./FormInputField";
import FormTextareaField from "./FormTextareaField";

const Contact: FunctionComponent = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [hasContactNameError, setHasContactNameError] = useState(false);
  const [hasContactEmailError, setHasContactEmailError] = useState(false);
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
    // use form reverse order to set focus to topmost field
    if (!contactForm.comment) {
      setHasContactCommentError(true);
      textareaRef.current?.focus();
    }
    if (!contactForm.email) {
      setHasContactEmailError(true);
      emailRef.current?.focus();
    }
    if (!contactForm.name) {
      setHasContactNameError(true);
      nameRef.current?.focus();
    }
    if (!contactForm.name || !contactForm.email || !contactForm.comment) {
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
          value={contactForm.name}
          onInputChange={(val) => setContactForm({ ...contactForm, name: val })}
        />
        <FormInputField
          ref={emailRef}
          labelText="Email"
          inputType="email"
          id="contactEmail"
          isRequired={true}
          errorMessage="Email is required"
          hasError={hasContactEmailError}
          value={contactForm.email}
          onInputChange={(val) =>
            setContactForm({ ...contactForm, email: val })
          }
        />
        <FormTextareaField
          ref={textareaRef}
          labelText="Comment"
          id="contactComment"
          isRequired={true}
          errorMessage="Comment is required"
          hasError={hasContactCommentError}
          value={contactForm.comment}
          onInputChange={(val) =>
            setContactForm({ ...contactForm, comment: val })
          }
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
