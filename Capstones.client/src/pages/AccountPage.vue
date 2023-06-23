<template>
  <div class="accountpage">
    <div class="about text-center">
      <h1>Welcome {{ account.name }}</h1>
      <!-- <img class="rounded" :src="account.picture" alt="" /> -->
      <!-- <p>{{ account.email }}</p> -->

    </div>

    <!-- //STUB - Tutor account info page -->
    <section class=" container-fluid">

      <TutorAccountCard :ProfileProp="a" />

    </section>

    <section class="row">
      <div>
        <h5>My Topics:</h5>
      </div>
      <div class="col-12">
        <div class="" v-for="t in myTopics" :key="t.id">
          <MyTopicsCard :myTopicsProp="t" />
        </div>
      </div>
    </section>
    <section class="row">
      <div>
        <h5>My Requests from students:</h5>
      </div>
      <div class="col-md-3" v-for="t in tutorSessions" :key="t.id">

        <div :class="{ 'bg-danger': t.status == 'denied' }">
          {{ t.status }}
          <button @click="acceptSession(t, t.id)">Accept</button>
          <button @click="denySession(t, t.id)">Deny</button>
        </div>

      </div>
    </section>
    <section class="row">
      <div>
        <h5>My requests as a student:</h5>
      </div>
      <div class="col-md-3" v-for="t in studentSessions" :key="t.id">
        <!-- {{ t }} -->
        <!-- {{ t.tutor.name }} -->
        {{ t.topic }}
        <p>

        </p>

        <!-- <img :src="t.tutor.picture" alt=""> -->
      </div>
    </section>

    <section class="row">
      <div class="d-flex" v-if="account.isTutor == true">
        <button data-bs-toggle="modal" data-bs-target="#tutorSubject">Add Subject / Level</button>
        <button>Edit Profile</button>
      </div>


    </section>


    <section class="container-fluid">
      <div class="row m-1">
        <div class="card">
          <!-- {{ account?.bio }} -->
          <!-- <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repellat qui repellendus, id explicabo
          sunt mollitia nesciunt aliquam suscipit magnam quae eligendi quasi vitae dolorum!</p> -->
        </div>
      </div>
    </section>

    <section class="container-fluid">
      <div class="row m-1">

      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger.js';
import { topicsService } from '../services/TopicsService.js';
import { sessionsService } from '../services/SessionsService.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute()

    async function getMyTopics() {
      try {
        // const tutorId = route.params.id
        await topicsService.getMyTopics()
      } catch (error) {
        logger.error(error)
      }
    }
    async function getMyStudentSessions() {
      try {
        // const tutorId = route.params.id
        await accountService.getStudentSessions()
      } catch (error) {
        logger.error(error)
      }
    }
    async function getMyTutorSessions() {
      try {
        // const tutorId = route.params.id
        await accountService.getTutorSessions()
      } catch (error) {
        logger.error(error)
      }
    }
    onMounted(() => {
      getMyTopics()
      getMyStudentSessions()
      getMyTutorSessions()
    })


    return {
      async acceptSession(session, sessionId) {
        try {
          session.status = 'confirmed'
          logger.log('sessionId and session', session, sessionId)
          // debugger
          // const sessionId = route.params.id
          await sessionsService.acceptSession(sessionId)
          logger.log('CHANGING SESSION TO ACCEPTED')
        } catch (error) {
          Pop.error(error)
        }
      },
      async denySession(session, sessionId) {
        try {
          session.status = 'denied'
          logger.log('this session is denied', session, sessionId)
          await sessionsService.denySession(sessionId)
          // logger.log('throw me out the building')
        } catch (error) {
          Pop.error(error)
          // logger.log(error)
        }
      },


      account: computed(() => AppState.account),
      myTopics: computed(() => AppState.myTopics),
      tutorSessions: computed(() => AppState.tutorSessions),
      studentSessions: computed(() => AppState.studentSessions),
      // session: computed(() => AppState.session)

    }
  }
}


</script>

<style scoped>
.profile {
  height: 200px;
  width: 230px;
}

img {
  max-width: 100px;
}
</style>
