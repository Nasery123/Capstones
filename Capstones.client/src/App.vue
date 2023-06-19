<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>



  <footer class="bg-dark text-light">
    <!-- Made with 💖 by CodeWorks -->
    <h2>add dashboard buttons</h2>
  </footer>

 <Modal id="editTutor">
<EditTutorForm/>
 </Modal>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

// body {
//   background-color: brown;
// }

// bring below to homepage
body {
  background-image: url('./assets/img/homepage-background.png');
  border-image-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

// bring to tutor dashboard page
// body {
//   background-image: url('./assets/img/tutor-dashboard.png');
//   border-image-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }


//NOTE - bring to account page
// body {
//   background-image: url('./assets/img/account-background.png');
//   border-image-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }
</style>
