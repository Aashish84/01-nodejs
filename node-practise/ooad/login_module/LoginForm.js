class LoginForm {
  getLoginHTML() {
    let obj = {
      forUserName: `<input type='text' name="username" />`,
      forPassword: `<input type="password" name="password" />`,
      forSubmit: `<input type="submit" name="submit" />`,
    };
    return `<form action="/login" method="post">${obj.forUserName} ${obj.forPassword} ${obj.forSubmit}</form>`;
  }
}

module.exports = LoginForm;
