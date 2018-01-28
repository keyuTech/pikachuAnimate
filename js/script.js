!function(){
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(()=>{
      n+=1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if(n >= code.length){
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 40)
  }
  let code = `
  /*
  *先画一张大脸
  */
  .preview{
    height: 100%;
    display: flex;
    background: #ffe600;
    justify-content: center;
    align-items: center;
  }
  #container {
    width: 400px;
    height: 200px;
    position: relative;
  }
  /*
  *然后呢，画一个小鼻子
  */
  #nose {
    border: 10px solid transparent;
    border-top-color: black;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 60px;
  }
  /*
  *再来两只大眼睛
  */
  .eye {
    border: 3px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #2e2e2e;
    position: absolute;
    top: 30px;
  }
  .eye-left {
    right: 50%;
    margin-right: 45px;
  }
  .eye-right {
    left: 50%;
    margin-left: 45px;
  }
  /*
  *眼睛里要有眼珠子
  */
  .eye::before {
    content: '';
    display: block;
    position: absolute;
    left: 8px;
    top: 2px;
    height: 20px;
    width: 20px;
    background: white;
    border: 1px solid white;
    border-radius: 50%;
  }
  /*
  *要有腮红才可爱
  */
  .face {
    position: absolute;
    top: 120px;
    border: 2px solid black;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    background: red;
  }
  /*
  *左边一个
  */
  .face-left {
    right: 50%;
    margin-right: 110px;
  }
  /*
  *右边一个
  */
  .face-right {
    left: 50%;
    margin-left: 110px;
  }
  /*
  *上嘴唇
  */
  .upperLip {
    border: 3px solid black;
    border-top: none;
    position: absolute;
    width: 60px;
    height: 20px;
    top: 85px;
    background-color: #ffe600;
  }
  .upperLipLeft {
    right: 50%;
    border-right: none;
    border-bottom-left-radius: 60px 20px;
    transform: rotate(-25deg)
  }
  .upperLipRight {
    left: 50%;
    border-left: none;
    border-bottom-right-radius: 60px 20px;
    transform: rotate(25deg)
  }
  /*
  *下嘴唇
  */
  #lowerLipBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 93px;
    width: 300px;
    height: 120px;
    overflow: hidden;
  }
  /*
  *画一个略略略的舌头
  */
  #lowerLip {
    border: 4px solid black;
    width: 140px;
    height: 1000px;
    position: absolute;
    left: 50%;
    margin-left: -72px;
    bottom: 0;
    border-bottom-left-radius: 72px 500px;
    border-bottom-right-radius: 72px 500px;
    border-top-left-radius: 72px 80px;
    border-top-right-radius: 72px 80px;
    background: #ff485f;
    box-shadow: inset 0 885px 0 20px rgb(155, 0, 10);
  }
  /*
  *这仅仅是一只皮卡丘吗？
  */
  /*
  *不！这是艺术！
  */
  /*
  *这只皮卡丘送给看完的你～(๑\`･ᴗ･´๑)
  */`
  writeCode('', code)
}.call()