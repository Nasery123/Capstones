<template>
  <section class="container-fluid bigHeight">
    <div class="row">
      <!-- SECTION CHANNEL LIST -->
      <ChannelList class="order-1 order-md-1" />
      <!-- SECTION FRIENDS/ROOMS LIST -->
      <FriendRoomList class="order-2 order-md-2" />
      <!-- SECTION CHAT -->
      <ChatRoom class="order-4 order-md-3" />
      <!-- SECTION WHO'S ONLINE -->
      <WhoIsOnline class="order-3 order-md-4" />
    </div>
  </section>
  <Modal id="editChannel">
    <template #header>
      <div>Edit Channel</div>
    </template>
    <template #body>
      <ChannelForm />
    </template>
  </Modal>
  <Modal id="createRoom">
    <template #header>
      <div>Create Room</div>
    </template>
    <template #body>
      <RoomForm />
    </template>
  </Modal>
</template>
<script>
import { onBeforeMount, onMounted, onUnmounted, watchEffect } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { channelsService } from "../services/ChannelsService"
import { AppState } from "../AppState";
import FriendRoomList from "../components/HomePage/FriendRoomList.vue";
import ChannelList from "../components/HomePage/ChannelList.vue"
import ChatRoom from "../components/HomePage/ChatRoom.vue"
import WhoIsOnline from "../components/HomePage/WhoIsOnline.vue";
import Modal from "../components/Util/Modal.vue";
import ChannelForm from "../components/Forms/ChannelForm.vue";
import RoomForm from "../components/Forms/RoomForm.vue";
import { useRoute, useRouter } from "vue-router";
import { roomsService } from "../services/RoomsService";
import { socketService } from "../services/SocketService"

import { router } from "../router.js";
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    router.beforeEach((to, from) => {
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
        logger.error('[ERROR]', error)
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
        await channelsService.getAll();
      }
      catch (error) {
        logger.error("[ERROR]", error);
        Pop.error(("[ERROR]"), error.message);
      }
    }
    async function getChannel() {
      try {
        const channelId = route.params.id
        await channelsService.setActiveChannel(channelId)
      } catch (error) {
        logger.error('[ERROR]', error)
        Pop.error(('[ERROR]'), error.message)
      }
    }
    async function getMessages() {
      try {
        let roomId = route.params.id
        await roomsService.getMessages(roomId)
      } catch (error) {
        logger.error('[ERROR]', error)
        Pop.error(('[ERROR]'), error.message)
      }
    }
onMounted(()=> {
         joinRoom()
      getChannels()
      getChannel()
      getMessages()
})
    return {
    };
  },
  components: { FriendRoomList, ChannelList, ChatRoom, WhoIsOnline, Modal, ChannelForm, RoomForm }
}
</script>
<style scoped lang="scss">
.bigHeight {
  height: 100dvh;
}
</style>