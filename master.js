  csnum = `0${0}`
        snum = `0${0}`
        mnum = `0${0}`
        domcs = document.querySelector("#cs")
        doms = document.querySelector("#s")
        domm = document.querySelector("#m")

        function corno() {
            if (csnum < 99) {
                csnum++
                if (csnum < 10) {
                    csnum = "0" + csnum
                    domcs.innerHTML = csnum
                }
                else {
                    domcs.innerHTML = csnum
                }
            }
            else {
                csnum = 0
                if (snum < 59) {
                    doms.innerHTML = "00"
                    snum++
                    if (snum < 10) {
                        snum = "0" + snum
                        doms.innerHTML = snum
                    }
                    else {
                        doms.innerHTML = snum
                    }
                }
                else {
                    snum = 0
                    doms.innerHTML = "00"
                    mnum++
                    if (mnum < 10) {
                        mnum = "0" + mnum
                        domm.innerHTML = mnum
                    }
                    else {
                        domm.innerHTML = mnum
                    }
                }
            }
        }

        let start = document.getElementById("start")
        let setinter
        start.addEventListener("click", () => {
            if (start.getAttribute("data-status") == "off") {
                setinter = setInterval(corno, 10)
                start.setAttribute("data-status", "on")
            }
        })

        document.getElementById("pause").addEventListener("click", () => {
            start.setAttribute("data-status", "off")
            clearInterval(setinter)
        })

        document.getElementById("reset").addEventListener("click", () => {
            start.setAttribute("data-status", "off")
            clearInterval(setinter)
            csnum = `0${0}`
            snum = `0${0}`
            mnum = `0${0}`
            domcs.innerHTML = "00"
            doms.innerHTML = "00"
            domm.innerHTML = "00"
        })

        document.getElementById("lap").addEventListener("click", () => {
            let li = document.createElement("li")
            li.classList.add("txt")
            li.innerHTML = `${mnum}:${snum}:${csnum}`
            document.getElementById("laptime").appendChild(li)
        })