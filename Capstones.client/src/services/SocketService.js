import { AppState } from "../AppState.js"
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('IS_TESTED', this.testReceived)
      .on('hello', this.OnGotHello)
      .on('JOINED', this.youJoinedARoom)
      .on('USER_JOINED', this.userJustJoinedTheRoom)
      .on('LEFT', this.youLeftARoom)
      .on('LEAVE', this.leaveTheRoom)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }

  testReceived(data){
    console.log('I got the data', data)
  }

  OnGotHello(data){
    Pop.toast('You got the hello message', 'info', 'bottom-end')
    AppState.data = data
  }

  youJoinedARoom(roomName){
    Pop.success('YOU JOINED ' + roomName)
  }

  userJustJoinedTheRoom(personWhoJoined){
    Pop.error('A NEW USER JOINED ' + personWhoJoined.name)
  }

  youLeftARoom(room){
    console.log('you left', room)
  }
  leaveTheRoom(room){
    console.log('user has left' + room)
  }


}

export const socketService = new SocketService()
