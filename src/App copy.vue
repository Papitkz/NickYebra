<template>
  <v-app>
    <v-main>
      <v-icon size="x-large" fixed @click="menu = !menu" color="primary" class="top-right-button menu-icon" large
        v-if="menu == false">mdi-menu</v-icon>
      <v-icon size="x-large" fixed @click="menu = !menu" color="primary" class="top-right-button menu-icon" large
        v-else>mdi-close</v-icon>

      <transition name="menu-transition">
        <v-card class="menu-card" v-if="menu" @click.stop>
          <v-list class="horizontal-list">
            <v-list-item v-for="(item, index) in menuItems" :key="index" @click="handleMenuItemClick(item)">
              <v-list-item-title style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">{{ item
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </transition>

      <div>

        <section id="home" ref="homeSection"
          :class="{ 'section-reached': hasSectionBeenReached('homeSection') }">
          <v-parallax src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" height="100vh"
            class="gradient-parallax">
            <v-row class="fill-height" align="center" justify="center" no-gutters>
              <v-col class="text-center white--text" cols="12">
                <h1>HOME</h1>
                <p>Welcome to our website!</p>
              </v-col>
            </v-row>
          </v-parallax>
        </section>

        <section id="about" ref="aboutSection"
          :class="{ 'section-reached': hasSectionBeenReached('aboutSection') }">
          <v-parallax src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" height="100vh"
            class="gradient-parallax">
            <v-container style="height: 100%;">
              <v-row align="start" style="height: calc(100% - 120px);">
                <v-col cols="12" md="4">
                  <p class="color-ivory"
                    style=" font-family: 'Suisse'; color: black !important;font-size: clamp(21px, 2vw, 22px)"
                    :style="{
                      letterSpacing: '0.12px',
                      textAlign: 'left',
                      transition: 'font-size 0.5s ease-out',
                      transition: 'opacity 1s ease'
                    }">
                    About
                  </p>
                </v-col>
                <v-col cols="12" md="4" :class="!isMobile ? 'mt-n5' : ''">
                  <p class="color-ivory"
                    style="  font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                    :style="{
                      letterSpacing: '0.12px',
                      textAlign: 'left',
                      transition: 'font-size 0.5s ease-out',
                      transition: 'opacity 1s ease'
                    }">
                    <v-row>
                      <v-col>
                        <h1 :style="{ 'font-size': isMobile ? 'clamp(21px, 42px, 42px)' : 'clamp(21px, 100px, 100px)' }">
                          12+</h1>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Years of experience
                        <hr :class="isMobile ? 'mt-5' : 'mt-12'" />
                      </v-col>
                    </v-row>
                    <v-row style :style="{ marginTop: isMobile ? '6%' : '15%' }">
                      <v-col>
                        I'm constantly searching for innovative ideas in order to deliver what is the best in terms of
                        interaction and user experience. Also I relish the opportunity to be involved in projects at the
                        concept stage where I can introduce my ideas and help to shape the course of projects from start to
                        end.
                      </v-col>
                    </v-row>
                  </p>
                </v-col>
                <v-col cols="12" md="4" :class="!isMobile ? 'mt-n5' : ''">
                  <p class="color-ivory"
                    style=" font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                    :style="{
                      letterSpacing: '0.12px',
                      textAlign: 'left',
                      transition: 'font-size 0.5s ease-out',
                      transition: 'opacity 1s ease'
                    }">
                    <v-row>
                      <v-col :style="{ 'font-size': isMobile ? 'clamp(21px, 42px, 42px)' : 'clamp(21px, 100px, 100px)' }">
                        08
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Cities I've lived
                        <hr :class="isMobile ? 'mt-5' : 'mt-12'" />
                      </v-col>
                    </v-row>
                    <v-row :style="{ marginTop: isMobile ? '6%' : '15%' }">
                      <v-col>
                        I'm capable of presenting and discussing my ideas and designs with clients and I have the great
                        ability of communicate with my team and colleagues . I'm dedicated and hardworking designer and
                        always try to improve my techniques and continue to learn new skills.
                      </v-col>
                    </v-row>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>

        <section id="blog" ref="blogSection"
          :class="{ 'section-reached': hasSectionBeenReached('blogSection') }">
          <v-parallax :height="isMobile ? 'auto' : '100vh'" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            class="gradient-parallax">
            <v-container style="height: 100%;">
              <v-row align="start">
                <v-col cols="12" md="4">
                  <p class="color-ivory"
                    style=" font-family: 'Suisse'; color: black !important;font-size: clamp(21px, 2vw, 22px)"
                    :style="{
                      letterSpacing: '0.12px',
                      textAlign: 'left',
                      transition: 'font-size 0.5s ease-out',
                      transition: 'opacity 1s ease'
                    }">
                    Blog
                  </p>
                </v-col>
              </v-row>

              <v-row v-if="isMobile">
                <v-col cols="12">
                  <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(work, index) in workDetails" :key="index">
                      <v-card class="mx-auto" max-width="500" style="background-color:transparent">
                        <br />
                        <v-img :src="work.imageUrl" height="250px" contain></v-img>

                        <v-card-title style=" font-family: 'Suisse'; color: black !important;font-size: clamp(21px, 2vw, 22px)">
                          {{ work.title }}
                        </v-card-title>

                        <v-card-text>
                          <p><b>Years :</b> {{ work.years }}</p>
                          <p><b>Position :</b> {{ work.position }}</p>
                          <p><b>Details :</b><br />{{ work.details }}</p>
                        </v-card-text>
                      </v-card>
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
              </v-row>

              <v-row v-else v-for="(work, index) in workDetails" :key="index" :class="{
                'blog-item': true,
                'one-column': work.showDetails,
                [`blog-item-${index % 2}`]: !work.showDetails
              }">
                <v-col cols="12" :md="work.showDetails ? 12 : 6">
                  <div class="work-details">
                    <v-row no-gutters="">
                      <h2 style="  font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 3vw, 22px)"
                        :style="{
                          letterSpacing: '0.12px',
                          textAlign: 'left',
                          transition: 'font-size 0.5s ease-out',
                          transition: 'opacity 1s ease'
                        }">
                        {{ work.title }}
                      </h2>
                      <label class="switch ml-5 " :class="!isMobile ? 'mt-2': ''">
                        <input type="checkbox" v-model="work.showDetails">
                        <span class="slider"></span>
                      </label>
                    </v-row>
                    <br />
                    <transition name="fade">
                      <div v-if="work.showDetails">
                        <p style=" font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                          :style="{
                            letterSpacing: '0.12px',
                            textAlign: 'justify',
                            transition: 'font-size 0.5s ease-out',
                            transition: 'opacity 1s ease'
                          }"><b>Years :</b> {{ work.years }}</p>
                        <p style=" font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                          :style="{
                            letterSpacing: '0.12px',
                            textAlign: 'justify',
                            transition: 'font-size 0.5s ease-out',
                            transition: 'opacity 1s ease'
                          }"><b>Position :</b>{{ work.position }}</p>
                        <p style=" font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                          :style="{
                            letterSpacing: '0.12px',
                            textAlign: 'justify',
                            transition: 'font-size 0.5s ease-out',
                            transition: 'opacity 1s ease'
                          }"><b>Details :</b><br />{{ work.details }}</p>
                      </div>
                    </transition>
                  </div>
                </v-col>
                <v-col cols="12" md="6" v-if="!work.showDetails" class="text-center">
                  <transition name="fade">
                    <v-img width="550px" :src="work.imageUrl" height="400" contain style="max-width: 100%;" />
                  </transition>
                </v-col>
              </v-row>
            </v-container>

          </v-parallax>
        </section>


        <section id="contact" ref="contactSection"
          :class="{ 'section-reached': hasSectionBeenReached('contactSection') }">
          <v-parallax src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" height="100vh"
            class="gradient-parallax" color="#1e1f24">
            <v-container style="height: 100%;">
              <v-row align="start" style="height: calc(100% - 120px);">
                <v-col cols="12" md="8">
                  <p class="color-ivory"
                    style=" padding-top: 1.5em; font-family: 'Suisse'; color: #fffbe9 !important;font-size: clamp(21px, 2vw, 22px)"
                    :style="{
                      letterSpacing: '0.12px',
                      textAlign: 'left',
                      transition: 'font-size 0.5s ease-out',
                      transition: 'opacity 1s ease'
                    }">
                    Thanks for visit.
                  </p>
                </v-col>

                <v-col cols="12" md="4">
                  <p class="color-ivory"
                    style=" padding-top: 1.5em; font-family: 'Suisse'; color: #fffbe9 !important; font-size: 22px ">
                    <v-row>
                      <v-col>
                        Contact
                      </v-col>
                    </v-row>
                    <br>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                      <v-col>
                        For work inquires feel free to get in
                      </v-col>
                    </v-row>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                      <v-col>
                        touch with me
                      </v-col>
                    </v-row>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                      <v-col>
                        <u>nickyebra@gmail.com</u>
                      </v-col>
                    </v-row>
                    <br>
                    <br>
                    <br>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                      <v-col>
                        Social
                      </v-col>
                    </v-row>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                      <v-col>
                        <v-icon>mdi-instagram</v-icon> Instagram
                      </v-col>
                    </v-row>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                      <v-col>
                        <v-icon>mdi-linkedin</v-icon>LinkedIn
                      </v-col>
                    </v-row>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                      <v-col>
                        <v-icon>mdi-facebook</v-icon>Facebook
                      </v-col>
                    </v-row>
                    <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                      <v-col>
                        <v-icon>mdi-twitter</v-icon>Twitter
                      </v-col>
                    </v-row>
                  </p>
                </v-col>

              </v-row>

              <v-row style="position: absolute; bottom: 0; left:0; right: 0;">
                <v-col cols="12" class="text-left">
                  <p style="font-weight: 400; display: block; margin-bottom: 0.2em;margin-left:3%;
                      font-family: 'Suisse'; color: #fffbe9 !important; font-size: clamp(24px, 12vw, 140px)"
                  > Let's talk </p>
                </v-col>
              </v-row>

            </v-container>
          </v-parallax>
        </section>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GradientParallax",
  data() {
    return {
      menu: false,
      menuItems: ['Home', 'About', 'Blog', 'Contact'],
      workDetails: [
        {
          title: 'Tiktok',
          years: '2 Years and 4 Months',
          position: 'Lead, Growth Strategy & GTM',
          details: `In my role, I orchestrate the strategy and operations planning cycle, collaborating closely with the TikTok Shop team. My efforts in providing C-level insights have been pivotal in driving consistent business expansion, enhancing resource allocation, and fostering cross-functional alignment.
                          Apart from these, I redefined our team's organizational structure to better align with our strategic objectives. Pioneering automated account creation as part of our AI GTM strategies, I’ve optimized market entry, enhanced engagement, and enabled targeted marketing efforts.
                          I was also able to improve operational efficiency and team coordination through the successful deployment of a bespoke CRM system.`,
          showDetails: false,
          imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/tiktok2_5381bbf7-d33d-4c31-9cbd-6dad2ef3b2ce.png?v=1734596856',
        },
        {
          title: 'Doordash',
          years: '1 Year and 1 Month',
          position: 'Lead of Product & Platform Partnerships ',
          details: `My tenure as Lead of Product & Platform Partnerships was a period of significant growth and strategic achievements. In this role, I managed a multi-billion-dollar portfolio, where I successfully closed over 15 large-scale global deals through strategic negotiations. My focus was not only on expanding our business footprint but also on ensuring the precision and integrity of our partnerships.
                    Using data analytical skills [SQL & Python], I was able to identify and resolve major data discrepancies across 21 partners, which were critical in recovering multimillion-dollar missing revenues. I also spearheaded the development and structuring of new partnerships, collaborating effectively with cross-functional teams. This approach not only strengthened our partner network but also led to surpassing our set sales quotas for three consecutive quarters by up to 228%.`,
          showDetails: false,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DoorDash_Logo.svg/2560px-DoorDash_Logo.svg.png',
        },
      ],
      observer: null,
      reachedSections: new Set(),
      windowWidth: window.innerWidth

    };
  },
  computed: {
    isMobile() {
      return this.windowWidth < 960;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.initIntersectionObserver();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.destroyIntersectionObserver();
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleMenuItemClick(item) {
      // Close menu
      this.menu = false;

      // Scroll to selected section
      const sectionId = item.toLowerCase();
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
      });
    },
    handleScroll() {
      if (window.scrollY > 50) { // Adjust 50 to your desired scroll threshold
        this.menu = false;
      }
    },
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const sectionName = entry.target.id + 'Section';
          if (entry.isIntersecting && !this.reachedSections.has(sectionName)) {
            // Only add to reachedSections if it hasn't been reached before
            this.reachedSections.add(sectionName);
          }
        });
      }, options);

      // Observe each section
      this.observeSection('homeSection');
      this.observeSection('aboutSection');
      this.observeSection('blogSection');
      this.observeSection('contactSection');
    },
    destroyIntersectionObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
    observeSection(sectionName) {
      const section = this.$refs[sectionName];
      if (section) {
        this.observer.observe(section);
      }
    },
    hasSectionBeenReached(sectionName) {
      return this.reachedSections.has(sectionName);
    },
    autoResponsiveFontSize(baseSize) {
      const scaleFactor = this.windowWidth / 1920; // Assuming 1920px is your base design width
      const newSize = baseSize * scaleFactor;
      return Math.max(newSize, baseSize / 2); // Optional: set a minimum font size
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped>
.gradient-parallax::before {
  content: "";
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.gradient-parallax .v-parallax__image-container {
  background: transparent !important;
}

.v-parallax>.v-row,
.v-parallax>div {
  position: relative;
  z-index: 1;
}

section {
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth;
  /* Add smooth scrolling */
  opacity: 0;
  /* Initially hidden */
  transform: translateY(20px);
  /* Slight downward offset */
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  /* Smooth transition */
}

section.section-reached {
  opacity: 1;
  /* Fade in when visible */
  transform: translateY(0);
  /* Move to final position */
}

.top-right-button {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1100;
}

.menu-card {
  position: fixed; /* Make the menu card fixed */
  top: 0;           /* Stick it to the top */
  left: 0;          /* Stick it to the left */
  z-index: 1099;
  height: 250px;
  width: 100%;
  display: flex; /* Use flexbox for centering */
  justify-content: center;
  align-items: center;
  background-color: white; /* Add a background color for better visibility */
}

/* Style the list to be horizontal */
.horizontal-list {
  display: flex;
  padding: 0;
  /* Remove default padding */
  justify-content: center;
  /* Center the list items horizontally */
}

.horizontal-list .v-list-item {
  flex-shrink: 0;
  /* Prevent items from shrinking */
}

/* Transition for the menu */
.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: all 0.3s ease;
}

.menu-transition-enter-from,
.menu-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Menu Icon Transition */
.menu-icon {
  transition: transform 0.3s ease-in-out;
}

.menu-icon:hover {
  transform: scale(1.8);
  /* Slightly larger on hover */
}

.switch {
  font-size: 10px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #adb5bd;
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.27em;
  bottom: 0.25em;
  background-color: #adb5bd;
  transition: .4s;
}

input:checked+.slider {
  background-color: #293037;
  border: 1px solid #adb5bd;
}

input:focus+.slider {
  box-shadow: 0 0 1px #464c53;
}

input:checked+.slider:before {
  transform: translateX(1.4em);
  background-color: #fff;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

/* Blog Item Styling for 2 Columns */
.blog-item {
  padding-right: 16px;
  padding-left: 16px;
}

.blog-item-0 {
  /* Styles for the first item in the pair */
  /* padding-right: 16px; */
}

.blog-item-1 {
  /* Styles for the second item in the pair */
  /* padding-left: 16px; */
}

/* One Column Layout */
.one-column {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>

<style lang="scss">
@import "./assets/fonts/fonts.css";

@font-face {
  font-family: "Suisse";
  src: url("../src/assets/font/fonnts.com-SuisseIntl-Light.ttf") format("opentype");
  font-style: normal;
}
</style>