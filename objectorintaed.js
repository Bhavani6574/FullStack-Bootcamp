
let AlarmClock = {
    Time : "5:00 AM",
    isOn: "Yes",

    ring  :  function() {
        console.log("Alarm is ringing");
    },
    Snooze :  function() {

        console.log("Alarm turned into Snooze Mood!")
    },
    turnoff :  function() {
        console.log("Alarm is Turned Off!")
    }
};
console.log(AlarmClock.Time)
console.log(AlarmClock.isOn);
AlarmClock.ring()
AlarmClock.Snooze();
AlarmClock.turnoff()


let student = {
    name:"Bhavani.M",
    wakeUptime:"5:00 AM",
    energy : "full",
    wakeup : function() {
        console.log("only if she get up at On time");
    },
    excercise : function() {
        console.log("If her mood is good!! ")
    } ,
    study : function() {
        console.log("she will Never miss it!!")
    }
};
console.log(student.name)
console.log(student.wakeUptime);
console.log(student.energy);
student.wakeup()
student.excercise()
student.study()


