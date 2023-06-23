<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    <!-- import EditTutorForm from './components/EditTutorForm.vue.js' -->
    <div class="d-flex space-around">

      <router-link :to="{ name: 'Home' }">
        <h3><i class="mdi mdi-home"></i></h3>
      </router-link>

      <router-link :to="{ name: 'Dashboard' }">
        <h3><i class="mdi mdi-library"></i></h3>
      </router-link>


      <router-link :to="{ name: 'Channel' }">
        <h3><i class="mdi mdi-message"></i></h3>
      </router-link>

      <router-link :to="{ name: 'Account' }">
        <h3><i class="mdi mdi-account"></i></h3>
      </router-link>
    </div>

  </footer>

  <Modal id="editTutor">
    <!-- <EditTutorForm /> -->
    <template #header>
      <div>Create User</div>
    </template>

    <template #body>
      <EditTutorForm />
    </template>
  </Modal>
  <Modal id="editStudent">
    <EditStudentForm />
  </Modal>
  <Modal id="tutorSubject">
    <TutorSubjectForm />
  </Modal>

  <Modal id="channelModal">
    <template #header>
      <div>Create Channel</div>
    </template>

    <template #body>
      <ChannelForm />
    </template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import ChannelForm from "./components/Forms/ChannelForm.vue"
import Modal from "./components/Util/Modal.vue"

import RoomForm from "./components/Forms/RoomForm.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Modal, ChannelForm }
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
// body {
//   background-image: url('./assets/img/homepage-background.png');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }


footer {
  display: grid;
  place-content: center;
  height: 32px;
}




//NOTE - bring to account page
// body {
//   background-image: url('./assets/img/account-background.png');
//   border-image-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }
</style>
