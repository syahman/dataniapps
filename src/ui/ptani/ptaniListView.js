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
        var list = '';
        var entry = data.feed.entry;
        $(entry).each(function () {
            list += '<div id="listPtani_' + (bil++) + '" class="list-ptani list-group-item" style="padding: 8px;">' +
                    '<b>Pasar Tani ' + this.gsx$tempat.$t + '</b>';
            if (worksheetID === "o35xmrb") {
                list += '<span class="pull-right">' +
                        '<a href="geo://' + this.gsx$latitude.$t + ',' + this.gsx$longitude.$t + '">' +
                        '<span class="fa fa-5x fa-location-arrow"></span>' +
                        '</a></span>';
            }
            list += '<br />Lokasi: ' + this.gsx$lokasi.$t + '<br />' +
                    'Operasi: ' + this.gsx$hari.$t + ', ' + this.gsx$waktuoperasi.$t +
                    '</div>';
        });
        $('#dataListPtani').html(list);
    });
}