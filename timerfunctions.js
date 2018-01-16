let clock = {h:0, m:0, s:0};
let interval = 1000;
let tid = null;

        function start() {
            showtime();
            if (!tid) {
                tid = setInterval(timego,interval);
            }
            console.log("start");
            clock.h = 0;
            clock.m = 0;
            clock.s = 0;
        }

        function faster() {
            if (tid) {
                if (interval > 20) {
                    interval /= 2;
                    clearInterval(tid);
                    tid = setInterval(timego, interval);
                    console.log("faster");
                } else {
                    clearInterval(tid);
                    tid = setInterval(timego, interval);
                    console.log("faster no more");
                }
            }
        }

        function slower() {
            if (tid) {
            interval *= 2;
            clearInterval(tid);
            tid = setInterval(timego, interval);
            console.log("slower");
            }
        }

        function paused() {
            if (tid) {
                clearInterval(tid);
                tid = 0;
                document.getElementById("pause").textContent = "Continue";
                document.title="Timer:paused";
            } else {
                tid = setInterval(timego,interval);
                document.getElementById("pause").textContent = "Pause";
            }
            console.log("paused");
        }

        function timego() {
            if (clock.s > 59) {
                clock.s = 0;
                clock.m++;
            }
            if (clock.m > 59) {
                clock.m = 0;
                clock.h++
            }
            if (clock.h > 23) {
                clock.h = 0;
            }
            clock.s++;
            console.log("Tick");
            showtime();
        }

        function showtime() {
            let strh = "00" + clock.h;
            let strm = "00" + clock.m;
            let strs = "00" + clock.s;
            document.getElementById("hours").innerHTML = strh.substring(strh.length-2);
            document.getElementById("minutes").innerHTML = strm.substring(strm.length-2);
            document.getElementById("seconds").innerHTML = strs.substring(strs.length-2);

            document.title = "Timer: " + strh.substring(strh.length-2) +" " + strm.substring(strm.length-2) + " " + strs.substring(strs.length-2);
        }

        function reset() {
            if (tid) {
                clearInterval(tid);
                tid = 0;
            };
                console.log("reset");
                interval = 1000;
                clock.s = 0;
                clock.m = 0;
                clock.h = 0;
                document.getElementById("pause").textContent = "Pause";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
                // tid = setInterval(timego, interval)
                tid = setInterval(timego,interval);

        }
