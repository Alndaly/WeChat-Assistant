import { Contact, log } from "wechaty"

export const onLogout = (user: Contact) => {
    log.info('StarterBot', '%s logout', user)
}