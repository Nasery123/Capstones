<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>

  </div>

  <!-- //STUB - Tutor account info page -->
  <section class=" container-fluid">

    <TutorAccountCard :ProfileProp="a" />

  </section>

  <section class="row">
    <div>
      <h5>My Topics:</h5>
    </div>
    <div class="col-md-3" v-for="t in myTopics">
      <MyTopicsCard :topicsProp="t" />
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
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {

    // async get
    return {
      myTopics: computed(() => AppState.myTopics),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
