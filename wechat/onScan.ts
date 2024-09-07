import { ScanStatus, log } from "wechaty"
import qrTerm from 'qrcode-terminal'

export const onScan = (qrcode: string, status: ScanStatus) => {
    if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
        qrTerm.generate(qrcode, { small: true })  // show qrcode on console

        const qrcodeImageUrl = [
            'https://wechaty.js.org/qrcode/',
            encodeURIComponent(qrcode),
        ].join('')

        log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)
    } else {
        log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
    }
}