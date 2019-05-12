

function Stopwatch(){
    let startTime, endTime, running, duration = 0; //private local variable

    //public functions;
    this.start = function(){
        if(running)
        console.log("Stopwatch already started");
        else
        console.log("Start the watch");

        running = true;
        startTime = new Date();
    };

    this.stop = function(){
        if(!running)
        console.log("Stopwatch already stopped");
        else
        {
            console.log("Stop the watch")

            running = false;
            endTime = new Date();

            const sec = (endTime.getTime() - startTime.getTime())/1000;
            duration+=sec;

            console.log("Time: " + duration);
        }
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        console.log("Watch reset");
    };

    //getters and setter
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    });
}

const stwatch = new Stopwatch();
stwatch.start();
stwatch.reset();
stwatch.start();
stwatch.stop();
//console.log("Duration is: " + stwatch.get);
stwatch.stop();