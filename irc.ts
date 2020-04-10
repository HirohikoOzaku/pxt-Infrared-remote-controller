
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

enum Color {
    //% block="赤"
    Red = 0,
    //% block="青"
    Blue = 1,
    //% block="緑"
    Green = 2,
    //% block="白"
    White = 3
}

enum Brightness {
    //% block="明るく"
    Brighter = 0,
    //% block="暗く"
    Darker = 1
}

enum Mode {
    //% block="普通"
    Color16 = 0,
    //% block="点滅"
    Flash = 1,
    //% block="ゆっくり"
    Fade = 2
}

/**
 * カスタムブロック
 */
//% weight=100 color=#87cefa icon="⚲"
namespace 赤外線リモコン {
    let on: number[] = [9135, 4531, 652, 469, 599, 541, 641, 498, 637, 505, 638, 515, 626, 561, 546, 541, 634, 508, 603, 1653, 601, 1650, 644, 1608, 605, 1649, 605, 1649, 649, 1604, 641, 1613, 660, 1612, 644, 1591, 634, 507, 615, 528, 571, 571, 604, 550, 620, 510, 634, 506, 601, 546, 660, 476, 601, 1655, 641, 1611, 605, 1648, 662, 1592, 611, 1643, 652, 1601, 648, 1606, 647, 40096, 9139, 2203, 632, 96558, 9124, 2204, 656]
    let off: number[] = [9154, 4482, 643, 501, 630, 514, 630, 513, 628, 527, 616, 510, 632, 507, 638, 505, 636, 508, 631, 1626, 641, 1609, 650, 1606, 644, 1609, 640, 1614, 636, 1619, 632, 1621, 650, 1605, 643, 500, 650, 492, 632, 510, 633, 540, 601, 511, 631, 507, 632, 510, 632, 528, 633, 1605, 648, 1623, 629, 1607, 639, 1613, 642, 1609, 642, 1614, 634, 1618, 648, 1606, 649, 40098, 9149, 2203, 638, 96613, 9165, 2181, 654]
    let brighter: number[] = [9212, 4457, 670, 473, 665, 478, 659, 487, 657, 482, 660, 477, 665, 483, 660, 486, 652, 492, 651, 1595, 691, 1563, 661, 1611, 675, 1561, 659, 1594, 662, 1593, 659, 1595, 661, 1594, 668, 479, 660, 479, 658, 1593, 660, 1599, 696, 442, 658, 515, 630, 479, 670, 474, 660, 1596, 674, 1581, 656, 485, 658, 486, 656, 1594, 660, 1594, 658, 1596, 660, 1595, 660, 40093, 9186, 2196, 672, 96586, 9156, 2204, 632]
    let darker: number[] = [9162, 4484, 634, 508, 630, 513, 628, 514, 637, 508, 628, 548, 593, 549, 593, 507, 636, 506, 647, 1613, 638, 1611, 655, 1618, 653, 1582, 652, 1604, 653, 1599, 644, 1610, 640, 1614, 655, 1601, 653, 487, 649, 495, 638, 1617, 633, 510, 667, 473, 633, 508, 628, 513, 634, 505, 636, 1618, 655, 1599, 654, 491, 648, 1602, 649, 1605, 650, 1605, 644, 1609, 641, 40118, 9155, 2224, 616, 96638, 9184, 2178, 661]
    let red: number[] = [9161, 4468, 617, 530, 593, 546, 597, 549, 593, 555, 586, 541, 602, 616, 525, 540, 601, 544, 600, 1656, 596, 1654, 604, 1669, 581, 1653, 603, 1653, 601, 1651, 602, 1653, 598, 1655, 633, 1620, 601, 572, 567, 1660, 625, 515, 595, 1661, 599, 540, 595, 547, 649, 505, 585, 544, 600, 1656, 598, 543, 593, 1657, 603, 541, 655, 1597, 662, 1595, 655, 1599, 639, 40110, 9153, 2225, 650, 96594, 9123, 2236, 635]
    let blue: number[] = [9147, 4512, 612, 543, 589, 541, 603, 539, 603, 539, 605, 537, 611, 530, 607, 535, 608, 547, 595, 1653, 603, 1647, 607, 1648, 606, 1648, 630, 1623, 607, 1667, 603, 1633, 635, 1620, 632, 512, 606, 1653, 623, 1653, 582, 538, 650, 1608, 605, 537, 603, 536, 619, 535, 616, 1658, 603, 536, 608, 540, 606, 1657, 603, 540, 605, 1650, 603, 1651, 599, 1657, 597, 40176, 9122, 2236, 632, 96626, 9107, 2233, 632]
    let green: number[] = [9121, 4533, 587, 539, 595, 547, 594, 547, 594, 572, 571, 547, 601, 541, 592, 561, 581, 556, 584, 1654, 600, 1652, 601, 1653, 600, 1670, 594, 1641, 602, 1652, 672, 1580, 601, 1652, 654, 1598, 651, 494, 593, 1657, 651, 1602, 656, 489, 654, 483, 663, 492, 649, 478, 658, 485, 659, 1594, 655, 483, 688, 455, 656, 1597, 666, 1582, 658, 1596, 657, 1595, 657, 40089, 9164, 2180, 655, 96626, 9107, 2233, 632]
    let white: number[] = [9157, 4504, 668, 455, 632, 512, 655, 485, 636, 538, 622, 505, 639, 481, 661, 479, 661, 493, 645, 1601, 657, 1594, 678, 1574, 658, 1597, 657, 1596, 659, 1595, 657, 1598, 656, 1613, 640, 488, 652, 1596, 659, 483, 663, 1587, 665, 478, 667, 478, 654, 516, 626, 485, 659, 1593, 658, 483, 659, 1599, 652, 485, 664, 1608, 642, 1593, 657, 1597, 656, 1597, 656, 40104, 9166, 2183, 631, 96649, 9146, 2204, 630]
    let color16: number[] = [9139, 4513, 618, 530, 595, 540, 603, 540, 602, 554, 589, 536, 606, 536, 605, 536, 602, 541, 603, 1651, 605, 1650, 603, 1650, 602, 1651, 642, 1615, 636, 1621, 634, 1617, 637, 1620, 605, 537, 598, 1652, 630, 1625, 603, 1652, 614, 527, 643, 498, 600, 541, 648, 495, 603, 1651, 603, 535, 603, 539, 605, 535, 606, 1652, 602, 1648, 605, 1650, 604, 1649, 606, 40137, 9125, 2252, 587, 96656, 9110, 2233, 639]
    let flash: number[] = [9181, 4458, 660, 480, 687, 459, 652, 488, 654, 520, 624, 485, 656, 489, 651, 482, 656, 488, 631, 1626, 659, 1594, 654, 1596, 657, 1598, 656, 1598, 675, 1577, 658, 1595, 657, 1597, 633, 510, 664, 478, 659, 1595, 659, 486, 664, 1588, 653, 486, 657, 485, 657, 480, 675, 1604, 634, 1597, 656, 488, 634, 1616, 655, 488, 663, 1591, 658, 1595, 657, 1595, 658, 40073, 9180, 2170, 659, 96566, 9186, 2179, 657]
    let fade: number[] = [9164, 4456, 659, 488, 653, 475, 655, 483, 662, 478, 673, 467, 662, 478, 665, 480, 660, 485, 655, 1592, 681, 1574, 661, 1591, 695, 1559, 660, 1593, 661, 1593, 658, 1599, 657, 1598, 655, 485, 625, 1628, 647, 1604, 644, 507, 587, 545, 610, 560, 568, 562, 612, 518, 587, 1660, 633, 507, 615, 553, 567, 1660, 597, 1651, 637, 1622, 629, 1620, 632, 1642, 596, 40136, 9167, 2181, 656, 96601, 9159, 2198, 652]
    let timer120: number[] = [9151, 4496, 611, 580, 521, 568, 600, 541, 606, 536, 613, 528, 654, 488, 604, 534, 608, 535, 603, 1675, 598, 1634, 604, 1648, 647, 1607, 637, 1620, 632, 1618, 605, 1650, 628, 1628, 645, 493, 709, 429, 661, 482, 606, 1650, 635, 502, 634, 509, 635, 532, 609, 504, 635, 1621, 632, 1621, 653, 1599, 648, 491, 634, 1623, 647, 1606, 647, 1606, 606, 1646, 639, 40112, 9119, 2233, 606, 96657, 9118, 2235, 635]

    /**
    * ライトの電源をONにします。
    */
    //% block
    export function ライトを点ける(): void {
        let r = 0
        let list: number[] = []

        list = on;
        basic.pause(100)
        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        basic.showString("1")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの電源をOFFにします。
    */
    //% block
    export function ライトを消す(): void {
        let r = 0
        let list: number[] = []

        list = off
        basic.pause(100)
        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        basic.showString("0")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの色を白にしてからライトの電源をOFFにします。
    */
    //% block
    export function 白にしてライトを消す(): void {
        let r = 0
        let list: number[] = []

        for (let w = 0; w < 2; w++) {
            if (w == 0) list = white
            else list = off
            basic.pause(200)
            for (let n = 0; n < 2; n++) {
                for (let i = 0; i <= list.length - 1; i++) {
                    // Generate flashing signal
                    if (i % 2 == 1) {
                        // LED turns off
                        control.waitMicros(list[i])
                    } else {
                        // LED flashes at 38 kHz cycle
                        r = list[i]
                        while (r > 26) {
                            pins.digitalWritePin(DigitalPin.P1, 1)
                            control.waitMicros(2)
                            pins.digitalWritePin(DigitalPin.P1, 0)
                            r = r - 26
                        }
                    }
                }
            }
            basic.pause(200)
        }
        basic.showString("0")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの明るさを変化させます。
    */
    //% block
    export function ライトの明るさを変える(e: Brightness): void {
        let r = 0
        let list: number[] = []

        if (e == 0) list = brighter
        else if (e == 1) list = darker
        basic.pause(100)

        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        if (e == 0) basic.showString("+")
        else if (e == 1) basic.showString("-")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの色(赤、青、緑、白)を変更します。
    * 変更した色の情報("R", "B", "G", "W")を画面に表示します。
    * @param e 選択する色
    */
    //% block
    export function 色を変える(e: Color): void {
        let r = 0
        let list: number[] = []

        basic.pause(100)
        if (e == 0) list = red
        else if (e == 1) list = blue
        else if (e == 2) list = green
        else if (e == 3) list = white

        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                }
                else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        if (e == 0) basic.showString("R")
        else if (e == 1) basic.showString("B")
        else if (e == 2) basic.showString("G")
        else if (e == 3) basic.showString("W")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトの色をいくつかのパターン(普通、点滅、ゆっくり)で16色に変化させます。
    */
    //% block
    export function ライトの色を16色に変える(e: Mode): void {
        let r = 0
        let list: number[] = []

        basic.pause(100)
        if (e == 0) list = color16
        else if (e == 1) list = flash
        else if (e == 2) list = fade

        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        if (e == 0) basic.showLeds(`
        # . # # #
        # . # . .
        # . # # #
        # . # . #
        # . # # #
        `)
        else if (e == 1) basic.showString("F")
        else if (e == 2) basic.showString("S")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * ライトを120分間だけ点灯させます。
    */
    //% block
    export function タイマー120分(): void {
        let r = 0
        let list: number[] = []

        list = timer120;
        basic.pause(100)
        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
}
