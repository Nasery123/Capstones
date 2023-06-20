<template>
  <!-- NOTE the below template is the home view with two buttons for log in and create an account. and three boxes with some text -->

  <div class="row align-items-center">
    <div class="col-md-8 col-12 justify-content-center align-items-center">
      <div class="text text-center">

        <card class="welcom"> Welcome to TUber</card>

      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8col-12 mt-4">
      <div class="text align-items-center">
        <card class="welcom"> Tutoring on Demand</card>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-8 learn-box mt-4 ms-3">
      <div class="learn">LEARN ABOUT TUBER HERE!</div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex justify-content-around mt-5">
      <div>
        
    <button data-bs-toggle="modal" data-bs-target="#editTutor" class="btn btn-primary">CREATE ACCOUNT</button>
 
      </div>
      <div>
        <button class="btn btn-primary">LOG IN</button>
      </div>
    </div>
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
      join(roomName){
        let leaveRoom = 'A'
        if(roomName == 'A'){
          leaveRoom = 'B'
        }

        socketService.emit('LEAVE', leaveRoom)
        socketService.emit('JOIN', roomName)
      },

      testTheSocket(){
        console.log('hello')
        socketService.emit('SOCKET_TEST', {name: ''})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.profile {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

input {
  width: 270px;
}

.card {
  width: 65vh;
  align-items: center;
}

.text {
  box-sizing: border-box;
  border: 2px solid orange;
  max-width: 500px;
  height: 15vh;
  display: flex;
  align-items: center;
  border-radius: 10px;
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

.learn {
  position: absolute;
  color: white;

  text-transform: uppercase;
  font-size: large;
  font-weight: bold;



}

.learn-box {
  box-sizing: border-box;
  border: 2px solid orange;
  min-width: 300px;
  height: 15vh;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-left: 50px;


}



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

.home-card {
  width: 50vw;


  >img {
    // height: 200px;
    // max-width: 200px;
    // width: 100%;
    // object-fit: contain;
    // object-position: center;
  }


}

//TODO - move dash background img to dashboard page once created
.dash-background-img {
  background-image: url();
}
</style>
