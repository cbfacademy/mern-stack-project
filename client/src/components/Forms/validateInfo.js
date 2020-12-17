// export default function validateInfo(values) {
//   let errors = {};
//   //USERNAME
//   //.trim gets rid of whitespace
//   if (!values.username.trim()) {
//     errors.username = "Username is required";
//   }
//   //EMAIL
//   if (!values.email) {
//     // no value
//     errors.email = "Email is required";
//     //email validation e.g. not adding @ or .com etc
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Email address is invalid";
//   }
//   //PASSWORD
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Password needs to be 6 characters or more";
//   }
//   //PASSWORD 2
//   if (!values.password2) {
//     errors.password2 = "Email is required";
//   } else if (values.password2 !== values.password) {
//     errors.password2 = "Passwords do not match";
//   }
//   return errors;
// }






// export default function validateInfo(values) {
//   let errors = {};

//   if (!values.username.trim()) {
//     errors.username = "Username required";
//   }
//   // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
//   //   errors.name = 'Enter a valid name';
//   // }

//   if (!values.email) {
//     errors.email = "Email required";
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = "Email address is invalid";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Password needs to be 6 characters or more";
//   }

//   if (!values.password2) {
//     errors.password2 = "Password is required";
//   } else if (values.password2 !== values.password) {
//     errors.password2 = "Passwords do not match";
//   }
//   return errors;
// }
