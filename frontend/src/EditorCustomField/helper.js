"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReminderEvents = exports.getReadOnlyEventsData = exports.generateObject = exports.applyCategoryColor = void 0;
/**
 * Schedule util
 */
function applyCategoryColor(args, currentView) {
    var categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
        return;
    }
    if (currentView === 'Agenda') {
        args.element.firstChild.style.borderLeftColor = categoryColor;
    }
    else {
        args.element.style.backgroundColor = categoryColor;
    }
}
exports.applyCategoryColor = applyCategoryColor;
function generateObject(start, end, isWeekDaysOnly) {
    if (start === void 0) { start = new Date(2020, 6, 1).getTime(); }
    if (end === void 0) { end = new Date(2021, 11, 31).getTime(); }
    if (isWeekDaysOnly === void 0) { isWeekDaysOnly = false; }
    var data = [];
    var names = [
        'Story Time for Kids', 'Camping with Turtles', 'Wildlife Warriors', 'Parrot Talk', 'Birds of Prey', 'Croco World',
        'Venomous Snake Hunt', 'Face Painting & Drawing events', 'Pony Rides', 'Feed the Giants', 'Jungle Treasure Hunt',
        'Endangered Species Program', 'Black Cockatoos Playtime', 'Walk with Jungle King', 'Trained Climbers', 'Playtime with Chimpanzees',
        'Meet a small Mammal', 'Amazon Fish Feeding', 'Elephant Ride'
    ];
    var dayCount = 1000 * 60 * 60;
    var appCount = isWeekDaysOnly ? 1 : 9;
    for (var a = start, id = 1; a < end; a += (dayCount * 24)) {
        var count = Math.floor((Math.random() * appCount) + 1);
        for (var b = 0; b < count; b++) {
            var hour = Math.floor(Math.random() * 100) % 24;
            var minutes = Math.round((Math.floor(Math.random() * 100) % 60) / 5) * 5;
            var nCount = Math.floor(Math.random() * names.length);
            var startDate = new Date(new Date(a).setHours(hour, minutes));
            var endDate = new Date(startDate.getTime() + (dayCount * 2.5));
            if (isWeekDaysOnly && [0, 6].indexOf(startDate.getDay()) > -1 || [0, 6].indexOf(endDate.getDay()) > -1) {
                continue;
            }
            data.push({
                Id: id,
                Subject: names[nCount],
                StartTime: startDate,
                EndTime: endDate,
                IsAllDay: (id % 10) ? false : true
            });
            id++;
        }
    }
    return data;
}
exports.generateObject = generateObject;
var msPerDay = 86400000;
var msPerHour = 3600000;
function getReadOnlyEventsData() {
    var currentTime = new Date().setMinutes(0, 0, 0);
    var readonlyEventsData = [
        {
            Id: 1,
            Subject: 'Project Workflow Analysis',
            StartTime: new Date(currentTime + msPerDay * -2 + msPerHour * 2),
            EndTime: new Date(currentTime + msPerDay * -2 + msPerHour * 4),
            IsReadonly: true
        }, {
            Id: 2,
            Subject: 'Project Requirement Planning',
            StartTime: new Date(currentTime + msPerDay * -1 + msPerHour * 2),
            EndTime: new Date(currentTime + msPerDay * -1 + msPerHour * 4),
            IsReadonly: true
        }, {
            Id: 3,
            Subject: 'Meeting with Developers',
            StartTime: new Date(currentTime + msPerDay * -1 + msPerHour * -3),
            EndTime: new Date(currentTime + msPerDay * -1 + msPerHour * -1),
            IsReadonly: true
        }, {
            Id: 4,
            Subject: 'Team Fun Activities',
            StartTime: new Date(currentTime + msPerHour * -4),
            EndTime: new Date(currentTime + msPerHour * -2),
            IsReadonly: true
        }, {
            Id: 5,
            Subject: 'Quality Analysis',
            StartTime: new Date(currentTime + msPerHour * 1),
            EndTime: new Date(currentTime + msPerHour * 3),
            IsReadonly: false
        }, {
            Id: 6,
            Subject: 'Customer meeting – John Mackenzie',
            StartTime: new Date(currentTime + msPerHour * 5),
            EndTime: new Date(currentTime + msPerHour * 6),
            IsReadonly: false
        }, {
            Id: 7,
            Subject: 'Meeting with Core team',
            StartTime: new Date(currentTime + msPerHour * 9),
            EndTime: new Date(currentTime + msPerHour * 10),
            IsReadonly: false
        }, {
            Id: 8,
            Subject: 'Project Review',
            StartTime: new Date(currentTime + msPerDay * 1 + msPerHour * 3),
            EndTime: new Date(currentTime + msPerDay * 1 + msPerHour * 5),
            IsReadonly: false
        }, {
            Id: 9,
            Subject: 'Project demo meeting with Andrew',
            StartTime: new Date(currentTime + msPerDay * 1 + msPerHour * -4),
            EndTime: new Date(currentTime + msPerDay * 1 + msPerHour * -3),
            IsReadonly: false
        }, {
            Id: 10,
            Subject: 'Online Hosting of Project',
            StartTime: new Date(currentTime + msPerDay * 2 + msPerHour * 4),
            EndTime: new Date(currentTime + msPerDay * 2 + msPerHour * 6),
            IsReadonly: false
        }
    ];
    return readonlyEventsData;
}
exports.getReadOnlyEventsData = getReadOnlyEventsData;
function getReminderEvents() {
    var today = new Date().getTime();
    var reminderEvents = [
        {
            Id: 1,
            Subject: 'Explosion of Betelgeuse Star',
            Location: 'Space Center USA',
            StartTime: new Date(today + 5000),
            EndTime: new Date(today + (msPerHour * 2) + 5000),
            StartTimezone: "UTC",
            EndTimezone: "UTC"
        }, {
            Id: 2,
            Subject: 'Thule Air Crash Report',
            Location: 'Newyork City',
            StartTime: new Date(today - msPerDay - (msPerHour * 2)),
            EndTime: new Date(today - msPerDay),
            StartTimezone: "UTC",
            EndTimezone: "UTC"
        }, {
            Id: 3,
            Subject: 'Milky Way as Melting pot',
            Location: 'Space Center USA',
            StartTime: new Date(today - msPerDay),
            EndTime: new Date(today - msPerDay + (msPerHour * 2)),
            StartTimezone: "UTC",
            EndTimezone: "UTC"
        }, {
            Id: 4,
            Subject: 'Blue Moon Eclipse',
            Location: 'Space Center USA',
            StartTime: new Date(today + msPerDay + (msPerHour * 2)),
            EndTime: new Date(today + msPerDay + (msPerHour * 4)),
            StartTimezone: "UTC",
            EndTimezone: "UTC"
        }, {
            Id: 5,
            Subject: 'Mysteries of Bermuda Triangle',
            Location: 'Bermuda',
            StartTime: new Date(today + msPerDay),
            EndTime: new Date(today + msPerDay + (msPerHour * 2)),
            StartTimezone: "UTC",
            EndTimezone: "UTC"
        }
    ];
    return reminderEvents;
}
exports.getReminderEvents = getReminderEvents;
