/**
 * Created by Suraj on 4/18/2015.
 */
window.onload=function() {
    drawgraph(55,45);

}


function drawgraph(male,female){
    $(function () {
        $('#container').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: 'Percentage of Male/Female in Employees'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Percentage Gender',
                data: [
                    ['Male', male],
                    ['Female', female]
                ]
            }]
        });
    });


}