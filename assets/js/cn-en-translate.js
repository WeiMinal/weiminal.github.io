$(document).ready(function () {
    /*默认语言*/
    var defaultLang = "cn";
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        filePath: "./assets/i18n/",//路径配置
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function () {
            console.log("i18n is ready.");
        },
    });
    /*中英文切换按钮*/
    $("#translate").click(function (e) {
        var a = $(e.target).val() == "en" ? "cn" : "en";
        var b = a=="en"?"En/中":"中/En";
        $(e.target).val(a);
        $("#nav__translate").text(b);
        console.log($(e.target).val());

        $("[i18n]").i18n({
            defaultLang: a,
            filePath: "./assets/i18n/",
        });

    });

});
