// daily , weekly , monthly
const typeOfTime = document.querySelectorAll('.typeOfTimes p') as NodeList;

const currentTime = document.querySelectorAll('.activitiesTime') as NodeList;
const previousTime = document.querySelectorAll('.card div p span') as NodeList;

//fetching data
async function fetchingData() {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`response status:${response.status}`)
        } else {
            const json = await response.json();
            return json
        }

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }
        return [];
    }
}

//making elements for diffferent type of time

//changing data to daily information
function dailyChange() {
    fetchingData().then((res) => {
        currentTime.forEach((element: Node, index: number) => {
            if (res[index]?.timeframes?.daily?.current !== undefined) {
                element.textContent = `${res[index].timeframes.daily.current} hrs`; // مقدار current
            } else {
                console.warn(`Data not found for index ${index}`);
            }
        })
        previousTime.forEach((element: Node, index: number) => {
            if (res[index]?.timeframes?.daily?.previous !== undefined) {
                element.textContent = `${res[index].timeframes.daily.previous} hrs`; // مقدار current
            } else {
                console.warn(`Data not found for index ${index}`);
            }
        })
    }).catch((error) => console.log(error))

//changing data to weekly information
}

function weeklyChange() {
    fetchingData().then((res) => {
        currentTime.forEach((element: Node, index: number) => {
            if (res[index]?.timeframes?.weekly?.current !== undefined) {
                element.textContent = `${res[index].timeframes.weekly.current} hrs`;
            } else {
                console.warn(`Data not found for index ${index}`);
            }
        })
        previousTime.forEach((element: Node, index: number) => {
            if (res[index]?.timeframes?.weekly?.previous !== undefined) {
                element.textContent = `${res[index].timeframes.weekly.previous} hrs`;
            } else {
                console.warn(`Data not found for index ${index}`);
            }
        })
    }).catch((error) => console.log(error))

    //changing data to monthly information
}

function monthlyChange() {
    fetchingData().then((res) => {
        currentTime.forEach((element: Node, index: number) => {
            if (res[index]?.timeframes?.monthly?.current !== undefined) {
                element.textContent = `${res[index].timeframes.monthly.current} hrs`; // مقدار current
            } else {
                console.warn(`Data not found for index ${index}`);
            }
        })
        previousTime.forEach((element: Node, index: number) => {
            if (res[index]?.timeframes?.monthly?.previous !== undefined) {
                element.textContent = `${res[index].timeframes.monthly.previous} hrs`; // مقدار current
            } else {
                console.warn(`Data not found for index ${index}`);
            }
        })
    }).catch((error) => console.log(error))
}

//Action when clicked on Daily
let isDaily: boolean = false;
let isWeekly: boolean = false;
let isMonthly: boolean = false;
typeOfTime[0].addEventListener('click', () => {
    if (!isDaily) {
        isDaily = true;
        isWeekly = false;
        isMonthly = false;
        dailyChange();
    }
})

//Action when clicked on Weekly

typeOfTime[1].addEventListener('click', () => {
    if (!isWeekly) {
        isWeekly = true;
        isMonthly = false;
        isDaily = false;
        weeklyChange()
    }
})
//Action when clicked on Monthly
typeOfTime[2].addEventListener('click', () => {
    if (!isMonthly) {
        isMonthly = true;
        isWeekly = false;
        isDaily = false;
        monthlyChange();
    }
})