<template>
  <div class="accountpage ">
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
    <div class="row">
      <div class="col-12 col-md-8 learn-box mt-4 ms-3 d-flex justify-content-evenly">

        <div class="col-6">
          <div class="learn">LEARN ABOUT TUBER HERE!</div>
        </div>
        <div class="col-4">
          <img class="giphy"
            src="https://media1.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif?cid=ecf05e47j3jppd3o5fehzsctm5f9xnawoybg7robqr32zbx3&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex justify-content-around mt-5">
      <div>

        <button data-bs-toggle="modal" data-bs-target="#editTutor" class="btn btn-primary">Tuber as a Tutor</button>
        <!-- <button data-bs-toggle="modal" data-bs-target="#editStudent" class="btn btn-primary">Tuber as a Student</button> -->


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
.giphy {
  height: 100px;
  width: 120px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px lightgray;
}

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
  // margin-left: 50px;


}

card {
  background: rgba(58, 30, 3, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border: 1px solid rgba(58, 30, 3, 0.22);
}

.accountpage {

  background-image: url('../assets/img/homepage-background.png');
  // background-image: url('https://c4.wallpaperflare.com/wallpaper/704/302/377/digital-art-colorful-minimalism-abstract-wallpaper-preview.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

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
// .dash-background-img {
//   background-image: url();
// }
</style>
