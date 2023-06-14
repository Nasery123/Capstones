<template>
  <div class="row align-items-center">
    <div class="col-12 p-3 text-center photo">
      <div id="carousel" class="carousel slide rounded-3 " data-bs-ride="carousel">
        <div class="carousel-inner rounded-3 ">
          <div class="carousel-item active rounded-3">
            <img
              src="https://st4.depositphotos.com/1037987/23174/i/600/depositphotos_231742708-stock-photo-high-school-tutor-giving-uniformed.jpg"
              class="rounded-3 d-block w-100" alt="...">
          </div>
          <div class="carousel-item rounded-3">
            <img src="https://d39eazhratf38c.cloudfront.net/Pictures/480xany/0/8/8/60088_151964_873376.jpg"
              class="rounded-3 d-block w-100" alt="...">
          </div>
          <div class="carousel-item rounded-3">
            <img
              src="https://images3.privateschoolreview.com/photo/1122x864/52000/51637/fusion-academy-hingham-p11cddans2zw.jpg"
              alt="...">
          </div>
          <div class="carousel-item rounded-3">
            <img
              src="https://media.istockphoto.com/id/1092206288/photo/young-female-primary-school-teacher-working-one-on-one-with-a-schoolgirl-at-a-table-in-a.jpg?s=612x612&w=0&k=20&c=gQgJ4wv4zcVhsbZCunva8fTAePDp61o2lXxcM9qjvYQ="
              class="rounded-3 d-block w-100" alt="...">
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
        <!-- </div> -->

        <!-- <div v-for="r in resorts"> -->
        <!-- <button @click="getResort(r)">{{ r.name }}</button> -->
      </div>


      <!-- {{ resort }} -->


    </div>
  </div>
</template>

<script>
// import Pop from '../utils/Pop.js';
// import { skiService } from '../services/skiService.js'
// import { onMounted } from 'vue';
// import { AppState } from '../AppState.js';
// import { computed } from '@vue/reactivity';

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

.photo {
  // min-width: 80vh;
  // min-height: 100px;
  align-items: center;
  background-color: antiquewhite;
  left: 50%;
  // right: 50%;
  transform: translateX(-50%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}

// img {
//   min-width: 80vh;
//   min-height: 100px;

// }

// .home {
//   display: grid;
//   height: 80vh;
//   place-content: center;
//   text-align: center;
//   user-select: none;

//   .home-card {
//     width: 50vw;

//     >img {
//       // height: 200px;
//       // max-width: 200px;
//       // width: 100%;
//       // object-fit: contain;
//       // object-position: center;
//     }
//   }
// }
</style>
