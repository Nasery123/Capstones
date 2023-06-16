<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <!-- //STUB - Tutor account info page -->
  <section class=" container-fluid">
    <div class="row m-1 ">
      <div class="card ">
        <div class="d-flex ">
          <img class="img-fluid profile"
            src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
            alt="">
          <div class="flex-column">
            <p>Tutor name</p>
            <p>Tutor school</p>
          </div>
        </div>

        <div class="">
          <p>cashapp</p>
          <p>email</p>
          <p>average rating</p>
          <p>tutor's major</p>
          <p>subjects tutor can teach</p>
          <p>math subject and $/hr</p>
          <p>science subject and $/hr</p>
        </div>

      </div>

    </div>
  </section>

  <section class="container-fluid">
    <div class="row m-1">
      <div class="card">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repellat qui repellendus, id explicabo
          sunt mollitia nesciunt aliquam suscipit magnam quae eligendi quasi vitae dolorum!</p>
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
    return {
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
