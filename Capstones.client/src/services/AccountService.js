import { AppState } from '../AppState'
import { Account, Profile } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async createUser(formData) {
    try {
      const res = await api.put('/account', formData)
      logger.log("[Creating User]", res.data)
    } catch (error) {
      logger.error('No')

    }
  }
  async editAccount(formData) {
    // const res = await api.put('/account', { ...formData, github: formData.socialPlatform})
    const res = await api.put('/account', formData)

    AppState.account = new Profile(res.data)
  }

  async becomeTutor() {
    isTutor = true
    AppState.account = new Profile(res.data)
    await api.put('/account', AppState.account)
  }

  async getTutorSessions() {
    const res = await api.get('account/tutor/sessions')
    logger.log(['here are some res and data'], res.data)
    AppState.tutorSessions = res.data
  }

  async getStudentSessions() {
    const res = await api.get('account/student/sessions')
    AppState.studentSessions = res.data
    logger.log('res .data in console', res.data)
  }



}

export const accountService = new AccountService()
