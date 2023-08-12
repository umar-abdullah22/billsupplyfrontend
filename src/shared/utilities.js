export function isEmail(val) {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(val)) {
    return true;
  }
}
export function isPassword(val) {
  const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  if (!regPass.test(val)) {
    return true;
  }
}
