<template>
  <v-app>
    <v-main>
      <v-icon size="x-large" fixed @click="menu = !menu"  color="primary"
        class="top-right-button menu-icon" large  v-if="menu == false">mdi-menu</v-icon>
      <v-icon size="x-large" fixed @click="menu = !menu"  color="primary"
        class="top-right-button menu-icon" large  v-else>mdi-close</v-icon>

      <transition name="menu-transition">
        <v-card class="menu-card" v-if="menu" @click.stop >
          <v-list class="horizontal-list">
            <v-list-item
              v-for="(item, index) in menuItems" :key="index"  @click="handleMenuItemClick(item)" >
              <v-list-item-title  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}" >{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </transition>

      <div>
        
        <section id="home" ref="homeSection" :class="{ 'section-reached': hasSectionBeenReached('homeSection') }">
          <v-parallax   src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  height="100vh"  class="gradient-parallax">
            <v-row  class="fill-height" align="center" justify="center" no-gutters >
              <v-col  class="text-center white--text"  cols="12" >
                <h1>HOME</h1>
                <p>Welcome to our website!</p>
              </v-col>
            </v-row>
          </v-parallax>
        </section>

        <section id="about" ref="aboutSection" :class="{ 'section-reached': hasSectionBeenReached('aboutSection') }">
          <v-parallax  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  height="100vh"   class="gradient-parallax">
          <v-container style="height: 100%;">
            <v-row align="start" style="height: calc(100% - 120px);">
              <v-col cols="12" md="4">
                <p class="color-ivory" style=" font-family: 'Suisse'; color: black !important;font-size: clamp(21px, 2vw, 22px)"
                  :style="{  letterSpacing: '0.12px', textAlign: 'left',
                   transition: 'font-size 0.5s ease-out' , transition: 'opacity 1s ease' }" >
                   About
                </p>
              </v-col>
                <v-col  cols="12" md="4" :class="!isMobile ? 'mt-n5' : ''">
                  <p class="color-ivory" style="  font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)" 
                  :style="{  letterSpacing: '0.12px', textAlign: 'left',
                   transition: 'font-size 0.5s ease-out' , transition: 'opacity 1s ease' }"
                   >
                  <v-row>
                    <v-col >
                     <h1 :style="{'font-size': isMobile ? 'clamp(21px, 42px, 42px)' : 'clamp(21px, 100px, 100px)'}"> 12+</h1>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      Years of experience
                      <hr :class="isMobile ? 'mt-5':'mt-12'"/>
                    </v-col>
                  </v-row>
                  <v-row style :style="{marginTop : isMobile ? '6%' : '15%'}">
                    <v-col>
                      I'm constantly searching for innovative ideas in order to deliver what is the best in terms of interaction and user experience. Also I relish the opportunity to be involved in projects at the concept stage where I can introduce my ideas and help to shape the course of projects from start to end.
                    </v-col>
                  </v-row>
                </p>
                </v-col>
                <v-col  cols="12" md="4" :class="!isMobile ? 'mt-n5' : ''">
                  <p class="color-ivory" style=" font-family: 'Suisse'; color: black !important;font-size: clamp(14px, 2vw, 22px)"
                  :style="{  letterSpacing: '0.12px', textAlign: 'left',
                   transition: 'font-size 0.5s ease-out' , transition: 'opacity 1s ease' }"
                   >
                   <v-row>
                    <v-col :style="{'font-size': isMobile ? 'clamp(21px, 42px, 42px)' : 'clamp(21px, 100px, 100px)'}">
                      08
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      Cities I've lived
                      <hr :class="isMobile ? 'mt-5':'mt-12'"/>
                    </v-col>
                  </v-row>
                  <v-row :style="{marginTop : isMobile ? '6%' : '15%'}">
                    <v-col>
                      I'm capable of presenting and discussing my ideas and designs with clients and I have the great ability of communicate with my team and colleagues . I'm dedicated and hardworking designer and always try to improve my techniques and continue to learn new skills.
                    </v-col>
                  </v-row>
                </p>
                </v-col>
              </v-row>
          </v-container>
          </v-parallax>
        </section>

        <section id="blog" ref="blogSection" :class="{ 'section-reached': hasSectionBeenReached('blogSection') }">
          <v-parallax src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="  height="100vh" class="gradient-parallax">
            <v-row   class="fill-height" align="center" justify="center"  no-gutters >
              <v-col class="text-center white--text" cols="12"  >
                <h1>BLOG</h1>
                <p>Check out our latest posts.</p>
              </v-col>
            </v-row>
          </v-parallax>
        </section>

        <section id="contact" ref="contactSection" :class="{ 'section-reached': hasSectionBeenReached('contactSection') }">
          <v-parallax  src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" height="100vh" class="gradient-parallax" color="#1e1f24" >
          <v-container style="height: 100%;">
            <v-row align="start" style="height: calc(100% - 120px);">
              <v-col cols="12" md="8">
                <p class="color-ivory" style=" padding-top: 1.5em; font-family: 'Suisse'; color: #fffbe9 !important;font-size: clamp(21px, 2vw, 22px)"
                  :style="{  letterSpacing: '0.12px', textAlign: 'left',
                   transition: 'font-size 0.5s ease-out' , transition: 'opacity 1s ease' }"
                   >
                  Thanks for visit.
                </p>
              </v-col>

              <v-col cols="12" md="4" >
                <p class="color-ivory" style=" padding-top: 1.5em; font-family: 'Suisse'; color: #fffbe9 !important; font-size: 22px "
                  >
                  <v-row >
                    <v-col >
                      Contact
                    </v-col>
                  </v-row>
                  <br>
                   <v-row style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                    <v-col>
                      For work inquires feel free to get in
                    </v-col>
                   </v-row>
                   <v-row  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
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
                   <v-row  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                    <v-col>
                      Social
                    </v-col>
                   </v-row>
                   <v-row  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5">
                    <v-col>
                      <v-icon>mdi-instagram</v-icon> Instagram
                    </v-col>
                   </v-row>
                  <v-row  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                   <v-col>
                    <v-icon>mdi-linkedin</v-icon>LinkedIn
                   </v-col>
                  </v-row>
                  <v-row  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                   <v-col>
                    <v-icon>mdi-facebook</v-icon>Facebook
                   </v-col>
                  </v-row>
                  <v-row  style="font-size: clamp(21px, 2vw, 22px);line-height: 0.5,}">
                   <v-col>
                    <v-icon>mdi-twitter</v-icon>Twitter
                   </v-col>
                  </v-row>
                </p>
              </v-col>

            </v-row>

            <v-row style="position: absolute; bottom: 0; left:0; right: 0;">
              <v-col cols="12" class="text-left">
                <p  style="font-weight: 400; display: block; margin-bottom: 0.2em;margin-left:3%;
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
      observer: null,
      reachedSections: new Set(), // Use a Set to track reached sections
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

.v-parallax > .v-row,
.v-parallax > div {
  position: relative;
  z-index: 1;
}

section {
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth; /* Add smooth scrolling */
  opacity: 0; /* Initially hidden */
  transform: translateY(20px); /* Slight downward offset */
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; /* Smooth transition */
}

section.section-reached {
  opacity: 1; /* Fade in when visible */
  transform: translateY(0); /* Move to final position */
}

.top-right-button {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1100;
}

.menu-card {
  position: fixed;
  z-index: 1099;
  height:250px;
  width: 100%; /* Adjust width to content */
  transform-origin: top right;
  display: flex; /* Add flexbox to the menu card */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

/* Style the list to be horizontal */
.horizontal-list {
  display: flex;
  padding: 0; /* Remove default padding */
  justify-content: center; /* Center the list items horizontally */
}

.horizontal-list .v-list-item {
  flex-shrink: 0; /* Prevent items from shrinking */
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
  transform: scale(1.8); /* Slightly larger on hover */
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