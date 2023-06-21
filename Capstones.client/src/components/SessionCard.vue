<template>
  <div class="component">
    <section class="row">
      <div class="card ">
        <div>
          <div>
            <!-- <div class="d-flex"> -->
            <div class="d-flex">
              <img class="img-fluid img " :src="topicsProp.tutor.picture" alt="">
              <p class="mt-4">{{ topicsProp.tutor.name }}</p>
            </div>
            <h4>Subject: {{ topicsProp.subject }}</h4>
            <h5>Level: {{ topicsProp.level }}</h5>
            <h5>Hourly Rate ${{ topicsProp.hourlyRate }}</h5>
            <!-- <div>
              <input v-model="editable.description" id="description" type="text" placeholder="Description">
            </div> -->


          </div>
          <div>
            <p><i class="mdi mdi-star"></i></p>
          </div>

          <button @click="createStudentSessionRequest()" class="btn btn-primary">Request Tutor</button>
        </div>
      </div>
      <!-- </div> -->
    </section>

  </div>
</template>


<script>
import { computed, ref } from "vue";
// import { AppState } from '../AppState';

import { Topic } from "../models/Topic.js";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { sessionsService } from "../services/SessionsService.js"
import { useRoute } from "vue-router";

// import { computed, reactive, onMounted } from 'vue';
export default {

  props: {
    topicsProp: { type: Topic, required: true }
  },

  setup() {
    // const editable = ref({})
    const route = useRoute()
    return {
      // editable,
      topics: computed(() => AppState.topics),


      async createStudentSessionRequest() {
        try {
          // const userId = userInfo.id
          // const formData = editable.value
          const topicId = route.params.topicId
          const creatorId = route.params.creatorId
          // const sessionId = route.params.sessionId
          await sessionsService.createStudentSessionRequest(creatorId, topicId)
        } catch (error) {
          Pop.error(error)
        }
      }


    }
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 100px;
  width: 110px;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>
