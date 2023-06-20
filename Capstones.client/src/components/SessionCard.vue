<template>
  <div class="component">
    <section class="row">
      <div class="card ">
        <h5>{{ topicsProp.hourlyRate }}</h5>
        <p>{{ topicsProp.tutor.hourlyRate }}</p>
        <img class="img-fluid img" :src="topicsProp.tutor.picture" alt="">
        <p>{{ topicsProp.tutor.email }}</p>
        <!-- <p>test</p> -->
        <!-- <h5>{{ account.subject }}</h5>
        <h5>{{ account.hourlyRate }}</h5> -->

      </div>
    </section>

  </div>
</template>


<script>
import { computed } from "vue";
// import { AppState } from '../AppState';

import { Topic } from "../models/Topic.js";
import { AppState } from "../AppState.js";

// import { computed, reactive, onMounted } from 'vue';
export default {

  props: {
    topicsProp: {type: Topic, required: true}
  },

  setup(){
  return { 
    topics: computed(()=> AppState.topics)
   }
  }
};
</script>


<style lang="scss" scoped>
img{
  height: 100px;
  width: 110px;
  aspect-ratio:1/1;
  border-radius: 50%;
}

</style>