import { onMessage } from './wechat/onMessage';
import { onScan } from './wechat/onScan';
import { onLogin } from './wechat/onLogin';
import { onLogout } from './wechat/onLogout';
import { log } from 'wechaty';
import { bot } from './wechat/bot';

bot.on('scan', onScan)
bot.on('login', onLogin)
bot.on('logout', onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
