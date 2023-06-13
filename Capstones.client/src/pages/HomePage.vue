<template>
  <!-- <div class="row align-items-center">
    <div class="col-12 p-3 ">
      <div id="carousel" class="carousel slide rounded-3 " data-bs-ride="carousel">
        <div class="carousel-inner rounded-3">
          <div class="carousel-item active rounded-3">
            <img
              src="https://www.skiline.co.uk/wp-content/uploads/2020/02/6-great-ski-holidays-ideas-for-a-successful-family-ski-trip-2.jpg"
              class="rounded-3 d-block w-100" alt="...">
          </div>
          <div class="carousel-item rounded-3">
            <img src="https://cdn.outsideonline.com/wp-content/uploads/2022/02/Lesson.jpg" class="rounded-3 d-block w-100"
              alt="...">
          </div>
          <div class="carousel-item rounded-3">
            <img
              src="https://media-server.clubmed.com/image/jpeg/1024/auto/crop/center/70/https%3A%2F%2Fns.clubmed.com%2Fnmea%2F2015%2FB2C%2F341%2FIMG%2FRWD%2Flanding%2Fski_pass.jpg"
              class="rounded-3 d-block w-100" alt="...">
          </div>
          <div class="carousel-item rounded-3">
            <img src="https://ychef.files.bbci.co.uk/1280x720/p0dyg9zd.jpg" class="rounded-3 d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div v-for="r in resorts">
        <button @click="getResort(r)">{{ r.name }}</button>
      </div>


      {{ resort }}


    </div>
  </div> -->
</template>

<script>
import Pop from '../utils/Pop.js';
import { skiService } from '../services/skiService.js'
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { computed } from '@vue/reactivity';

export default {
  setup() { },
  // onMounted(() => {
  //   getResorts()
  // })
  // getSkiForcast()
  //     })
  //     async function getSkiForcast(){
  //       try {
  //         let resort = 'Jackson%20Hole'
  // const options = {
  //     method: 'GET',
  //     url: `https://ski-resort-forecast.p.rapidapi.com/${resort}/forecast`,
  //     params: {
  //         units: 'i',
  //         el: 'top'
  //     },
  //     headers: {
  //         'X-RapidAPI-Key': '9122ea96bdmsh75e5c4d9204e860p1e7a0bjsnbf1057d47686',
  //         'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com'
  //     }
  // };
  //         await skiService.getSkiForcast(options)
  //       } catch (error) {
  //         Pop.error(error)
  //       }
  //     }
  //   async function getResorts() {
  //     try {
  //       await skiService.getResorts()
  //     } catch (error) {
  //       Pop.error(error)
  //     }
  //   }

  //   return {
  //     async getResort(r) {
  //       try {
  //         await skiService.getResort(r.slug)
  //       } catch (error) {
  //         Pop.error(error)
  //       }
  //     },
  //     resort: computed(() => AppState.resort),
  //     resorts: computed(() => AppState.resorts)
  //   }
  // }
  return: {}
}
</script>

<style scoped lang="scss">
.carousel-item {
  width: 900px;



}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
