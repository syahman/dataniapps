


(function (dt) {

    'use strict';

    dt.extend = jQuery.extend;

//    jQuery(window).load(function() {
    searchArray();
    //  });
    $('#findIkanList').on('keyup blur', function () {
        var rex = new RegExp($(this).val(), 'i');
        $('#dataListIkan a').hide();
        $('#dataListIkan a').filter(function () {
            return rex.test($(this).text());
        }).show();
    });



    $('#myModal').on('shown.bs.modal', function () {
        //$('#myInput').focus();
        $("body").on("click", ".list-group-item", function () {
            var id = $(this).attr('id');
            $.getJSON("data.json", function (data) {
                var table = '';
                table += '<tr><th>Tahun</th>';
                table += '<th>Borong</th>';
                table += '<th>Runcit</th></tr>';
                $.each(data, function (i, v) {
                    if (v.ikanId == id) {
                        $('#namaIkan').text(v.spesis);
                        $('#borong12').text("RM "+v.borong2012);
                        $('#runcit12').text("RM "+v.runcit2012);
                        $('#borong13').text("RM "+v.borong2013);
                        $('#runcit13').text("RM "+v.runcit2013);
                        $('#borong14').text("RM "+v.borong2014);
                        $('#runcit14').text("RM "+v.runcit2014);
                        $('#purata').text(v.purata+"%");                        

                    }
                });

                //$("#ikanTable").html(table);
            });
        });
    });


})(dt); //pass in global namespace


function searchArray() {
    $.getJSON("data.json", function (data) {
        var html = '';
        $.each(data, function (i, v) {
            html += '<a id="' + v.ikanId + '" data-toggle="modal" data-target="#myModal" class="list-group-item" style="padding: 4px 0px" id="' + v.ikanId + '">' + v.spesis + '</a>';
        });

        $("#dataListIkan").html(html);
    });

}

