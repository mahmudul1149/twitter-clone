<template>
  <div>
    <div class="dark-bg">
      <div class="signin-section">
        <div v-if="error">
          <p class="error mb-1">
            {{ error }}
          </p>
        </div>
        <h2 class="title mb-1">Sign in to Twitter</h2>
        <button class="google-login mb-1" @click="loginWithGoogle">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt="Google Icon"
          />
          <span>Login with Google</span>
        </button>
        <div class="text-center"><p class="or">OR</p></div>
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
          <p class="go-signin">
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "firebase/auth";
import firebase from "firebase/compat";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("login", {
          email: this.user.email,
          password: this.user.password,
        });
        this.$router.push("/home");
      } catch (error) {
        this.error = "Failed login!";
      }
    },
    async loginWithGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        this.$router.push("/home");
      } catch (error) {
        console.log(error);
      }
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
.mb-1 {
  margin-bottom: 1rem;
}
.go-signin {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: 1rem;
  line-height: 1.6;
  a {
    color: rgba(24, 192, 9, 0.987);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
.signin-section {
  width: 470px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  position: relative;
  .title {
    font-size: 2rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    opacity: 0.8;
  }
  .or {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 0.4rem;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
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
    padding: 12px;
    border: 1px solid #ccc;
    outline-color: #1d9bf0;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  form input[type="submit"] {
    background-color: black;
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
    opacity: 0.8;
  }
  .google-login {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 35px;
    background-color: white;
    color: black;
    font-family: Arial, sans-serif;
    font-size: 14px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .google-login img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .google-login span {
    font-size: 1rem;
    display: inline-block;
    font-family: "Courier New", Courier, monospace;
    font-weight: 800;
  }
}
</style>
