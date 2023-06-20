<template>
  <div class="row m-1 ">
    <div class="card ">
      <div class="d-flex ">
        <img class="img-fluid profile"
          src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
          alt="">
        <div class="flex-column">
          <p>{{ account.schoolName }}</p>
        </div>
      </div>

      <div class="">
        <p>{{ account.subject }}</p>
        <p>{{ account.email }}</p>
        <!-- <p>average rating</p>
          <p>tutor's major</p> -->
        <p><b>{{ account.name }}</b></p>
        <p>{{ account.hourlyRate }}</p>
        <p>{{ account.bio }}</p>
        <!-- <p>science subject and $/hr</p> -->
      </div>

    </div>

  </div>
</template>


<script>
import { computed } from "vue"
import { Profile } from "../models/Account.js"
import { AppState } from "../AppState.js"
export default {
  props: {
    ProfileProp: { type: Profile, required: true }
  },
  setup() {
    return {
      account: computed(() => AppState.account)

    }
  }
}
</script>


<style lang="scss" scoped>
</style>
