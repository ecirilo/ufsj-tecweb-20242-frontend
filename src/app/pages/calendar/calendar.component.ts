import {Component, OnInit} from '@angular/core';
import {TPalestra} from "../../model/palestra.model";
import {PalestraService} from "../../service/palestra.service";
import {CalendarOptions} from "@fullcalendar/core";

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayjs from "dayjs";

@Component({
    templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

    palestras: TPalestra[] = [];

    calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin],
        initialView: 'timeGridWeek',
        initialDate: dayjs('2024-11-25').toDate(),
        slotMinTime: '08:00:00',
        slotMaxTime: '19:00:00',
        slotLabelFormat: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        },
        weekends: false,
        expandRows: true,
        editable: false,
        selectable: false,
        headerToolbar: false,
        allDaySlot: false,
    };

    constructor(
        private palestraService: PalestraService
    ) { }

    ngOnInit() {
        this.palestraService.getAll().subscribe((_palestras: TPalestra[]): void => {
            this.calendarOptions.events = _palestras.map((palestra: TPalestra): any => {
                return {
                    title: `${palestra.titulo} - ${palestra.palestrante}`,
                    start: dayjs(palestra.dataHora).toDate(),
                    end: dayjs(palestra.dataHora).add(1, 'hour').toDate(),
                };
            });
        });
    }
}
