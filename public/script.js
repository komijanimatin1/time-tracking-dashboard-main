"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// daily , weekly , monthly
const typeOfTime = document.querySelectorAll('.typeOfTimes p');
const currentTime = document.querySelectorAll('.activitiesTime');
const previousTime = document.querySelectorAll('.card div p span');
//fetching data
function fetchingData() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "./data.json";
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`response status:${response.status}`);
            }
            else {
                const json = yield response.json();
                return json;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("An unexpected error occurred:", error);
            }
            return [];
        }
    });
}
//making elements for diffferent type of time
//changing data to daily information
function dailyChange() {
    fetchingData().then((res) => {
        currentTime.forEach((element, index) => {
            var _a, _b, _c;
            if (((_c = (_b = (_a = res[index]) === null || _a === void 0 ? void 0 : _a.timeframes) === null || _b === void 0 ? void 0 : _b.daily) === null || _c === void 0 ? void 0 : _c.current) !== undefined) {
                element.textContent = `${res[index].timeframes.daily.current} hrs`; // مقدار current
            }
            else {
                console.warn(`Data not found for index ${index}`);
            }
        });
        previousTime.forEach((element, index) => {
            var _a, _b, _c;
            if (((_c = (_b = (_a = res[index]) === null || _a === void 0 ? void 0 : _a.timeframes) === null || _b === void 0 ? void 0 : _b.daily) === null || _c === void 0 ? void 0 : _c.previous) !== undefined) {
                element.textContent = `${res[index].timeframes.daily.previous} hrs`; // مقدار current
            }
            else {
                console.warn(`Data not found for index ${index}`);
            }
        });
    }).catch((error) => console.log(error));
    //changing data to weekly information
}
function weeklyChange() {
    fetchingData().then((res) => {
        currentTime.forEach((element, index) => {
            var _a, _b, _c;
            if (((_c = (_b = (_a = res[index]) === null || _a === void 0 ? void 0 : _a.timeframes) === null || _b === void 0 ? void 0 : _b.weekly) === null || _c === void 0 ? void 0 : _c.current) !== undefined) {
                element.textContent = `${res[index].timeframes.weekly.current} hrs`;
            }
            else {
                console.warn(`Data not found for index ${index}`);
            }
        });
        previousTime.forEach((element, index) => {
            var _a, _b, _c;
            if (((_c = (_b = (_a = res[index]) === null || _a === void 0 ? void 0 : _a.timeframes) === null || _b === void 0 ? void 0 : _b.weekly) === null || _c === void 0 ? void 0 : _c.previous) !== undefined) {
                element.textContent = `${res[index].timeframes.weekly.previous} hrs`;
            }
            else {
                console.warn(`Data not found for index ${index}`);
            }
        });
    }).catch((error) => console.log(error));
    //changing data to monthly information
}
function monthlyChange() {
    fetchingData().then((res) => {
        currentTime.forEach((element, index) => {
            var _a, _b, _c;
            if (((_c = (_b = (_a = res[index]) === null || _a === void 0 ? void 0 : _a.timeframes) === null || _b === void 0 ? void 0 : _b.monthly) === null || _c === void 0 ? void 0 : _c.current) !== undefined) {
                element.textContent = `${res[index].timeframes.monthly.current} hrs`; // مقدار current
            }
            else {
                console.warn(`Data not found for index ${index}`);
            }
        });
        previousTime.forEach((element, index) => {
            var _a, _b, _c;
            if (((_c = (_b = (_a = res[index]) === null || _a === void 0 ? void 0 : _a.timeframes) === null || _b === void 0 ? void 0 : _b.monthly) === null || _c === void 0 ? void 0 : _c.previous) !== undefined) {
                element.textContent = `${res[index].timeframes.monthly.previous} hrs`; // مقدار current
            }
            else {
                console.warn(`Data not found for index ${index}`);
            }
        });
    }).catch((error) => console.log(error));
}
//Action when clicked on Daily
let isDaily = false;
let isWeekly = false;
let isMonthly = false;
typeOfTime[0].addEventListener('click', () => {
    if (!isDaily) {
        isDaily = true;
        isWeekly = false;
        isMonthly = false;
        dailyChange();
    }
});
//Action when clicked on Weekly
typeOfTime[1].addEventListener('click', () => {
    if (!isWeekly) {
        isWeekly = true;
        isMonthly = false;
        isDaily = false;
        weeklyChange();
    }
});
//Action when clicked on Monthly
typeOfTime[2].addEventListener('click', () => {
    if (!isMonthly) {
        isMonthly = true;
        isWeekly = false;
        isDaily = false;
        monthlyChange();
    }
});
