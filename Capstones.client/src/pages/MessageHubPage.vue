<template>
    <section class="container-fluid bigHeight">
        <div class="row">
            <ChannelList class="order-1 order-md-1" />
            <FriendRoomList class="order-2 order-md-2" />
            <ChatRoom class="order-4 order-md-3" />
            <WhoIsOnline class="order-3 order-md-4" />
        </div>
    </section>
    <!-- <Modal id="editChannel">
        <template #header>
            <div>Edit Channel</div>
        </template>
        <template #body>
            <ChannelForm />
        </template>
    </Modal> -->
    <!-- <Modal id="createRoom">
        <template #header>
            <div>Create Room</div>
        </template>
        <template #body>
            <RoomForm />
        </template>
    </Modal> -->
</template>


<script>
import { useRoute, useRouter } from "vue-router";
import { channelsService } from "../services/ChannelsService.js";
import { roomsService } from "../services/RoomsService.js";
import { socketService } from "../services/SocketService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { Modal } from 'bootstrap';
// import { router } from "../router.js";
import ChannelForm from "../components/Forms/ChannelForm.vue";
import RoomForm from "../components/Forms/RoomForm.vue";
import ChatRoom from "../components/MessageStuff/ChatRoom.vue"
import ChannelList from "../components/MessageStuff/ChannelList.vue";


export default {
  setup(){
    const route = useRoute()
    const router = useRouter()

    router.beforeEach((to, from) =>{
      logger.log('[TO]', to, "[FROM]", from)

      if (from.name == "Channel") {
        leaveRoom(from.params.id)
      }
    })

    router.afterEach((to, from) => {
      if (to.name == "Channel") {
        joinRoom()
        getChannels()
        getChannel()
        getMessages()
      }
    })

    function leaveRoom(roomId) {
      try {
        let payload = { roomId: roomId }
        socketService.emit("c:leaving:room", payload)
      } catch (error) {
        logger.error(['ERROR'], error)
        Pop.error(('[ERROR]'), error.message)
      }
    }

    function joinRoom() {
      try {
        let payload = { roomId: route.params.id }
        socketService.emit("c:joining:room", payload)
      } catch (error) {
        logger.error('[ERROR]', error)
        Pop.error(('[ERROR]'), error.message)
      }
    }

    async function getChannels() {
      try {
        await channelsService.getAll()
      } catch (error) {
        logger.error("[ERROR]", error);
        Pop.error(("[ERROR]"), error.message);
      }
    }

    async function getChannel(){
      try {
        let channelId = route.params.id
        await channelsService.setActiveChannel(channelId)
      } catch (error) {
        logger.error("[ERROR]", error);
        Pop.error(("[ERROR]"), error.message);
      }
    }

    async function getMessages() {
      try {
        let roomId = route.params.id
        await roomsService.getMessages(roomId)
      } catch (error) {
        logger.error("[ERROR]", error)
        Pop.error(("[ERROR]"), error.message)
      }
    }
  return {  

  };
  },
  components: {  ChannelList, ChatRoom, Modal, ChannelForm, RoomForm }
}
</script>


<style lang="scss" scoped>

</style>