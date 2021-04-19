import { appartment, bike, car2, car3, car4, car5, drivers, flat, garage, house, liability, massage, motorcycle, motorInsurance, propertyInsurance, scooter, storage } from "./constraints"


const comapnyA = {
    name: "Company A",
    requires: {
        or : [[appartment, house]],
        and: [propertyInsurance]
    }
}
const comapnyB = {
    name: "Company B",
    requires: {
        or : [[car5, car4]],
        and: [drivers]
    }
}
const comapnyC = {
    name: "Company C",
    requires: {
        or : [],
        and: [propertyInsurance]
    }
}
const comapnyD = {
    name: "Company D",
    requires: {
        or : [[appartment, house, flat]],
        and: [propertyInsurance]
    }
}
const comapnyE = {
    name: "Company E",
    requires: {
        or : [[car2,car3, car4, car5]],
        and: [drivers]
    }
}
const comapnyF = {
    name: "Company F",
    requires: {
        or : [[scooter, bike, motorcycle]],
        and: [motorInsurance, drivers]
    }
}
const comapnyG = {
    name: "Company G",
    requires: {
        or : [],
        and: [massage,liability]
    }
}

const comapnyH = {
    name: "Company H",
    requires: {
        or : [[storage, garage]],
        and: []
    }
}
const comapnyJ = {
    name: "Company J",
    requires: {
        or : [],
        and: []
    }
}

// an appartment or a house, a 2 door car or a 3 door car and property insurance
const comapnyX = {
    name: "Company X",
    requires: {
        or : [[appartment, house], [car2,car3]],
        and: [propertyInsurance]
    }
}
const comapnyY = {
    name: "Company Y",
    requires: {
        or : [[scooter, bike, motorcycle]],
        and: [drivers]
    }
}
export const Companies = [
    comapnyA, comapnyB, comapnyC, comapnyD, comapnyE, comapnyF, comapnyG, comapnyH, comapnyJ, comapnyX, comapnyY

]