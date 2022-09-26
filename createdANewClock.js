//"cerner_2tothe5th_2022"

// Function to create a running clock
function createClock() {
    this.currentDate = new Date();
    this.hours = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
}
createClock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
};
createClock.prototype.update = function () {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
createClock.prototype.updateTime = function (secs) {
    this.seconds += secs;
    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
    }
    if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
    }
    if (this.hours >= 24) {
        this.hours = 0;
    }
};
var clock = new createClock();
clock.run();
