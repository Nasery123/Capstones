<template>
    <div class="dashboard" id="dash">
        <p class="text-center">
            <i><b>
                    DASHBOARD
                </b></i>
        </p>
        <!-- NOTE student DASHBOARD  -->
        <div class="container-fluid ">
            <!-- <div class="row ">
                <div class="col-12">
                    <div class="d-flex justify-content-evenly">
                        <div>
                            <button class="btn btn-primary">STUDENT</button>
                        </div>
                        <div class="btn btn-primary">TUTOR</div>
                    </div>
                </div>
            </div> -->
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
                                                <!-- <input type="text" v-model="searchLevel" placeholder="Level"> -->

                                            </div>
                                            <div class="row">
                                                <!-- <div class="col-12 py-1">
                                        <input type="text" v-model="searchlevel" placeholder="level of Subject">
                                    </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <!-- <button type="submit" class="btn btn-primary">Search</button> -->
                                    </div>
                                    <button @click="filterBy = '100'" class="btn btn-primary mx-1">100</button>
                                    <button @click="filterBy = '200'" class="btn btn-primary mx-1">200</button>
                                    <button @click="filterBy = '300'" class="btn btn-primary mx-1">300</button>
                                    <button @click="filterBy = '400'" class="btn btn-primary mx-1">400</button>
                                    <button @click="filterBy = '500'" class="btn btn-primary mx-1">500</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
        <div v-for="t in topics" :key="t.id">
            <!-- {{ topics.tutor.name }} -->
            <SessionCard :topicsProp="t" />
        </div>


        <!-- upcoming sessions cards -->
        <div class="row justify-content-center text-light">
            Upcoming sessions:
            <div class="row justify-content-center">
                <div class="col-md-3 col-12 card bg-light elevation-3 text-start">

                    <div class="d-flex justify-content-start">
                        <!-- <img class="img-fluid profile"
                            src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
                            alt="">
                        <p class="pt-4 ps-2">this guy</p> -->

                    </div>



                    <div class="">
                        <!-- Math/ level 100/Date(july/s/2026) -->
                    </div>
                    <div class="description">
                        <!-- Note: session description -->
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
import { channelsService } from "../services/ChannelsService.js";
import Pop from "../utils/Pop.js";
export default {
    setup() {
        const filterBy = ref('')
        const search = ref('')

        // const searchlevel = ref('')
        // const searchSubject = ref({})
        return {
            search,
            filterBy,
            async searchTutors() {
                try {
                    const searchSubject = search.value
                    // const searchLevel = searchLevel.value
                    // const searchlevel = searchlevel.value
                    logger.log('searching Tutors', search.value)

                    await topicsService.searchTutor(searchSubject)
                } catch (error) {
                    logger.error(error)
                }
            },





            topics: computed(() => {
                if (filterBy.value == '100') {
                    return AppState.topics.filter(t => t.level == filterBy.value)
                } else if (filterBy.value == '200') {
                    return AppState.topics.filter(t => t.level == filterBy.value)
                } else if (filterBy.value == '300') {
                    return AppState.topics.filter(t => t.level == filterBy.value)
                } else if (filterBy.value == '400') {
                    return AppState.topics.filter(t => t.level == filterBy.value)
                } else if (filterBy.value == '500') {
                    return AppState.topics.filter(t => t.level == filterBy.value)
                }

            }),
            // } AppState.topics),
            account: computed(() => AppState.account)

        }

    }
}



</script>


<style lang="scss" scoped>
html,
body,
.dashboard {
    height: 100%;
}

.dashboard {
    background-image: url('https://images.pexels.com/photos/3825880/pexels-photo-3825880.jpeg?cs=srgb&dl=pexels-evie-shaffer-3825880.jpg&fm=jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 90.2vh;
}

.dark-theme {
    background-image: url('https://wallpapers.com/images/hd/pile-of-books-in-the-dark-jh9n5fa0wgv97uk0.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 90.2vh;
}
</style>
