import { SocketHandler } from "../utils/SocketHandler";

export class RoomHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true);

    this.on("SOCKET_TEST", this.testEvent)
      .on("c:leaving:room", this.leavingRoom)
      .on("c:joining:room", this.joiningRoom);
  }

  async testEvent(payload) {
    this.socket.emit("IS_TESTED", payload);
  }

  leavingRoom(payload) {
    if (!payload.roomId) {

      this.socket.emit("error", { error: "Please provide a room Id." });
      return;
    }

    this.socket.leave(payload.roomId);

    this.socket.to(payload.roomId).emit("s:leaving:room", this.profile);
  }

  joiningRoom(payload) {
    if (!payload.roomId) {

      this.socket.emit("error", {
        error: "Something went wrong with the room Id.",
      });
      return;
    }

    this.socket.join(payload.roomId);

    this.socket.to(payload.roomId).emit("s:joining:room", this.profile);
  }
}