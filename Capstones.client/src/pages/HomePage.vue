<template>
  <div class="accountpage container-fluid">
    <!-- NOTE the below template is the home view with two buttons for log in and create an account. and three boxes with some text -->

    <div class="row ">
      <div class="col-md-8 col-12 justify-content-center align-items-center">
        <div class="text text-center">

          <div class="welcom"> Welcome to TUber</div>

        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 col-12 mt-4">
        <div class="text align-items-center">
          <div class="welcom"> Tutoring on Demand</div>
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="learn">LEARN ABOUT TUBER HERE!</div>
    </div>

  </div>
  <!-- </div> -->

  <div class="row">
    <div class="col-12 d-flex justify-content-around mt-5">
      <!-- <div> -->

      <button data-bs-toggle="modal" data-bs-target="#editTutor" class="btn btn-primary">Tuber as a Tutor</button>
      <!-- <button data-bs-toggle="modal" data-bs-target="#editStudent" class="btn btn-primary">Tuber as a Student</button> -->


      <!-- </div> -->
      <div>
        <button class="btn btn-primary">LOG IN</button>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { socketService } from "../services/SocketService.js";
import { AppState } from "../AppState.js";


export default {
  setup() {


    return {
      data: computed(() => AppState.data),
      join(roomName) {
        let leaveRoom = 'A'
        if (roomName == 'A') {
          leaveRoom = 'B'
        }

        socketService.emit('LEAVE', leaveRoom)
        socketService.emit('JOIN', roomName)
      },

      testTheSocket() {
        console.log('hello')
        socketService.emit('SOCKET_TEST', { name: '' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
// .mod {
//   writing-mode: vertical-lr;
// }


.profile {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

// input {
//   width: 270px;
// }
// .box {}



.text {
  box-sizing: border-box;
  border: 2px solid orange;
  max-width: 500px;
  height: 15vh;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 1em;
}

.welcom {
  position: absolute;
  color: white;
  align-items: center;
  text-transform: uppercase;
  font-size: large;
  font-weight: bold;

  left: 20%;

}

.accountpage {

  // background-image: url('../assets/img/homepage-background.png');
  background-image: url('https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 89.6vh;

}

.dark-theme {
  background-image: lightgrey;
}



// card {
//   background: rgba(58, 30, 3, 0.7);
//   border-radius: 16px;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(6.1px);
//   -webkit-backdrop-filter: blur(6.1px);
//   border: 1px solid rgba(58, 30, 3, 0.22);
// }



// .carousel-item {
//   width: 900px;



// }

// .photo {

//   align-items: center;
//   background-color: antiquewhite;
//   left: 50%;

//   transform: translateX(-50%);
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

// }

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

// .home-card {
//   width: 50vw;


>img {
  // height: 200px;
  // max-width: 200px;
  // width: 100%;
  // object-fit: contain;
  // object-position: center;
}


// }

//TODO - move dash background img to dashboard page once created
// .dash-background-img {
//   background-image: url();
// }
</style>
