export default function validateInfo(values) {
  let errors = {};
  //USERNAME
  //.trim gets rid of whitespace
  if (!values.username.trim()) {
    errors.usename = "Username is required";
  }
  //EMAIL
  if (!values.email) {
    // no value
    errors.email = "Email is required";
    //email validation e.g. not adding @ or .com etc
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  //PASSWORD
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  //EMAIL
  if (!values.password2) {
    errors.password2 = "Email is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
