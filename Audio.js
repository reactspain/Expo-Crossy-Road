export default {
  chicken: {
    move: {
      "0":  require("./assets/audio/buck1 #010578.wav"),
      "1":  require("./assets/audio/buck2 #010599.wav"),
      "2":  require("./assets/audio/buck3 #010528.wav"),
      "3":  require("./assets/audio/buck4 #010789.wav"),
      "4":  require("./assets/audio/buck5 #010822.wav"),
      "5":  require("./assets/audio/buck6 #010812.wav"),
      "6":  require("./assets/audio/buck7 #010596.wav"),
      "7":  require("./assets/audio/buck8 #010771.wav"),
      "8":  require("./assets/audio/buck9 #010592.wav"),
      "9": require("./assets/audio/buck10 #010556.wav"),
      "10": require("./assets/audio/buck11 #010860.wav"),
      "11": require("./assets/audio/buck12 #010845.wav"),
    },
    die: {
      "0": require("./assets/audio/chickendeath.wav"),
      "1": require("./assets/audio/chickendeath2.wav"),
    }
  },
  pig: {
    // move: {
    //   "0": require("./assets/audio/pig1 #010574.mp3"),
    //   "1": require("./assets/audio/pig2 #010749.mp3"),
    //   "2": require("./assets/audio/pig3 #010834.mp3"),
    //   "3": require("./assets/audio/pig4 #010534.mp3"),
    //   "4": require("./assets/audio/pig5 #010704.mp3"),
    //   "5": require("./assets/audio/pig6 #010636.mp3"),
    //   "6": require("./assets/audio/pig7 #010799.mp3"),
    // }
  },
  car: {
    // explosion: {
    //   "0": require("./assets/audio/carexplosion #010780.mp3"),
    //   "1": require("./assets/audio/carexplosion2 #010856.mp3"),
    // },

    passive: {
      "0": require("./assets/audio/car-engine-loop-deep.wav"),
      "1": require("./assets/audio/car-horn.wav"),
    },
    
    die: {
      "0": require("./assets/audio/carhit.mp3"),
      "1": require("./assets/audio/carsquish3.wav"),
    }
   
  },
  bg_music: require("./assets/audio/car-engine-loop-deep.wav"),
  
  banner: require("./assets/audio/bannerhit3-g.wav"),
  water: require("./assets/audio/watersplashlow.mp3"),
  trainAlarm: require("./assets/audio/Train_Alarm.wav"),
  train: {
    move: {
      "0": require("./assets/audio/train_pass_no_horn.wav"),
      "1": require("./assets/audio/train_pass_shorter.wav"),
    }, 
    die: {
      "0": require("./assets/audio/trainsplat.wav"),
    }
    
  }
  
}
