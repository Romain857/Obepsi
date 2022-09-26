<template>
  <div>
    <div>
      <h2>User Profile</h2>
      <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
      <Button v-else class="p-button-primary" @click="login">Log in</Button>
    </div>
    <Button class="p-button-primary" @click="logout">Log out</Button>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      login: () => {
          loginWithRedirect();
        },
        user,
        isAuthenticated
    };
  },
};
</script>