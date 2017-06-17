$(document).ready(function () {

    $('.btn-info').click(function () {
        $(this).parent().next('.tooltip').show();
        $(this).hide();
    });


    // chart systolic

    // new Chartist.Line('.ct-chart-systolic', {
    //     labels: ['25', '26', '27', '28', '29', '30', '31'],
    //     series: [
    //         [105, 110, 95, 120, 126, 116, 95]
    //     ]
    // }, {
    //     fullWidth: true,
    //     chartPadding: {
    //         right: 40
    //     }
    // });

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
//     new Chartist.Line('.ct-chart-systolic', data);

    // chart diastolic

//     new Chartist.Line('.ct-chart', {
//         labels: ['25', '26', '27', '28', '29', '30', '31'],
//         series: [
//             [105, 110, 95, 120, 126, 116, 95]
//         ]
//     }, {
//         fullWidth: true,
//         chartPadding: {
//             right: 40
//         }
//     });
//
// // Create a new line chart object where as first parameter we pass in a selector
// // that is resolving to our chart container element. The Second parameter
// // is the actual data object.
//     new Chartist.Line('.ct-chart', data);




    // Initialize a Line chart in the container with the ID chart1
    new Chartist.Line('#chart1', {
        labels: [25, 26, 27, 28, 29, 30, 31],
        series: [[100, 120, 115, 95, 100, 106, 120]]
    }, {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    });

    // Initialize a Line chart in the container with the ID chart2
    new Chartist.Line('#chart2', {
        labels: [25, 26, 27, 28, 29, 30,  31],
        series: [[120, 120, 115, 95, 100, 106, 95]]

    }, {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    });



});