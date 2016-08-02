System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PredictiveText, inputs;
    return {
        setters:[],
        execute: function() {
            class PredictiveText {
                constructor() {
                    this.list = inputs.states;
                }
                set_inputs(type) {
                    if (inputs[type] != null) {
                        this.list = inputs[type];
                    }
                    else {
                        console.error("Input type not valid: " + type);
                    }
                }
            }
            exports_1("PredictiveText", PredictiveText);
            inputs = {
                states: [
                    "Alabama",
                    "Alaska",
                    "American Samoa",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "District Of Columbia",
                    "Federated States Of Micronesia",
                    "Florida",
                    "Georgia",
                    "Guam",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Marshall Islands",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico",
                    "New York",
                    "North Carolina",
                    "North Dakota",
                    "Northern Mariana Islands",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Palau",
                    "Pennsylvania",
                    "Puerto Rico",
                    "Rhode Island",
                    "South Carolina",
                    "South Dakota",
                    "Tennessee",
                    "Texas",
                    "Utah",
                    "Vermont",
                    "Virgin Islands",
                    "Virginia",
                    "Washington",
                    "West Virginia",
                    "Wisconsin",
                    "Wyoming"
                ],
                sample: [
                    'test',
                    'team'
                ]
            };
        }
    }
});
