<template>
  <div>
    <div class="position">
      <div class="input-box">
        <input type="text" name="" id="" placeholder="Search Twitter" />
        <img src="../assets/images/314807_search_icon.png" alt="" />
      </div>
    </div>
    <div class="right-sidebar">
      <div class="trends">
        <h3>Trends for you</h3>

        <div class="trends-box" v-for="item in items" :key="item.id">
          <span class="trend">{{ item.trending }}</span>
          <span class="title">{{ item.title }}</span>
          <p class="tweet">{{ item.tweets }}</p>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="15"
            height="15"
            class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi postion-t"
          >
            <g>
              <path
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="btn-more">
          <button>Show more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          trending: "Trending in Bangladesh",
          title: "#TheGlory2",
          tweets: "102K Tweets",
        },
        {
          id: 2,
          trending: "Music · Trending",
          title: "Queen",
          tweets: "102K Tweets",
        },
        {
          id: 3,
          trending: "Entertainment · Trending",
          title: "#TJMM",
          tweets: "4552K Tweets",
        },
        {
          id: 4,
          trending: "Trending in Bangladesh",
          title: "Zakat",
          tweets: "452K Tweets",
        },
        {
          id: 5,
          trending: "Trending",
          title: "#SoftwareDeveloper",
          tweets: "320K Tweets",
        },
        {
          id: 6,
          trending: "Entertainment · Trending",
          title: "#TuJhoothiMainMakkaar",
          tweets: "11.6K Tweets",
        },
        {
          id: 7,
          trending: "Trending in Bangladesh",
          title: "#WahajAli",
          tweets: "125K Tweets",
        },
        {
          id: 8,
          trending: "Trending in Bangladesh",
          title: "#TheGlory2",
          tweets: "102K Tweets",
        },
        {
          id: 9,
          trending: "Trending in Bangladesh",
          title: "#BTSArmy",
          tweets: "102K Tweets",
        },
        {
          id: 10,
          trending: "Business & finance · Trending",
          title: "#kucoin",
          tweets: "221.7K Tweets",
        },
        {
          id: 11,
          trending: "Politics · Trending",
          title: "#Iran",
          tweets: "11.7K Tweets",
        },
        {
          id: 12,
          trending: "Trending in Bangladesh",
          title: "#JasLy",
          tweets: "102K Tweets",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.position {
  position: sticky;
  top: 0.5rem;
}
.input-box {
  margin-top: 0.5rem;
  width: 100%;
  height: 40px;
  position: relative;
  background: #eff3f4;
  border-radius: 35px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 2.7rem;
    font-size: 1rem;
    position: absolute;
    box-sizing: border-box;
    background: transparent;
    border: none;
    outline: none;
    top: 0;
    left: 0;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 10px;
    padding-left: 10px;
    width: 30px;
    height: 30px;
  }
}
.right-sidebar {
  .trends {
    background: #f7f9f9;

    margin-top: 1rem;
    border-radius: 5px;
    .btn-more {
      button {
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        text-align: left;
        font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif;
        padding: 0.7rem 10px !important;
        width: 100%;
        color: #1d9bf0;
        font-size: 15px;
        &:hover {
          background: #eff1f1;
        }
      }
    }

    h3 {
      font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
      padding: 10px;
    }
    .trends-box {
      padding: 10px;
      position: relative;
      .postion-t {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
      &:hover {
        background: #eff1f1;
      }

      .trend {
        color: #536471;
        font-size: 13px;
        font-weight: 400;
        font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif;
      }
      .title {
        font-family: "Times New Roman";
        color: #000000;
        font-size: 13px;
        display: block;

        font-weight: 600;
      }
      .tweet {
        color: #536471;
        font-size: 13px;
        font-weight: 400;
        font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif;
      }
    }
  }
}
</style>
