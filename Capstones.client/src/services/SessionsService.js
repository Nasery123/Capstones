import { AppState } from "../AppState.js"
import { Session } from "../models/Session.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class SessionsService {
    async createStudentSessionRequest(topic) {
        const res = await api.post(`api/sessions`, topic)
        logger.log('Eli said to put a logger log', res.data)
        AppState.studentSessions.push(res.data)

    }
    async acceptSession(sessionId) {

        const res = await api.put(`api/sessions/${sessionId}`, { status: true })
        logger.log('here is the accepted session', res.data)
        // AppState.session = AppState.session.filter(s => new Session(res.data))

    }
    async denySession(sessionId) {
        const res = await api.put(`api/sessions/${sessionId}`, { status: false })
        logger.log('this session has been denied', res.data)
    }


}

export const sessionsService = new SessionsService()
