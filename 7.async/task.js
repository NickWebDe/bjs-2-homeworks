class AlarmClock {

  constructor(alarmCollection = [], timerId = null) {
    this.alarmCollection = alarmCollection;
    this.timerId = timerId;
  }


  addClock(time, callBack, id) {
    if (id === undefined) {
      throw new Error('error text');
    } else if (this.alarmCollection.some((element) => element.id === id) != true) {
    this.alarmCollection.push(
      {
        id: id,
        time: time,
      callBack: callBack,
    })
    return;
    }  
    console.error('Такой звонок уже есть')
   }



  removeClock(id) {
    let checkArr = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((element) => element.id !== id)
    return checkArr > this.alarmCollection.length;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString('ru-Ru', {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
});
  }

  start() {
    if(this.timerId === null) {
    let checkClock = (time) => 
      this.alarmCollection.forEach((element)=> {
        if(element.time === '16:25') {
          element.callBack();
        }
      })      
    setInterval(checkClock, 1000, this.getCurrentFormattedTime())
   }
  };

  stop() {
    if(this.timerId !== null) {
      this.timerId = null;
      return;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в колличестве: ${this.alarmCollection.length}`)
    this.alarmCollection.forEach((value, idx) => 
    console.log(`Будильник номер №${idx + 1} заведен на ${value.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}