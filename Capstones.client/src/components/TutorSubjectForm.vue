<template>
    <div class="modal-content">

        <!-- <form @submit.prevent="handleSubmit"> -->
        <form @submit.prevent="createTopic">
            <div class="form-floating mb-3">
                <label for="">Subject</label>
                <select v-model="editable.subject" class="form-select" aria-label="Default select example">
                    <option value="math">Math</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                    <option value="econ">Econ</option>
                    <option value="art">Art</option>
                </select>
            </div>

            <div class="form-floating mb-3">
                <label placeholder="Subject Level" for="level">Subject Level</label>
                <select v-model="editable.level" id="level" class="form-select" aria-label="Default select example">
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create A Subject</button>
            </div>
            <div class="form-floating mb-3">
                <label placeholder="hourly Rate">

                </label>
                <input class="" v-model="editable.hourlyRate">
            </div>
        </form>
    </div>
</template>


<script>
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState.js'
import { computed, ref, watchEffect } from 'vue'
import { accountService } from '../services/AccountService.js'
import { Modal } from 'bootstrap'
import { logger } from '../utils/Logger.js'
import { topicsService } from '../services/TopicsService.js'
import Pop from '../utils/Pop.js'

export default {
    setup() {
        const editable = ref({})
        // const router = useRouter()
        const route = useRoute()

        // watchEffect(() => {
        //     editable.value = { AppState.topics }

        // })


        return {
            topics: computed(() => AppState.topics),
            editable,

            async createTopic() {
                // debugger
                try {
                    const formData = editable.value
                    await topicsService.createTopic(formData)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }

            // async handleSubmit() {
            //     try {
            //         // debugger
            //         await accountService.editAccount(editable.value)
            //         // await accountService.becomeTutor(editable.value)

            //         Modal.getOrCreateInstance('#tutorSubject').hide()
            //         editable.value = {}
            //         router.push({ name: 'Dashboard' })
            //     } catch (error) {
            //         logger.error(error)
            //     }
            // }
        }
    }
}

</script>


<style lang="scss" scoped>
</style>
