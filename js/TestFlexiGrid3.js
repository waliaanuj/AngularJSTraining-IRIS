/**
 * Created by anuj.walia on 25-02-2015.
 */

$(function() {
    $("#flex3").flexigrid(
        {
           url: 'TestJSON.json',
            dataType: 'json',
            colModel : [
                {display: 'ID', name : 'id', sortable : true, align: 'right'},
                {display: 'First Name', name : 'first_name', sortable : true, align: 'right'},
                {display: 'Surname', name : 'surname', sortable : true, align: 'left'},
                {display: 'Position', name : 'email', sortable : true, align: 'left'}
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
           sortname: "surname",
           sortorder: "asc",
            usepager: true,
            title: "Staff",
            useRp: true,
            rp: 10,
            showTableToggleBtn: true,
            resizable: false,
            width: "100%",
            height: 370,
            singleSelect: true,
            onChangeSort:function(sortName, sortOrder){
                alert("you wanted to sort on the  column " + sortName +" in " + sortOrder + " order");

            }
        }
    );
   /* $("#flex1").addData(eval('[{' +
    '"id": "abc",'+
    '"first_name": "udgdw",'+
       ' "surname": "wefef",'+
       ' "email": "sadewo@wdlfkj.com"' +
    '}]'));*/
});
