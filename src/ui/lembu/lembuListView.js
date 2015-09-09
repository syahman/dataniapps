(function (dt) {

    'use strict';

    dt.extend = jQuery.extend;
    /*
     * @data maklumat
     * @desc draw maklumatLembuView.html
     * @param onclick value selected
     */
    $("#jenisLembuMaklumat").on('change', function () {
        var value = $('#jenisLembuMaklumat :selected').val();
        var subtitile = $('#jenisLembuMaklumat :selected').data('title');
        $("#chart-title-lembu-maklumat").show().text("Maklumat Ternakan Lembu, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetLembuMaklumat(value));
    });

    /*
     * @data populasi
     * @desc draw populasiLembuView.html
     * @param onclick value selected
     */
    $("#jenisLembuNegeri").on('change', function () {
        var value = $('#jenisLembuNegeri :selected').val();
        var subtitile = $('#jenisLembuNegeri :selected').data('title');
        $("#chart-title-lembu-populasi").show().text("Populasi Ternakan Lembu, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetLembuPopulasi(value));
    });

    /*
     * @data keseluruhan
     * @desc draw keseluruhanLembuView.html
     * @param onclick value selected
     */
    $("#jenisLembuKeseluruhan").on('change', function () {
        var value = $('#jenisLembuKeseluruhan :selected').val();
        var subtitile = $('#jenisLembuKeseluruhan :selected').data('title');
        $("#chart-title-lembu-keseluruhan").show().text("Populasi Ternakan Lembu Megikut Negeri Seluruh Malaysia : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetLembuKeseluruhan(value));
    });
})(dt); //pass in global namespace