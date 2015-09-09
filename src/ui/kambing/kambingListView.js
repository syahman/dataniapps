(function (dt) {

    'use strict';

    dt.extend = jQuery.extend;
    /*
     * @data keseluruhan
     * @desc draw keseluruhanKambingView.html
     * @param onclick value selected
     */
    $("#jenisKambingMaklumat").on('change', function () {
        var value = $('#jenisKambingMaklumat :selected').val();
        var subtitile = $('#jenisKambingMaklumat :selected').data('title');
        $("#chart-title-kambing-maklumat").show().text("Maklumat Ternakan Kambing, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetKambingMaklumat(value));
    });
    /*
     * @data keseluruhan
     * @desc draw keseluruhanKambingView.html
     * @param onclick value selected
     */
    $("#jenisKambingNegeri").on('change', function () {
        var value = $('#jenisKambingNegeri :selected').val();
        var subtitile = $('#jenisKambingNegeri :selected').data('title');
        $("#chart-title-kambing-populasi").show().text("Populasi Ternakan Kambing, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetKambingPopulasi(value));
    });
    /*
     * @data keseluruhan
     * @desc draw keseluruhanKambingView.html
     * @param onclick value selected
     */
    $("#jenisKambingKeseluruhan").on('change', function () {
        var value = $('#jenisKambingKeseluruhan :selected').val();
        var subtitile = $('#jenisKambingKeseluruhan :selected').data('title');
        $("#chart-title-kambing-keseluruhan").show().text("Populasi Ternakan Kambing Megikut Negeri Seluruh Malaysia : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetKambingKeseluruhan(value));
    });

})(dt); //pass in global namespace