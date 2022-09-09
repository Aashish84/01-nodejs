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

  getCredentials() {
    return `username : ${this.#user_name} , password : ${this.#password}`;
  }

  getCredentialsJSON() {
    return { username: this.#user_name, password: this.#password };
  }
}

module.exports = Login;
