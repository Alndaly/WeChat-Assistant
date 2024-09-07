import { Contact, log } from "wechaty"

export const onLogin = (user: Contact) => {
    log.info('StarterBot', '%s login', user)
}
