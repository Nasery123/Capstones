import { AppState } from "../AppState.js"
import { Session } from "../models/Session.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class SessionsService {
    async createStudentSessionRequest(topic) {
        const res = await api.post(`api/sessions`, topic)
        logger.log('Eli said to put a logger log', res.data)
        AppState.studentSession.push(res.data)

    }


}

export const sessionsService = new SessionsService()
