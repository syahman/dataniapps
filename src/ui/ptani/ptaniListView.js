(function (dt) {
    'use strict';
    dt.extend = jQuery.extend;
    createList("o35xmrb");//Default Pasar Tani Mega
    $('#ptaniList').on('change', function () {
        createList($(this).val());
    });

    $('#findPtaniList').on('keyup blur', function () {
        var rex = new RegExp($(this).val(), 'i');
        $('#dataListPtani div').hide();
        $('#dataListPtani div').filter(function () {
            return rex.test($(this).text());
        }).show();
    });
    
    $("body").on("click", ".list-group-item", function () {
        console.log($(this).data('lat') + '::' + $(this).data('long'));
        $('#cuacaPtani').html('');
        var lat = $(this).data('lat'), long = $(this).data('long'), tempat = $(this).data('tempat');
            var urlW = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + lat + '&lon=' + long;
            $.getJSON(urlW, function (dataWeather) {
                var w = dataWeather.weather[0];
                $('#btnGoPtani').html(
                        '<a href="geo:' + lat + ',' + long + '" data-rel="external" class="btn btn-success">' +
                        '<span class="fa fa-location-arrow"></span> Go' +
                        '</a>');
                $('#cuacaPtani').html(
                        '<h3><b>' + tempat + '</b></h3>' +
                        '<h1><img src="http://openweathermap.org/img/w/' + w.icon + '.png" alt="' + w.description + '">' +
                        ' '+dataWeather.main.temp+'&deg;C'+
                        '</h1><br />'+w.main);
         
            });
    });

})(dt); //pass in global name ̰space

//worksheetID retrieve in <id>/url</id> from xml::
//https://spreadsheets.google.com/feeds/worksheets/1J7J58i5g_7Q17G2Z-KpJLkJNrLZlYdiQfeZ37ioPHO8/private/full
function createList(worksheetID) {
    // ID of the Google Spreadsheet
    var spreadsheetID = "1J7J58i5g_7Q17G2Z-KpJLkJNrLZlYdiQfeZ37ioPHO8";
    // Make sure it is public or set to Anyone with link can view 
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + worksheetID + "/public/values?alt=json";
    $.getJSON(url, function (data) {
        var bil = 1;
        var modal = '', list = '';
        var entry = data.feed.entry;
        $(entry).each(function () {
            if (typeof this.gsx$latitude !== 'undefined'){
                modal = 'data-tempat="Pasar Tani '+this.gsx$tempat.$t + '" data-lat="' + this.gsx$latitude.$t + '" data-long="' + this.gsx$longitude.$t + '"' +
                        ' data-toggle="modal" data-target="#ptaniCuacaModal"';
            }
            list += '<div id="listPtani_' + (bil++) + '" class="list-ptani list-group-item" style="padding: 8px;" ' +
                    modal + '>' +
                    '<b>Pasar Tani ' + this.gsx$tempat.$t + '</b>' +
                    '<br />Lokasi: ' + this.gsx$lokasi.$t + '<br />' + 
                    'Operasi: ' + this.gsx$hari.$t + ', ' + this.gsx$waktuoperasi.$t + '<br />' +
                    '</div>';
        });
        $('#dataListPtani').html(list);
    });
}