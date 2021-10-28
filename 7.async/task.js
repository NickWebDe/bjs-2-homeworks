class AlarmClock {

  constructor(alarmCollection = [], timerId = null) {
    this.alarmCollection = alarmCollection;
    this.timerId = timerId;
  }

  addClock(time, callBack, id) {
    if (id === undefined) {
      throw new Error('error text');
    } this.alarmCollection.forEach((item) => {
      if(item === id) {
        console.error('Такой Id уже есть')
             }
    })
    this.alarmCollection.push(
      {
        id: id,
        time: time,
      callBack: callBack,
    })
  }

  removeClock(id) {
    let checkArr = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((element) => element.id !== id)
    return checkArr > this.alarmCollection.length;
  }

  getCurrentFormattedTime() {
    let currentDate = String(new Date);
    return currentDate.substr(16,5);
  }

  start(call) {
 
  }

  stop() {
    if(this.timerId !== undefined) {
      this.id = null;
    }
  }

  
  printAlarms() {
    this.alarmCollection.forEach((value) => {
      for (let key in value) {
        if(key === 'id' || key === 'time') {
          console.log(key + ' ' + value[key])
        }
      } 
      })
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection.splice(0, this.alarmCollection.length);
  }
}