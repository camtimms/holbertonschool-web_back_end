export default function signUpUser(firstName, lastName) {
  const signup = Promise.resolve({
    firstName: firstName,
    lastName: lastName,
    })
  return signup
}