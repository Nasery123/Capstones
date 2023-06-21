<template>
    <section class="row">
        <div class="col-md-4 col-10 py-2">
            <div class="card">
                <h4>Subject: {{ myTopicsProp?.subject }}</h4>
                <h4>Level: {{ myTopicsProp?.level }}</h4>
                <h5>Hourly Rate: ${{ myTopicsProp?.hourlyRate }}</h5>
                <button @click="deleteMyTopic(myTopicsProp?.id)" class="mdi mdi-delete btn btn-danger"></button>

            </div>
        </div>
    </section>
</template>


<script>
import { computed } from 'vue';
import { Topic } from '../models/Topic.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { topicsService } from '../services/TopicsService.js';

export default {

    props: {
        myTopicsProp: { type: Topic, required: true }
    },
    setup(props) {
        return {
            async deleteMyTopic(topicId) {
                try {
                    console.log('TOPIC ID', topicId)
                    // const topic = AppState.topics.find(t => t.accountId == AppState.account.id)
                    await topicsService.deleteTopic(topicId)
                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }

            },

            topics: computed(() => AppState.topics),
            myTopics: computed(() => AppState.myTopics)
        }
    }
}
</script>


<style lang="scss" scoped>
</style>
