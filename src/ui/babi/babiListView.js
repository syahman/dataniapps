(function (dt) {

    'use strict';

    dt.extend = jQuery.extend;

    /*
     * @data maklumat
     * @desc draw maklumatBabiView.html
     * @param onclick value selected
     */
    $("#jenisBabiMaklumat").on('change', function () {
        var value = $('#jenisBabiMaklumat :selected').val();
        var subtitile = $('#jenisBabiMaklumat :selected').data('title');
        $("#chart-title-babi-maklumat").show().text("Maklumat Ternakan Babi, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetBabiMaklumat(value));
    });

    /*
     * @data populasi
     * @desc draw populasiBabiView.html
     * @param onclick value selected
     */
    $("#jenisBabiNegeri").on('change', function () {
        var value = $('#jenisBabiNegeri :selected').val();
        var subtitile = $('#jenisBabiNegeri :selected').data('title');
        $("#chart-title-babi-populasi").show().text("Populasi Ternakan Babi, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetBabiPopulasi(value));
    });

    /*
     * @data keseluruhan
     * @desc draw keseluruhanBabiView.html
     * @param onclick value selected
     */
    $("#jenisBabiKeseluruhan").on('change', function () {
        var value = $('#jenisBabiKeseluruhan :selected').val();
        var subtitile = $('#jenisBabiKeseluruhan :selected').data('title');
        $("#chart-title-babi-keseluruhan").show().text("Populasi Ternakan Babi Megikut Negeri Seluruh Malaysia : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetBabiKeseluruhan(value));
    });

})(dt); //pass in global namespace