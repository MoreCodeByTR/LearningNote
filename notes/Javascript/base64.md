> Base64编码、解码
> 
> 方法名就是 atob 和 btoa ，具体语法如下：
```javascript
window.btoa('china is so nb') // 编码
"Y2hpbmEgaXMgc28gbmI="
window.atob("Y2hpbmEgaXMgc28gbmI=") // 解码
"china is so nb"
```