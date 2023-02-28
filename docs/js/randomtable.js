// [Roll](javascript:;){ .md-button .random-table-resolve data="rt" }
// <div id="rt"></div>
// | Values | Proposition
// | - | :-
// | 1 | Yes
// | 2-3 | No

function loadTable(id) {
    let result = []

    element = document.getElementById(id)
    while (true) {
        element = element.nextElementSibling
        if (element.getElementsByTagName("TABLE").length != 0) {
            break
        }
    }

    table = element.getElementsByTagName("TABLE")[0]
    tbody = table.getElementsByTagName("TBODY")[0]
    trs = tbody.getElementsByTagName("TR")
    for (let i = 0; i < trs.length; i++) {
        let line = []

        tds = trs[i].getElementsByTagName("TD")
        for (let j = 0; j < tds.length; j++) {
            line.push(tds[j].innerHTML)
        }
        result.push(line)
    }

    // console.log(`loadTable: result: ${result}`)
    return result
}


function getRange(randomTable, columnValues) {
    let range = [false, false]
    const regex = /[0-9]+/g

    for (i = 0; i < randomTable.length; i++) {
        // indexes of "values"
        let min = 0
        let max = 1

        splitField = randomTable[i][columnValues].match(regex)
        // console.log(`getRange: splitField = ${splitField}`)

        // values = splitField.map(parseInt)
        // Doesn't work as expected, so doing it by hand
        let values = []
        for (let i = 0; i < splitField.length; i++) {
            values[i] = parseInt(splitField[i])
        }
        // console.log(`getRange: splitField[1] = ${splitField[1]} values[1] = ${values[1]}`)
        // console.log(parseInt(splitField[1]))
        // console.log(`getRange: values = ${values}`)

        if (values.length == 1) {
            min = max = 0
        } else if (values[0] < values[1]) {
            min = 0; max = 1
        } else {
            min = 1; max = 0
        }

        if (! range[0]) {
            range[0] = values[min]
            range[1] = values[max]
            continue
        }

        // 0: min
        if (values[min] < range[0]) {
            range[0] = values[min]
            continue
        }
        // 1: max
        if (values[max] > range[1]) {
            range[1] = values[max]
        }
    }
    // console.log(`getRange: range = ${range}`)
    return range
}


function getProposition(value, randomTable, columnValues, columnPropositions) {
    const regex = /[0-9]+/g

    for (i = 0; i < randomTable.length; i++) {
        // indexes of "values"
        let min = 0
        let max = 1

        splitField = randomTable[i][columnValues].match(regex)

        let values = []
        for (let i = 0; i < splitField.length; i++) {
            values[i] = parseInt(splitField[i])
        }

        if (values.length == 1) {
            if (value == values[0]) {
                return randomTable[i][columnPropositions]
            }
            continue
        } else if (values[0] < values[1]) {
            min = 0; max = 1
        } else {
            min = 1; max = 0
        }

        if ((values[min] <= value) && (value <= values[max])) {
            return randomTable[i][columnPropositions]
        }
    }
    return NaN
}


function resolveRandomTable(sourceEvent) {
        randomTable = loadTable(sourceEvent.target.getAttribute("data"))
        // console.log(`main: randomTable = ${randomTable}`)

        range = getRange(randomTable, 0)
        // console.log(`main: range = ${range}`)

        rand = Math.random()
        randomValue = Math.floor(rand * (range[1] - range[0] + 1) + range[0] - 0)
        console.log(`Math.floor(rand ${rand} * (range[1] ${range[1]}- range[0] ${range[0]} + 1) + range[0] ${range[0]} - 1) = randomValue ${randomValue}`)
        sourceEvent.target.innerHTML = getProposition(randomValue, randomTable, 0, 1)
}


window.addEventListener('load', (event) => {
    elements = document.getElementsByClassName("random-table-resolve")
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", resolveRandomTable)
    }
});


function groupRoll(sourceEvent) {
    theClass = sourceEvent.target.getAttribute("data")
    elements = document.getElementsByClassName(theClass)
    console.log(`groupRoll: theClass = ${theClass} elements.length = ${elements.length}`)
    for (let i = 0; i < elements.length; i++) {
        elements[i].click()
    }
}

window.addEventListener('load', (event) => {
    elements = document.getElementsByClassName("random-table-group-roll")
    console.log(elements.length)
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].innerHTML)
        elements[i].addEventListener("click", groupRoll)
    }
});
