/* Heartbeat simulator class, to associate name with heartbeat, randomly generate heart rate and post to console every second */
class HeartBeatSimulator {
    constructor(name) {
        //person's name
        this.name = name;
        //heartbeats per minute - initially null
        this.bpm = null;
        this.MakeBeat();
    }


    RandomHeartRate() {
                //Get random integer between 60 and 100 and assign to heartbeat
                let bpmRand = 60 + parseInt(Math.random() * 40);
                this.bpm = bpmRand;
                console.log(this.name + "'s heartbeat = " + this.bpm, '\n');
    }

    MakeBeat() {
        setInterval(()=>{this.RandomHeartRate()}, 1000);
    }
   
}

var paulBiosim = new HeartBeatSimulator("Paul");
var debbieBiosim = new HeartBeatSimulator("Debbie");
var jasonBiosim = new HeartBeatSimulator("Jason");
