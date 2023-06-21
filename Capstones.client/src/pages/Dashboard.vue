<template>
    <div class="dashboard"
        style="background-image: url('https://images.pexels.com/photos/3825880/pexels-photo-3825880.jpeg?cs=srgb&dl=pexels-evie-shaffer-3825880.jpg&fm=jpg');">
        <p>
            students home page
        </p>
        <!-- NOTE student DASHBOARD  -->
        <div class="container-fluid ">
            <div class="row ">
                <div class="col-12">
                    <div class="d-flex justify-content-evenly">
                        <div>
                            <button class="btn btn-primary">STUDENT</button>
                        </div>
                        <div class="btn btn-primary">TUTOR</div>
                    </div>
                </div>
            </div>
            <div v-if="account.isTutor == false" class="row justify-content-center py-3">
                <card class="card py-3 ">
                    <div class="">
                        <div clas="col-12 justify-content-center align-items-center">

                            <div>
                                <h4>Search For Tutor:</h4>
                                <form @submit.prevent="searchTutors()">
                                    <div class="row ">
                                        <div class="justify-content-center">
                                            <div class="col-12 py-1">
                                                <input type="text" v-model="search" placeholder="Subject">
                                            </div>
                                            <div class="row">
                                                <!-- <div class="col-12 py-1">
                                        <input type="text" v-model="searchlevel" placeholder="level of Subject">
                                    </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <button type="submit" class="btn btn-primary">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>

        <div>
            <!-- {{ topics.tutor.name }} -->
            <SessionCard v-for="  t   in   topics  " :key="t.id" :topicsProp="t" />
        </div>


        upcoming sessions cards
        <div class="row justify-content-center text-light">
            Upcoming sessions:
            <div class="row justify-content-center">
                <div class="col-md-3 col-12 card bg-light elevation-3 text-start">

                    <div class="d-flex justify-content-start">
                        <img class="img-fluid profile"
                            src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
                            alt="">
                        <p class="pt-4 ps-2">this guy</p>

                    </div>



                    <div class="">
                        Math/ level 100/Date(july/s/2026)
                    </div>
                    <div class="description">
                        Note: session description
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger.js";
import { topicsService } from "../services/TopicsService.js";
import { tutorsService } from "../services/TutorsService.js";
export default {
    setup() {
        const search = ref('')
        // const searchSubject = ref({})
        return {
            search,
            async searchTutors() {
                try {
                    const searchSubject = search.value
                    // const searchlevel = searchlevel.value
                    logger.log('searching Tutors', search.value)

                    await topicsService.searchTutor(searchSubject)
                } catch (error) {
                    logger.error(error)
                }
            },
            topics: computed(() => AppState.topics),
            account: computed(() => AppState.account)
        }
    }
};
</script>


<style lang="scss" scoped>
html,
body,
.dashboard {
    height: 100%;
}

.dashboard {
    // background-image: url('https://images.pexels.com/photos/3825880/pexels-photo-3825880.jpeg?cs=srgb&dl=pexels-evie-shaffer-3825880.jpg&fm=jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
