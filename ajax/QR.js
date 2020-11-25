$(document).ready(function () {

    $("#qrMail").kendoQRCode({
        value: "mailto:AlejandraAdalid@protonmail.com",
        size: 90,
        color: "#e15613",
        background: "transparent"
    });

    $("#qrUrl").kendoQRCode({
        value: "https://github.com/AlejandraAdalid/CV.Adalid",
        errorCorrection: "M",
        size: 90,
        border: {
            color: "#000000",
            width: 5
        }
    });

    $("#qrTelephone").kendoQRCode({
        value: "tel:+54-3413501908",
        errorCorrection: "Q",
        size: 90,
        color: "#67a814",
        border: {
            color: "#67a814",
            width: 5
        }
    });

    $("#qrGeoLocation").kendoQRCode({
        value: "geo:-33.0063045,-60.671798,16z",
        errorCorrection: "H",
        size: 90,
        color: "#166a83"
    });
});

