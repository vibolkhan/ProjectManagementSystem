<template>
    <v-app-bar app elevate-on-scroll elevation="2" color="#0097A7">
        <!-- select menu -->
        <v-toolbar-title class="white--text">
            Select a project
        </v-toolbar-title>
        <v-icon color="white">mdi-menu-down</v-icon>
        <v-spacer/>
        <!-- app title -->
        <v-toolbar-title class="white--text">
            Project Management
        </v-toolbar-title>
        <v-spacer/>
        <!-- status -->
        <div class="pa-6">
            <v-badge :content="2" color="orange" offset-y="10" offset-x="12">
                <v-icon color="white" size="28">mdi-bell</v-icon>
            </v-badge>
        </div>
        <!-- user menu -->
        <div class="d-flex align-center">
            <v-avatar size="45">
                <v-badge dot bottom color="green" offset-y="8" offset-x="14">
                <v-avatar size="36">
                  <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-avatar>
              </v-badge>
            </v-avatar>
            <v-list-item class="px-2">
                <!-- username -->
                <v-list-item-title class=" white--text">
                    Vibol Khan
                </v-list-item-title>
                <!-- user dropdown menu  -->
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon color="white">mdi-menu-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list-item-group>
                    <v-list class="px-2" dense>
                      <!-- menu item -->
                      <v-list-item
                        v-for="(menu, idx) in menus"
                        :key="idx"
                        :to="menu.action"
                      >
                        <v-list-item-icon class="mr-2">
                        <v-icon left>{{ menu.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                        <span class="d-inline-block capitalize-first-letter">
                          {{ menu.title }}
                        </span>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-list-item-group>
                </v-menu>
            </v-list-item>
        </div>
        <v-router></v-router>
    </v-app-bar>
</template>

<script>
  export default {
    name: "TopbarView",
    data() {
      return {
        menus: [
        {
          title: "My account",
          icon: 'mdi-account',
          action: '',
        },
        {
          title: "Signout",
          icon: 'mdi-logout-variant',
          action: 'logout',
        },
      ],
       
      };
    },
  };
  </script>
  
<style scoped>

</style>
  