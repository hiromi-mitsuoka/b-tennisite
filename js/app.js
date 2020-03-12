particlesJS('hoge', {
  "particles": {

    //--シェイプの設定----------
    "number": {
      "value": 80, //シェイプの数
      "density": {
        "enable": true, //シェイプの密集度を変更するか否か
        "value_area": 400 //シェイプの密集度
      }
    },
    "shape": {
      "type": "circle",
    },
    "color": {
      "value": "#FFFFFF" //シェイプの色
    },
    "opacity": {
      "value": 1, //シェイプの透明度
      "random": true, //シェイプの透明度をランダムにするか否か
      "anim": {
        "enable": false, //シェイプの透明度をアニメーションさせるか否か
        "opacity_min": 0.1, //透明度の最小値
        "sync": false //全てのシェイプを同時にアニメーションさせるか否か
      }
    },
    "size": {
      "value": 40, //シェイプの大きさ
      "random": true, //シェイプの大きさをランダムにするか否か
      "anim": {
        "enable": true, //シェイプの大きさをアニメーションさせるか否か
        "speed": 1, //アニメーションのスピード
        "size_min": 0.01, //大きさの最小値
        "sync": false //全てのシェイプを同時にアニメーションさせるか否か
      }
    },
    //--------------------

    //--線の設定----------
    "line_linked": {
      "enable": false, //線を表示するか否か
    },
    //--------------------

    //--動きの設定----------
    "move": {
      "speed": 5, //シェイプの動くスピード
      "straight": false, //個々のシェイプの動きを止めるか否か
      "direction": "none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
      "out_mode": "out" //エリア外に出たシェイプの動き(out、bounceより選択)
    }
    //--------------------

  },

  "interactivity": {
    "detect_on": "canvas",
  },
}
);