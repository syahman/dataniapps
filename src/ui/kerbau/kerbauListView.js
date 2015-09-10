(function (dt) {

    'use strict';

    dt.extend = jQuery.extend;
    /*
     * @data maklumat
     * @desc draw maklumatKerbauView.html
     * @param onclick value selected
     */
    $("#jenisKerbauMaklumat").on('change', function () {
        var value = $('#jenisKerbauMaklumat :selected').val();
        var subtitile = $('#jenisKerbauMaklumat :selected').data('title');
        $("#chart-title-kerbau-maklumat").show().text("Maklumat Ternakan Kerbau, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetKerbauMaklumat(value));
    });

    /*
     * @data populasi
     * @desc draw populasiKerbauView.html
     * @param onclick value selected
     */
    $("#jenisKerbauNegeri").on('change', function () {
        var value = $('#jenisKerbauNegeri :selected').val();
        var subtitile = $('#jenisKerbauNegeri :selected').data('title');
        $("#chart-title-kerbau-populasi").show().text("Populasi Ternakan Kerbau, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetKerbauPopulasi(value));
    });

    /*
     * @data keseluruhan
     * @desc draw keseluruhanKerbauView.html
     * @param onclick value selected
     */
    $("#jenisKerbauKeseluruhan").on('change', function () {
        var value = $('#jenisKerbauKeseluruhan :selected').val();
        var subtitile = $('#jenisKerbauKeseluruhan :selected').data('title');
        $("#chart-title-kerbau-keseluruhan").show().text("Populasi Ternakan Kerbau Megikut Negeri Seluruh Malaysia : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetKerbauKeseluruhan(value));
    });
})(dt); //pass in global namespace