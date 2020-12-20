leantime.calendarController = (function () {

    var closeModal = false;

    //Constructor
    (function () {
        jQuery(document).ready(
            function () {

            }
        );

    })();

    //Functions
    var initCalendar = function(userEvents) {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var heightWindow = jQuery(".mainwrapper").height();

        var calendar = jQuery('#calendar').fullCalendar({
            height: heightWindow,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,listDay'
            },
            titleFormat: {
                month: 'MMMM yyyy'
            },
            columnFormat: {
                month: leantime.i18n.__("language.columnFormatMonth")
            },
            timeFormat: { // for event elements
                '': leantime.i18n.__("language.jstimeformat") // default
            },
            // locale
            isRTL: leantime.i18n.__("language.isRTL") == "false" ? 0 : 1,
            firstDay: leantime.i18n.__("language.firstDayOfWeek"),
            monthNames: leantime.i18n.__("language.monthNames").split(","),
            monthNamesShort: leantime.i18n.__("language.monthNamesShort").split(","),
            dayNames: leantime.i18n.__("language.dayNames").split(","),
            dayNamesShort: leantime.i18n.__("language.dayNamesShort").split(","),
            buttonText: {
                prev: '&laquo;',
                next: '&raquo;',
                prevYear: '&nbsp;&lt;&lt;&nbsp;',
                nextYear: '&nbsp;&gt;&gt;&nbsp;',
                today: leantime.i18n.__("buttons.today")
            },
            select: function(start, end, allDay) {
                var title = prompt(leantime.i18n.__("label.event_title"));
                if (title) {
                    calendar.fullCalendar('renderEvent',
                        {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay
                        },
                        true // make the event "stick"
                    );
                }
                calendar.fullCalendar('unselect');
            },
            events: userEvents,
            eventColor: '#0866c6'
        });
    };

    var initEventDatepickers = function () {

        Date.prototype.addDays = function (days) {
            this.setDate(this.getDate() + days);
            return this;
        };
        jQuery.datepicker.setDefaults(
            { beforeShow: function (i) {
                if (jQuery(i).attr('readonly')) { return false; } } }
        );

        var dateFormat = leantime.i18n.__("language.jsdateformat"),

            from = jQuery("#event_date_from")
                .datepicker(
                    {
                        numberOfMonths: 1,
                        dateFormat:  leantime.i18n.__("language.jsdateformat"),
                        dayNames: leantime.i18n.__("language.dayNames").split(","),
                        dayNamesMin:  leantime.i18n.__("language.dayNamesMin").split(","),
                        dayNamesShort: leantime.i18n.__("language.dayNamesShort").split(","),
                        monthNames: leantime.i18n.__("language.monthNames").split(","),
                        currentText: leantime.i18n.__("language.currentText"),
                        closeText: leantime.i18n.__("language.closeText"),
                        buttonText: leantime.i18n.__("language.buttonText"),
                        isRTL: leantime.i18n.__("language.isRTL"),
                        nextText: leantime.i18n.__("language.nextText"),
                        prevText: leantime.i18n.__("language.prevText"),
                        weekHeader: leantime.i18n.__("language.weekHeader"),
                    }
                )
                .on(
                    "change", function () {
                        to.datepicker("option", "minDate", getDate(this));
                    }
                ),

            to = jQuery("#event_date_to").datepicker(
                {
                    numberOfMonths: 1,
                    dateFormat:  leantime.i18n.__("language.jsdateformat"),
                    dayNames: leantime.i18n.__("language.dayNames").split(","),
                    dayNamesMin:  leantime.i18n.__("language.dayNamesMin").split(","),
                    dayNamesShort: leantime.i18n.__("language.dayNamesShort").split(","),
                    monthNames: leantime.i18n.__("language.monthNames").split(","),
                    currentText: leantime.i18n.__("language.currentText"),
                    closeText: leantime.i18n.__("language.closeText"),
                    buttonText: leantime.i18n.__("language.buttonText"),
                    isRTL: leantime.i18n.__("language.isRTL"),
                    nextText: leantime.i18n.__("language.nextText"),
                    prevText: leantime.i18n.__("language.prevText"),
                    weekHeader: leantime.i18n.__("language.weekHeader"),
                }
                )
                .on(
                    "change", function () {
                        from.

                        datepicker("option", "maxDate", getDate(this));
                    }
                );

                function getDate( element )
                {
                    var date;
                    try {
                        date = jQuery.datepicker.parseDate(dateFormat, element.value);
                    } catch( error ) {
                        date = null;
                        console.log(error);
                    }
                    return date;
                }


            jQuery('#event_time_from').timepicker({
                showMeridian:leantime.i18n.__("language.isMeridian") == "false" ? false : true
            });
            jQuery('#event_time_to').timepicker({
                showMeridian:leantime.i18n.__("language.isMeridian") == "false" ? false : true
            });

    }


    // Make public what you want to have public, everything else is private
    return {
        initCalendar:initCalendar,
        initEventDatepickers:initEventDatepickers
    };
})();
