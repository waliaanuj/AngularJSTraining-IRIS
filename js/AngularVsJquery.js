/**
 * Created by anuj.walia on 26-02-2015.
 */
$(function () {
    $("#jquery-button").click(function () {
        $("#jquery-content1").toggle();
        $("#jquery-content2").toggle();
        $("#jquery-content3").toggle();
        $("#jquery-content4").toggle();
        $("#jquery-inverse").toggle()
    })
})

var compare = angular.module("compare", []);
compare.controller("AppCtrl", function () {
    var app = this;

    app.isHidden = false;
    app.toggle = function () {
        app.isHidden = !app.isHidden;
    }
})