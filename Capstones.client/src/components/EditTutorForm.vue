<template>
  <!-- <form @submit.prevent=" createUser()"> -->
  <form @submit.prevent="handleSubmit">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="Name" v-model="editable.name">
      <label for="floatingPassword">Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="email" v-model="editable.email">
      <label for="floatingPassword">Email</label>
    </div>
    <!-- <div


        class="form-floating mb-3">
        <select class="form-select" aria-label="Default select example">
          <option>BSU</option>
          <option>CWI</option>
          <option>ISU</option>
        </select> -->
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="School Name" v-model="editable.schoolName">
      <label for="floatingPassword">School Name</label>
    </div>




    <!-- <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Hourely Rate"
            v-model="editable.hourlyRate">
          <label for="floatingPassword">Hourly Rate</label>
        </div> -->
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="something about you" v-model="editable.bio">
      <label for="floatingPassword">Bio</label>
    </div>
    <div class="checkbox">
      <label class="check">Are you a Tutoring?</label>
      <input v-model="editable.isTutor" name="isTutor" class="form-check-input mt-0" type="checkbox" value=""
        aria-label="Checkbox for following text input">

    </div>
    <!-- <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="editable.capacity">
        <label for="floatingPassword">Event Capacity</label>
      </div> -->


    <!-- <div v-if="isTutor== true">
      <label for="">Teachable Subjects</label>
      <input type="text">
    </div> -->

    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create A User Account</button>
    </div>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref, watchEffect } from 'vue';
import { accountService } from "../services/AccountService.js";
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {


  setup() {
    const editable = ref({})
    const router = useRouter()


    watchEffect(() => {
      editable.value = { ...AppState.account }
    })


    return {
      editable,

      async handleSubmit() {
        try {
          // debugger
          await accountService.editAccount(editable.value)
          // await accountService.becomeTutor(editable.value)

          Modal.getOrCreateInstance('#editTutor').hide()
          editable.value = {}
          router.push({ name: 'Dashboard' })
        } catch (error) {
          logger.error(error)
        }
      }

      // async createUser(){
      //   try {
      //     const formData = editable.value
      //     const newUser = await accountService.createUser(formData)
      //     Modal.getOrCreateInstance('#createUser').hide()
      //     editable.value = {}
      //     router.push({name:'Dashboard', params: {id:newUser.id}})

      //   } catch (error) {
      //     logger.error(error)
      //     Pop.toast(error.message, 'error')
      //   }
      // }
    }
  }
}

</script>


<style lang="scss" scoped>
</style>
