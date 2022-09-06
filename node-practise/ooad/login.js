class Login {
  #user_name;
  #password;

  getName() {
    return this.#user_name;
  }

  getPassword() {
    return this.#password;
  }

  setUserName(user_name) {
    this.#user_name = user_name;
  }

  setPassword(password) {
    this.#password = password;
  }

  getLoginHTML() {
    let obj = {
      forUserName: `<input type='text' name="username" />`,
      forPassword: `<input type="password" name="password" />`,
      forSubmit: `<input type="submit" name="submit" />`,
    };
    return `<form action="/login" method="post">${obj.forUserName} ${obj.forPassword} ${obj.forSubmit}</form>`;
  }

  getCredentials() {
    return `username : ${this.#user_name} , password : ${this.#password}`;
  }

  getCredentialsJSON() {
    return { username: this.#user_name, password: this.#password };
  }
}

module.exports = Login;
