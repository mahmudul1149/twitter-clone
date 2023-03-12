<template>
  <div>
    <div class="dark-bg">
      <div class="signup-section">
        <h2>Create your account</h2>
        <form @submit.prevent="registerUser">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="user.username"
            required
            placeholder="Name"
          />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="user.email"
            placeholder="Email"
            required
          />
          <input
            type="password"
            id="password"
            name=""
            v-model="user.password"
            required
            placeholder="Password"
          />
          <input
            type="password"
            id="password"
            name=""
            required
            placeholder="Confirm password"
          />
          <div class="birth-date">
            <h3>Date of birth</h3>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div class="flex">
              <div class="months">
                <label for="month">Month:</label>
                <select id="month" name="month">
                  <option value="jan" v-for="month in months" :key="month">
                    {{ month }}
                  </option>
                </select>
              </div>
              <div class="days">
                <label for="day">Day:</label>
                <select id="day" name="day">
                  <option v-for="day in days" :key="day" value="1">
                    {{ day }}
                  </option>
                </select>
              </div>
              <div class="years">
                <label for="year">Year:</label>
                <select id="year" name="year">
                  <option value="2023" v-for="year in years" :key="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <input type="submit" value="Sign Up" />
          <p class="resisterd">
            Already resistered? <a href="/signin">Login</a>
          </p>
        </form>
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
import { register } from "../plugins/firebase";
export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: " ",
        email: "",
        password: "",
      },
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      years: [],
      days: [],
    };
  },
  mounted() {
    this.days = Array.from({ length: 30 }, (_, i) => i + 1);

    this.years = Array.from({ length: 54 }, (_, i) => 1970 + i);
  },
  methods: {
    registerUser() {
      this.isLoading = true;
      register(this.user.username, this.user.email, this.user.password)
        .then((user) => {
          this.$store.commit("setUser", user);
        })
        .then(() => {
          this.$router.push("/home");
        })
        .catch((err) => {
          alert("error");
          this.$router.push("/");
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
.signup-section {
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
  .resisterd {
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
    text-align: center;
    padding-top: 0.5rem;
    a {
      color: #27ae60;
    }
  }
  .birth-date {
    h3 {
      font-size: 15px;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
    }
    p {
      font-weight: 400;
      font-size: 0.8rem;
      padding: 0.5rem 0;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;

    .months {
      width: 50%;
    }
    .days {
      width: 20%;
    }
    .years {
      width: 30%;
    }
  }
  h2 {
    margin-top: 0;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
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

  form input[type="text"],
  form input[type="email"],
  form input[type="password"],
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
