function init () {
    // Soft reset
    writeByte(addr, 224, 182)
    basic.pause(200)
    // x16 humidity oversampling
    writeByte(addr, 242, 7)
    basic.pause(200)
    // x16 oversampling, normal mode
    writeByte(addr, 244, 183)
    basic.pause(200)
    // 500ms standby time, 16 filter coef
    writeByte(addr, 245, 144)
    basic.pause(200)
}
function readBuffer (addr: number, register: number, len: number) {
    pins.i2cWriteNumber(
    addr,
    register,
    NumberFormat.Int8LE,
    false
    )
    return pins.i2cReadBuffer(addr, len, false)
}
function writeByte (addr: number, register: number, value: number) {
    pins.i2cWriteNumber(
    addr,
    register,
    NumberFormat.Int8LE,
    false
    )
    pins.i2cWriteNumber(
    addr,
    value,
    NumberFormat.Int8LE,
    false
    )
}
let addr = 0
basic.showIcon(IconNames.Heart)
addr = 118
init()
serial.writeBuffer(readBuffer(addr, 136, 26))
serial.writeBuffer(readBuffer(addr, 225, 7))
basic.showIcon(IconNames.Yes)
