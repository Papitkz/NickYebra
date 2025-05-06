<template>
    <v-app>
      <!-- v-if="storeData.userInformation.EmployeeCode !== undefined" -->
      <v-navigation-drawer  :model-value="drawer" :permanent="!mobile" @update:model-value="handleDrawerClose">
        <v-list class="pa-2">
          <AppCustomLogo />
          <div class="mt-4 d-flex justify-center align-center">
            <v-icon color="white" icon="mdi-clock-outline" class="mr-2" />
            <p class="font-weight-bold">{{ time }}</p>
          </div>
          <div v-for="link in links" :key="link.title">
            <v-list-subheader>
              <h3>{{ link.title }}</h3>
            </v-list-subheader>
            <v-list-item v-for="child in link.children" :key="child.title" :title="child.title"
              :prepend-icon="child.icon" :color="child.color" @click="gotoRoute(child)"
              class="rounded-lg" active-class="text-primary">
              <template #prepend>
                <v-icon color="rgb(110 101 251)" :icon="child.icon"></v-icon>
              </template>
            </v-list-item>
          </div>
        </v-list>
        <template #append>
          <div class="w-100 pa-1">
            <v-btn @click="logout"  color="#4B729D"  size="small" prepend-icon="mdi-logout" block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
  
      <v-app-bar color="#4B729D"  prominent>
        <v-app-bar-nav-icon  variant="text" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title color="rgb(110 101 251)">VUE 3 TEMPLATE <sup>v1</sup></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" size="30" class="my-auto mr-2" color="white" @click="changeTheme" />
      </v-app-bar>
  
      <v-overlay v-model="loading" class="align-center justify-center">
        <v-progress-circular indeterminate color="primary" size="70">
          <v-icon icon="mdi-laravel" />
        </v-progress-circular>
      </v-overlay>


      <v-main>
        <v-container fluid>
          <router-view v-slot="{ Component }">
            <transition name="slide-fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </v-container>
      </v-main>
    </v-app>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  import { useTheme } from "vuetify";
  import { useRouter } from 'vue-router';
  import AppCustomLogo from './views/AppCustomLogo.vue'
  import { useMainStore } from './stores/mainStore';

  const storeData = useMainStore()
  const drawer = ref(false);
  const time = ref(new Date().toLocaleTimeString());
  const mobile = ref(false);
  const theme = useTheme();
  const router = useRouter();
  const loading = ref(false);
  const user = ref({});
  const historyDialog = ref(false);
  
  const isDark = computed(() => theme.global.current.value.dark);
  
  const links = [
    {
        title: "Home",
        children: [
            { title: "HomeView", icon: "mdi-home", route: "HomeView", color: "green" },
        ],
    },
  ];
  
  // Methods
  const openHistory = () => {
      historyDialog.value = true;
  }
  const closeHistory = () => {
      historyDialog.value = false;
  }
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  
  const handleDrawerClose = (isOpen) => {
    if (!isOpen) {
        // Emit an event or perform an action when the drawer is closed
    }
  };
  
  const gotoRoute = (item) => {
    loading.value = true;
    setTimeout(() => {
        router.push(item.route);
        loading.value = false;
    }, 300);
  };
  
  function changeTheme() {
    const changeThemeTo = theme.global.current.value.dark ? "light" : "dark";
    theme.global.name.value = changeThemeTo;
    localStorage.setItem("theme", changeThemeTo);
  }
  
  const logout = () => {
    // Implement logout functionality
    router.push('/LoginPage')
    // storeData.userInformation = {}

  };
  </script>
  
  <style lang="scss">
  @import './assets/fonts/fonts.css';
  </style>
  
  <style>
  body {
      font-family: 'Poppins-SemiBold', Arial, sans-serif; /* Fallback to Arial and sans-serif */
  }
  
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  
  /* Responsive styles */
  @media (max-width: 600px) {
    .v-navigation-drawer {
      width: 80%; /* Adjust width for mobile */
    }
    .v-app-bar {
      font-size: 1.2rem; /* Adjust font size for mobile */
    }
  }
  </style>