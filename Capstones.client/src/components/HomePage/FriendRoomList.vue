<template>
  <div class="d-none d-md-block col-md-2 bgPrimary bigHeight">
    <div class="row topChat border-bottom align-items-center">
      <div class=" col-12">
        <h5 class="m-0">Friends </h5>
      </div>
    </div>

    <div class="row bottomChat align-items-center">
      <div class="col-2 text-start px-1">
        <router-link :to="{ name: 'Account' }">
          <img class="onlinePicture p-0 m-0" :src="account.picture" :title="account.name" alt="">
        </router-link>
      </div>
      <div class="col-8">
        <h5 class="p-0 m-0">{{ account.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../../AppState";
import { logger } from "../../utils/Logger";
import Pop from "../../utils/Pop";
// import Login from "../../components/Login.vue"
import { channelsService } from "../../services/ChannelsService";
import { useRouter } from "vue-router";
import { roomsService } from "../../services/RoomsService";


export default {
  setup() {
    const router = useRouter()
    return {
      channel: computed(() => AppState.channel),
      // friends: computed(() => AppState.friends),
      account: computed(() => AppState.account),
      rooms: computed(() => AppState.rooms),

      async setActiveRoom(roomId) {
        try {
          await roomsService.setActiveRoom(roomId);
          router.push({ name: "Room", params: { id: roomId } })
        }
        catch (error) {
          logger.error("[ERROR]", error);
          Pop.error(("[ERROR]"), error.message);
        }
      },

      async deleteChannel(channelId) {
        try {
          if (
            await Pop.confirm(`Are you sure you want to delete ${AppState.channel.name}?`)) {
            await channelsService.delete(channelId)
          }
        } catch (error) {
          logger.error('[ERROR]', error)
          Pop.error(('[ERROR]'), error.message)
        }
      },

      async deleteRoom(roomId, title) {
        try {
          if (
            await Pop.confirm(`Are you sure you want to delete ${title}?`)) {
            await roomsService.delete(roomId)
          }
        } catch (error) {
          logger.error('[ERROR]', error)
          Pop.error(('[ERROR]'), error.message)
        }
      }
    };
  },
  // components: { Login }
}
</script>

<style scoped>
.bigHeight {
  height: 100dvh;
}

.topChat {
  height: 5%;
}

.middleChat {
  height: 85%;
}

.middleChatDiv {
  max-height: 10px !important;
  height: 10px !important;
}

.bottomChat {
  height: 10%;
  background-color: #15283d;
}

.bgPrimary {
  background-color: #15283d;
  color: whitesmoke;
}

.onlinePicture {
  height: 35px;
  width: 35px;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.verticalScroll {
  overflow-x: hidden;
  overflow-y: scroll;
  border-right: #180c5e 2px solid;
}

.verticalScroll::-webkit-scrollbar {
  width: 2px;
  height: 5dvh;
  background-color: #180c5e;
}

.verticalScroll::-webkit-scrollbar-thumb {
  background: #180c5e;
}
</style>