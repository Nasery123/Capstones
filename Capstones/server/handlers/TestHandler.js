import { socketProvider } from "../SocketProvider.js"
import { SocketHandler } from '../utils/SocketHandler'

export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('JOIN', this.addUserToRoom)
      .on('LEAVE', this.removeUserFromRoom)
  }

  async testEvent(payload) {

    if (payload.name == 'hello') {
      payload.name += ' world'
    } else {
      payload.someOtherProp = [{
        favoriteFood: '🍌'
      }]
    }

    socketProvider.message('hello', [{
      favoriteFood: '🍌'
    }])

    // this only sends data back to the sender
    this.socket.emit('IS_TESTED', payload)
  }


  addUserToRoom(roomName) {
    socketProvider.messageRoom(roomName, 'USER_JOINED', this.profile)

    this.socket.emit('JOINED', roomName)
    this.socket.join(roomName)


  }

  removeUserFromRoom(roomName) {
    this.socket.leave(roomName)
    this.socket.emit('LEFT', roomName)
  }


}
