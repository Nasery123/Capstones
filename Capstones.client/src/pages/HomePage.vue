<template>
  <!-- NOTE the below template is the home view with two buttons for log in and create an account. and three boxes with some text -->

  <!-- <div class="row align-items-center">
    <div class="col-12 justify-content-center align-items-center">
      <div class="text text-center">

        <card class="welcom"> Welcome to TUber</card>

      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 mt-4">
      <div class="text align-items-center">
        <card class="welcom"> Tutoring on Demand</card>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-5 learn-box mt-4 ms-3">
      <div class="learn">LEARN ABOUT TUBER HERE!</div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex justify-content-around mt-5">
      <div>
        <button class="btn btn-primary">CREATE ACCOUNT</button>
      </div>
      <div>
        <button class="btn btn-primary">LOG IN</button>
      </div>
    </div>
  </div> -->



  <!-- NOTE student DASHBOARD  -->
  <!-- <div class="container-fluid ">
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
    <div class="row justify-content-center py-3">
      <card class="card py-3 ">
        <div class="">
          <div clas="col-12 justify-content-center align-items-center">

            <h4>Search For Tutor:</h4>
            <div class="row ">
              <div class="justify-content-center">
                <div class="col-12 py-1">
                  <input type="text" placeholder="Subject">
                </div>
                <div class="row">
                  <div class="col-12 py-1">
                    <input type="text" placeholder="level of Subject">
                  </div>
                </div>
              </div>
            </div>
            <div class="text-end">
              <button class="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div> -->
  <!-- upcoming sessions cards -->
  <!-- <div class="row justify-content-center text-light">
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
  </div> -->



  <!-- STUB TUTOR DASHBOARD PAGE -->
  <!-- <section class="container-fluid">
    <dev class="row py-2">
      <div class=" d-flex justify-content-evenly">
        <button class="btn btn-info"> Student</button>
        <button class="btn btn-success">Tutor</button>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <card class="card border-light bg-dark d-flex">
          <p>Pending requests: (requests count here)</p>
        </card>
      </div>
    </dev>
  </section> -->


  <!-- //NOTE - pending / upcoming request cards for tutor dashboard -->
  <!-- <section class="container-fluid">
    <div class="row py-2 justify-content-center m-1">
      <div class="card">
        <div class="d-flex pt-2">
          <img class="img-fluid profile"
            src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
            alt="">
          <div class="flex-column">
            <p>Student Name</p>
            <p>School</p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <p>subject</p>
          <p>description</p>
        </div>
      </div>
    </div>
  </section> -->

  <!-- <section class="container-fluid">
    <dev class="row py-2">
      <div class="d-flex justify-content-center mt-3">
        <card class="card border-light bg-dark d-flex">
          <p>Upcoming requests: (upcoming count here)</p>
        </card>
      </div>
    </dev>
  </section>

  <section class="container-fluid">
    <div class="row py-2 justify-content-center m-1">
      <div class="card">
        <div class="d-flex pt-2">
          <img class="img-fluid profile"
            src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
            alt="">
          <div class="flex-column">
            <p>Student Name</p>
            <p>School</p>
          </div>
        </div>
        <div>
        </div>
        <div>
          <p>subject</p>
          <p>description</p>
        </div>
      </div>
    </div>
  </section> -->


  <!-- //STUB - Tutor account info page -->
  <section class=" container-fluid">
    <div class="row m-1 ">
      <div class="card ">
        <div class="d-flex ">
          <img class="img-fluid profile"
            src="https://img.freepik.com/premium-vector/cute-photographer-cartoon-illustration-people-profession-icon-concept_138676-1899.jpg"
            alt="">
          <div class="flex-column">
            <p>Tutor name</p>
            <p>Tutor school</p>
          </div>
        </div>

        <div class="">
          <p>cashapp</p>
          <p>email</p>
          <p>average rating</p>
          <p>tutor's major</p>
          <p>subjects tutor can teach</p>
          <p>math subject and $/hr</p>
          <p>science subject and $/hr</p>
        </div>

      </div>

    </div>
  </section>

  <section class="container-fluid">
    <div class="row m-1">
      <div class="card">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit repellat qui repellendus, id explicabo
          sunt mollitia nesciunt aliquam suscipit magnam quae eligendi quasi vitae dolorum!</p>
      </div>
    </div>
  </section>

  <section class="container-fluid">
    <div class="row m-1">
      <div class="card">
        <div class="card-body">
          <button @click="join('A')">Join Room A</button>
          <button @click="join('B')">Join Room B</button>
          <button @click="leave('A')">Leave Room A</button>
          <button @click="leave('B')">Leave Room B</button>
          <button @click="testTheSocket()">Test Socket</button>
          
          {{ data }}
        </div>
      </div>

    </div>
  </section>
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

// .text {
//   box-sizing: border-box;
//   border: 2px solid orange;
//   max-width: 500px;
//   height: 15vh;
//   display: flex;
//   align-items: center;
//   border-radius: 10px;
// }

// .welcom {
//   position: absolute;
//   color: white;
//   align-items: center;
//   text-transform: uppercase;
//   font-size: large;
//   font-weight: bold;

// left: 20%;

// }

// .learn {
//   position: absolute;
//   color: white;

//   text-transform: uppercase;
//   font-size: large;
//   font-weight: bold;



// }

// .learn-box {
//   box-sizing: border-box;
//   border: 2px solid orange;
//   min-width: 300px;
//   height: 15vh;
//   display: flex;
//   align-items: center;
//   border-radius: 10px;
//   margin-left: 50px;


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
