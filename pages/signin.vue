<template>
  <div>
    <div class="dark-bg">
      <div class="signin-section">
        <form @submit.prevent="loginUser">
          <label for="#">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="user.email"
            placeholder="Email"
            required
          />
          <label for="#">Password</label>
          <input
            type="password"
            id="password"
            name=""
            v-model="user.password"
            required
            placeholder="Password"
          />

          <input type="submit" value="Log in" />
        </form>
        <p class="forgot-pass">Forgotten Password</p>
        <div class="text-center">
          <button class="create">
            <nuxt-link to="/" class="create-btn">
              Create New Account
            </nuxt-link>
          </button>
        </div>
        <div v-if="isLoading" class="loading">
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../plugins/firebase";
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoading = true;
      localStorage.setItem("userDetails", JSON.stringify(this.user));
      this.isLoading = true;
      login(this.user.email, this.user.password)
        .then((user) => {
          this.$store.commit("setUser", user);
        })
        .then(() => {
          this.$router.push("/home");
        })
        .catch((err) => {
          this.$router.push("/signin");
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.dark-bg {
  width: 100%;
  height: 100vh;
  background-color: rgb(131, 127, 127);
}

.text-center {
  text-align: center;
}
.signin-section {
  width: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  position: relative;
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .create {
    margin-top: 1rem;
    border: none;
    outline: none;
  }
  .create-btn {
    cursor: pointer;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
    color: #fff;
    background: transparent;
    border-radius: 5px;
    background-color: #2ecc71;
    text-decoration: none;
  }

  .forgot-pass {
    text-align: left;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
    text-align: center;
    padding-top: 0.5rem;
    color: #1d9bf0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  form {
    text-align: left;
  }

  form label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
  }

  form input[type="password"],
  form input[type="email"],
  form select {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    outline-color: #1d9bf0;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  form input[type="submit"] {
    background-color: #2ecc71;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

  form input[type="submit"]:hover {
    background-color: #27ae60;
  }
}
</style>
