/**
 * Created by anuj.walia on 25-02-2015.
 */

$(function() {
    alert("Jquery Onload");
    $("#flex1").flexigrid(
        {
           url: 'TestJSON.json',
            dataType: 'json',
            colModel : [
                {display: 'ID', name : 'id', width : 40, sortable : true, align: 'right'},
                {display: 'First Name', name : 'first_name', width : 150, sortable : true, align: 'right'},
                {display: 'Surname', name : 'surname', width : 150, sortable : true, align: 'left'},
                {display: 'Position', name : 'email', width : 250, sortable : true, align: 'left'}
            ],
            buttons : [
                {name: 'Edit', bclass: 'edit'},
                {name: 'Delete', bclass: 'delete'},
                {separator: true}
            ],
            searchitems : [
                {display: 'First Name', name : 'first_name'},
                {display: 'Surname', name : 'surname', isdefault: true},
                {display: 'Position', name : 'position'}
            ],
           /*sortname: "surname",
           sortorder: "asc",*/
            usepager: true,
            title: false,
            useRp: true,
            rp: 10,
            showTableToggleBtn: false,
            resizable: false,
            width: "100%",
            height: 370,
            singleSelect: true,
            onChangeSort:function(sortName, sortOrder){
                alert("you wanted to sort on the  column " + sortName +" in " + sortOrder + " order");

            }
        }
    );
    $('#flex2').load(function(){
        console.log("loaded");
    });
    ;

    $('#abcd').find('div.ptogtitle').click();
   /* $('#flex1.ptogtitle',g.mDiv).click
    (
        function ()
        {
            $(g.gDiv).toggleClass('hideBody');
            $(this).toggleClass('vsble');
        }
    );*/
   // console.log( $('#flex2'));
   // console.log( $('#flex2')[0].grid);
   /* console.log( $('#flex1.flexigrid'));
    console.log( $('#flex1.flexigrid.ptogtitle'));*/

   /* $("#flex1").addData(eval('[{' +
    '"id": "abc",'+
    '"first_name": "udgdw",'+
       ' "surname": "wefef",'+
       ' "email": "sadewo@wdlfkj.com"' +
    '}]'));*/
});
