import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  topics: [],
  myTopics: [],
  /** @type {import('./models/Room.js').Room} */
  room: [],
  /** @type {import('./models/Room.js').Room} */
  rooms: [],
  /** @type {import('./models/Message.js').Message[]} */
  messages: [],
  /** @type {import('./models/NewUser.js').NewUser[]} */
  users: [],

  /** @type {import('./models/Channel.js').Channel||null} */
  channels: null,

  /** @type {import('./models/Channel.js').Channel||null} */
  channel: null,
  /** @type {import('./models/Channel.js').Channel||null} */
  editChannel: null,
  studentSessions: [],
  tutorSessions: []
})
