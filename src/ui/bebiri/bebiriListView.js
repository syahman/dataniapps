(function (dt) {

    'use strict';

    dt.extend = jQuery.extend;

    /*
     * @data maklumat
     * @desc draw maklumatBebiriView.html
     * @param onclick value selected
     */
    $("#jenisBebiriMaklumat").on('change', function () {
        var value = $('#jenisBebiriMaklumat :selected').val();
        var subtitile = $('#jenisBebiriMaklumat :selected').data('title');
        $("#chart-title-bebiri-maklumat").show().text("Maklumat Ternakan Bebiri, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetBebiriMaklumat(value));
    });

    /*
     * @data populasi
     * @desc draw populasiBebiriView.html
     * @param onclick value selected
     */
    $("#jenisBebiriNegeri").on('change', function () {
        var value = $('#jenisBebiriNegeri :selected').val();
        var subtitile = $('#jenisBebiriNegeri :selected').data('title');
        $("#chart-title-bebiri-populasi").show().text("Populasi Ternakan Bebiri, 2009 - 2014 : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetBebiriPopulasi(value));
    });

    /*
     * @data keseluruhan
     * @desc draw keseluruhanBebiriView.html
     * @param onclick value selected
     */
    $("#jenisBebiriKeseluruhan").on('change', function () {
        var value = $('#jenisBebiriKeseluruhan :selected').val();
        var subtitile = $('#jenisBebiriKeseluruhan :selected').data('title');
        $("#chart-title-bebiri-keseluruhan").show().text("Populasi Ternakan Bebiri Megikut Negeri Seluruh Malaysia : " + subtitile);
        //console.log(value);
        google.setOnLoadCallback(drawSheetBebiriKeseluruhan(value));
    });

})(dt); //pass in global namespace