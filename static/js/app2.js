showData(data);
function showData(data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td')
            cell.text(val);
        });
    });
};

var filteredData = data;

d3.selectAll('input').on('change', function() {
    var key = d3.select(this).attr('id');
    var value = d3.select(this).property('value');
    console.log(value);
    filteredData = filteredData.filter(obj => obj[key] == value);
    showData(filteredData);
});

d3.select('button').on('click',function() {
    console.log('clicked');
    d3.selectAll('input').property('value','');
    filteredData = data;
    showData(filteredData);
});