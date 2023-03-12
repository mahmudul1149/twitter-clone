<template>
  <div class="post-section">
    <div class="position">
      <div class="mr-1">
        <h1>Home</h1>
      </div>

      <div class="title-box">
        <div class="box"><span>For You</span></div>
        <div class="box">Following</div>
      </div>
    </div>
    <div class="post-container">
      <div class="image" v-if="user.image">
        <img :src="user.image" alt="" />
      </div>
      <div v-else class="image">
        <img src="../assets/images/twitter-profile.webp" alt="" />
      </div>
      <div class="input">
        <input
          type="text"
          name=""
          id=""
          placeholder="What's happening?"
          v-model="text"
        />
      </div>
    </div>
    <div class="button-container">
      <div class="box">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20"
          width="20"
          fill="rgb(29, 155, 240)"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20"
          width="20"
          fill="rgb(29, 155, 240)"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20"
          width="20"
          fill="rgb(29, 155, 240)"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20"
          width="20"
          fill="rgb(29, 155, 240)"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20"
          width="20"
          fill="rgb(29, 155, 240)"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20"
          width="20"
          fill="rgb(29, 155, 240)"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
        >
          <g>
            <path
              d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
            ></path>
          </g>
        </svg>
      </div>
      <div class="btn">
        <button @click="addItem">Tweet</button>
      </div>
    </div>
    <div class="show-tweet">Show 25 Tweets</div>
    <div class="show-post">
      <div class="show-profile" v-for="item in userItems" :key="item">
        <div>
          <div class="box image">
            <div v-if="user.image">
              <img :src="user.image" alt="" />
            </div>
            <div v-else class="">
              <img
                class="profile-photo"
                src="../assets/images/twitter-profile.webp"
                alt=""
              />
            </div>

            <div class="mt-1">
              <a>{{ user.displayName }}</a>
            </div>
          </div>

          <div class="custom-pad">
            <p class="posting-title">{{ item.post }}</p>

            <div class="react">
              <span
                class="reactions-react-button feed-shared-social-action-bar__action-button"
              >
                <button
                  aria-pressed="false"
                  aria-label="Like Abdun Nur Wasit’s post"
                  id="ember57"
                  class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
                >
                  <span>
                    <div class="flex-wrap justify-center align-items-center">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="1.25em"
                        height="1.25em"
                        class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path
                            d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                          ></path>
                        </g>
                      </svg>

                      <span
                        aria-hidden="true"
                        class="like-btn artdeco-button__text react-button__text"
                      >
                        1
                      </span>
                    </div>
                  </span>
                </button>

                <button
                  aria-label="Open reactions menu"
                  id="ember58"
                  class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view reactions-menu__trigger"
                >
                  <span class="artdeco-button__text"> </span>
                </button>
              </span>
              <span
                class="comment feed-shared-social-action-bar__action-button"
              >
                <span
                  tabindex="-1"
                  id="ember59"
                  class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                >
                  <div>
                    <button
                      aria-label="Comment on Abdun Nur Wasit’s post"
                      aria-describedby="artdeco-hoverable-artdeco-gen-42"
                      id="ember60"
                      class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="1.25em"
                        height="1.25em"
                        class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path
                            d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                          ></path>
                        </g>
                      </svg>

                      <span class="artdeco-button__text"> 2 </span>
                    </button>
                  </div>
                  <div id="artdeco-gen-42" class="ember-view">
                    <div id="ember62" class="ember-view"></div>
                  </div>
                </span>
              </span>
              <span
                class="feed-shared-social-action-bar__action-button"
                id="ember63"
              >
                <div
                  id="ember64"
                  class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
                >
                  <span
                    tabindex="-1"
                    id="ember65"
                    class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                  >
                    <button
                      aria-expanded="false"
                      aria-label=""
                      id="ember66"
                      class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button social-actions-button social-reshare-button flex-wrap artdeco-button--muted artdeco-button--4 artdeco-button--tertiary"
                      aria-describedby="artdeco-hoverable-artdeco-gen-43"
                      type="button"
                      tabindex="0"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="1.25em"
                        height="1.25em"
                        class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path
                            d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                          ></path>
                        </g>
                      </svg>
                      <span class="artdeco-button__text">18</span>
                    </button>

                    <div
                      tabindex="-1"
                      aria-hidden="true"
                      id="ember67"
                      class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view social-reshare-button__share-dropdown-content"
                    ></div>

                    <div id="artdeco-gen-43" class="ember-view">
                      <div id="ember69" class="ember-view"></div>
                    </div>
                  </span>
                </div>

                <div></div>
              </span>
              <div class="feed-shared-social-action-bar__action-button">
                <span
                  tabindex="-1"
                  id="ember70"
                  class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                >
                  <div class="entry-point">
                    <div></div>

                    <button
                      class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                      aria-describedby="artdeco-hoverable-artdeco-gen-44"
                      type="button"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="1.25em"
                        height="1.25em"
                        class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path
                            d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                          ></path>
                        </g>
                      </svg>
                      <span class="artdeco-button__text">78</span>
                    </button>
                  </div>
                  <div id="artdeco-gen-44" class="ember-view">
                    <div id="ember72" class="ember-view"></div>
                  </div>
                </span>
              </div>
              <div class="feed-shared-social-action-bar__action-button">
                <span
                  tabindex="-1"
                  id="ember70"
                  class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                >
                  <div class="entry-point">
                    <div></div>

                    <button
                      class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                      aria-describedby="artdeco-hoverable-artdeco-gen-44"
                      type="button"
                    >
                      <div class="svg">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          width="1.25em"
                          height="1.25em"
                          class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                        >
                          <g>
                            <path
                              d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div id="artdeco-gen-44" class="ember-view">
                    <div id="ember72" class="ember-view"></div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="show-post">
      <div class="show-profile">
        <div class="box">
          <img
            src="../assets/images/twitterpro.jpg"
            alt=""
            class="profile-photo"
          />
          <div class="mt-1">
            <a>Md Mahmudul islam</a>
            <br />
          </div>
        </div>
        <div class="custom-pad">
          <p class="posting-title">I am a front end developer</p>
          <img
            class="post-img"
            src="../assets/images/WhatsApp Image 2023-03-12 at 3.06.43 PM.jpeg"
            alt=""
          />

          <div class="react">
            <span
              class="reactions-react-button feed-shared-social-action-bar__action-button"
            >
              <!---->
              <button
                aria-pressed="false"
                aria-label="Like Abdun Nur Wasit’s post"
                id="ember57"
                class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
              >
                <!---->
                <span>
                  <div class="flex-wrap justify-center align-items-center">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="1.25em"
                      height="1.25em"
                      class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                    >
                      <g>
                        <path
                          d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                        ></path>
                      </g>
                    </svg>

                    <span
                      aria-hidden="true"
                      class="like-btn artdeco-button__text react-button__text"
                    >
                      1
                    </span>
                  </div>
                </span>
              </button>

              <button
                aria-label="Open reactions menu"
                id="ember58"
                class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view reactions-menu__trigger"
              >
                <!---->
                <span class="artdeco-button__text"> </span>
              </button>
            </span>
            <span class="comment feed-shared-social-action-bar__action-button">
              <span
                tabindex="-1"
                id="ember59"
                class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
              >
                <div>
                  <button
                    aria-label="Comment on Abdun Nur Wasit’s post"
                    aria-describedby="artdeco-hoverable-artdeco-gen-42"
                    id="ember60"
                    class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="1.25em"
                      height="1.25em"
                      class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                    >
                      <g>
                        <path
                          d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                        ></path>
                      </g>
                    </svg>

                    <span class="artdeco-button__text"> 2 </span>
                  </button>
                </div>
                <div id="artdeco-gen-42" class="ember-view">
                  <div id="ember62" class="ember-view"></div>
                </div>
              </span>
            </span>
            <span
              class="feed-shared-social-action-bar__action-button"
              id="ember63"
            >
              <div
                id="ember64"
                class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
              >
                <span
                  tabindex="-1"
                  id="ember65"
                  class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
                >
                  <button
                    aria-expanded="false"
                    aria-label=""
                    id="ember66"
                    class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button social-actions-button social-reshare-button flex-wrap artdeco-button--muted artdeco-button--4 artdeco-button--tertiary"
                    aria-describedby="artdeco-hoverable-artdeco-gen-43"
                    type="button"
                    tabindex="0"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="1.25em"
                      height="1.25em"
                      class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                    >
                      <g>
                        <path
                          d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                        ></path>
                      </g>
                    </svg>
                    <span class="artdeco-button__text">18</span>

                    <!---->
                  </button>

                  <div
                    tabindex="-1"
                    aria-hidden="true"
                    id="ember67"
                    class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view social-reshare-button__share-dropdown-content"
                  >
                    <!---->
                  </div>

                  <div id="artdeco-gen-43" class="ember-view">
                    <div id="ember69" class="ember-view"></div>
                  </div>
                </span>
              </div>

              <div>
                <!---->
              </div>
              <!----></span
            >
            <div class="feed-shared-social-action-bar__action-button">
              <span
                tabindex="-1"
                id="ember70"
                class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
              >
                <div class="entry-point">
                  <div></div>

                  <button
                    class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                    aria-describedby="artdeco-hoverable-artdeco-gen-44"
                    type="button"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      width="1.25em"
                      height="1.25em"
                      class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                    >
                      <g>
                        <path
                          d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                        ></path>
                      </g>
                    </svg>
                    <span class="artdeco-button__text">78</span>
                  </button>
                </div>
                <div id="artdeco-gen-44" class="ember-view">
                  <div id="ember72" class="ember-view"></div>
                </div>
              </span>
            </div>
            <div class="feed-shared-social-action-bar__action-button">
              <span
                tabindex="-1"
                id="ember70"
                class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
              >
                <div class="entry-point">
                  <div></div>

                  <button
                    class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                    aria-describedby="artdeco-hoverable-artdeco-gen-44"
                    type="button"
                  >
                    <div class="svg">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="1.25em"
                        height="1.25em"
                        class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path
                            d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
                <div id="artdeco-gen-44" class="ember-view">
                  <div id="ember72" class="ember-view"></div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      visible: false,
      userItems: [
        {
          title: "",
          post: " ",
          completed: true,
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.commit("initializeStore");
  },
  methods: {
    addItem() {
      console.log(this.text);
      this.userItems.unshift({ post: this.text });
      this.visible = true;
      this.text = "";
    },
  },
};
</script>

<style lang="scss">
.mr-1 {
  margin: 0.5rem;
}

.post-section {
  h1 {
    font-size: 1.3rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .position {
    position: sticky;
    top: 0.5rem;
    z-index: 9999;
    background: white;
  }
  .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .box {
      width: 50%;
      padding: 0.9rem 0;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      cursor: pointer;
      span {
        padding-bottom: 0.9rem;
        border-bottom: 3px solid #1d9bf0;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
      }
      &:hover {
        background: #e7e7e8;
      }
    }
  }
  .post-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    .input input {
      font-size: 1.5rem;
      border: none;
      outline: none;
    }
    .image {
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
  }
  .button-container {
    border-top: 1px solid rgba(0, 0, 0, 00.1);
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 4rem;
    margin-right: 0.6rem;
    svg {
      cursor: pointer;
      margin-right: 0.6rem;
    }
    .btn {
      button {
        border: none;
        outline: none;
        color: white;
        background: #1d9bf0;
        padding: 0.4rem 1.2rem;
        cursor: pointer;
        border-radius: 35px;
        font-size: 1.2rem;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      }
    }
  }
  .show-tweet {
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 00.1);
    border-bottom: 1px solid rgba(0, 0, 0, 00.1);
    color: #4fb0f1;
    font-size: 1.1rem;
    padding: 0.7rem 0;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    cursor: pointer;
  }
  .show-post {
    border-bottom: 1px solid rgba(0, 0, 0, 00.1);
    .post-img {
      width: 100%;
      height: 600px;
      border-radius: 10px;
      object-fit: cover;
    }
    .custom-pad {
      padding-left: 3.7rem;
      padding-right: 1rem;
    }

    .profile {
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background: White;
      padding: 0.4rem !important;
    }
    .profile .profile-post {
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .reactions-react-button {
      cursor: pointer;
    }
    .profile .profile-post .imagediv img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }
    .profile .profile-post input {
      width: 100%;
      padding: 0.8rem 1rem;
      box-sizing: border-box;
      border: 1px solid gray;
      outline: none;
      border-radius: 36px;
    }
    .show-profile .profile-photo {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      color: white;
      cursor: pointer;
    }
    .show-profile .profile-photo .profile .profile-post input::placeholder {
      color: rgb(83, 80, 80);
      font-weight: 500;
    }
    .profile .profile-post input:hover {
      background: #ebebeb;
    }
    li {
      list-style: none;
    }
    .share-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button {
      border: none;
      outline: none;
      background: transparent;
    }
    .flex-item {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 0.5rem;
    }
    .flex-item:hover {
      background: #ebebeb;
    }
    button {
      cursor: pointer;
    }
    .flex-item span {
      color: #333;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    .show-profile {
      background: #fff;
      border-radius: 10px;
    }
    .show-profile .box {
      display: flex;
      gap: 0.4rem;
      margin: 0.5rem;
    }
    .show-profile .posting-title {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      margin-bottom: 10px;
    }
    .show-profile .box a {
      font-weight: 600;
      font-size: 1rem;
      padding-top: 0.3rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .show-profile .box p {
      font-size: 0.9rem;
      color: rgb(95, 92, 92);
      padding: 0.3rem 0;
    }

    .show-profile .profile-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }
    .show-profile .post-image {
      margin-top: 1rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center;
      background-size: cover;
    }
    .react {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.5rem 0;
    }
    .react .flex-wrap {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }

    .react svg:hover {
      fill: #1d9bf0;
    }
  }
}
</style>
