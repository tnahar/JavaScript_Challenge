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

d3.select('button').on('click', () => {
    var date = d3.select('input').property('value');
    var filteredData = data.filter(obj => obj.datetime == date);
    showData(filteredData);
})