export function signUpDetails(state, action) {
  switch (action.type) {
    case "FirstName":
      return { ...state, firstName: action.firstName };
    case "LastName":
      return { ...state, lastName: action.lastName };
    case "Email":
      return { ...state, email: action.email };
    case "Password":
      return { ...state, password: action.password };
    case "ConfirmPassword":
      return { ...state, confirmPassword: action.confirmPassword };
  }
}
