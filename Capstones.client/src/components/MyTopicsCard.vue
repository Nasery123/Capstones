<template>
    <section class="row">
        <div class="col-md-4 col-10 py-2">
            <div class="card">
                <h3>Subject: {{ myTopicsProp?.subject }}</h3>
                <h3>Level: {{ myTopicsProp?.level }}</h3>
                <h5>test</h5>
            </div>
        </div>
    </section>
</template>


<script>
import { computed } from 'vue';
import { Topic } from '../models/Topic.js';
import { AppState } from '../AppState.js';

export default {

    props: {
        myTopicsProp: { type: Topic, required: true }
    },
    setup() {
        return {

            //topics: computed(() => AppState.topics),
            // myTopics: computed(() => AppState.myTopics)
        }
    }
}
</script>


<style lang="scss" scoped>
</style>
