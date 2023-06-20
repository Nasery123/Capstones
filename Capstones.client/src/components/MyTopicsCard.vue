<template>
    <section class="row">
        <div class="col-md-4 col-10 py-2">
            <div class="card">
                <h3>Subject: {{ topicsProp?.subject }}</h3>
                <h3>Level: {{ topicsProp?.level }}</h3>
            </div>
        </div>
    </section>
</template>


<script>
import { Topic } from '../models/Topic.js';

export default {

    props: {
        topicsProp: { type: Topic, required: true }
    },
    setup() {
        return {

        }
    }
}
</script>


<style lang="scss" scoped>
</style>
