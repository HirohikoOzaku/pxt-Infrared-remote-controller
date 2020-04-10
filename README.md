 ### 「赤外線リモコン」タブについて
![](http://www.kodai.uec.ac.jp/blocks_img/UR/sample.png)
#### 図. 配線図

![](http://www.kodai.uec.ac.jp/blocks_img/UR/real.png)
#### 図. 実際の配線状況

#### 1. 概要
　このカスタムブロックは、SALKING社のタッチライト（４色対応）をコントロールするもので、
ON/OFF, 色の指定等を行うブロックです。赤外線LEDと抵抗（ここでは200Ω）を利用して,
配線図のように配線することで演習ができます。
配線図は演習用のため数十センチ～１ｍ程度の距離を想定しています。
「ずっと」のブロックに直接繋げることは可能ですが、動かなくなりますので繋げないようにしてください。

#### 2. ブロックの説明
- ##### ライトを点ける  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_on.png)
ライトの電源を入れます。
ライトを点けたときの色は、ライトを消す直前の色となります。
このブロック以外で、ライトを点けることはできません。  
micro:bitの画面には[1]が表示されます。  


- ##### ライトを消す/白にしてライトを消す  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_off.png)
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_off2.png)
ライトの電源を落とします。
ただし、「白にしてライトを消す」ブロックでは、
次にライトを点けるときの色を白にするために、
ライトの色を一度白に変えてから消します。  
micro:bitの画面には[0]が表示されます。


- ##### ライトの明るさを変える  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_brighter.png)
パラメーター: 明るくする・暗くする  
ライトの明るさを変化させます。
明るさは4段階あります
ライトの初期の明るさは4なので、ライトを暗くしてからでないと、明るくなりません。  
ただし、ライトの色が白の時のみ有効。  
明るくする: micro:bitの画面には[+]が表示されます。  
暗くする　: micro:bitの画面には[-]が表示されます。


- ##### 色を変える   
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_change.png)
パラメーター: 赤・青・緑・白  
ライトの色を変化させます。
ライトが点いている状態でのみ、動作します。
ライトの色を赤・青・緑・白に変えます。
別の色へと上書き可能。  
micro:bitの画面には、それぞれ[R], [B], [G], [W]が表示されます。


- ##### ライトの色を16色に変える  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_change16)
パラメーター: 普通・点滅・ゆっくり  
ライトの色(計16色)が次々に変化するようになります。
「点滅」の場合は、点滅しながら、「ゆっくり」の場合はゆっくりと変化します。
別の色へと上書き可能。  
普通　: micro:bitの画面には[16]が表示されます。  
点滅　: micro:bitの画面には[F]が表示されます。  
ゆっくり: micro:bitの画面には[S]が表示されます。


- ##### タイマー120分  
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_timer)
ライトが120分間点いたままになります。  
micro:bitの画面には[12]が表示されます。

#### 3. 使用例
![](http://www.kodai.uec.ac.jp/blocks_img/UR/light_exp.png)
