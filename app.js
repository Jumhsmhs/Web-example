const express = require("express");
let app = express();
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});
let roadju= [
    {name:"ju1", imgurl:"https://i3.wp.com/www.catdumb.com/wp-content/uploads/2016/02/asphalt-4.jpg"},
    {name:"ju2", imgurl:"https://ichef.bbci.co.uk/news/660/cpsprodpb/C342/production/_88068994_thinkstockphotos-493881770.jpg"},
    {name:"ju3", imgurl:"https://www.innnews.co.th/wp-content/uploads/2019/06/3-83-780x405.jpg"},
    {name:"ju4", imgurl:"https://www.bangkung.com/wp-content/uploads/2018/03/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%A2%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%B0%E0%B8%95%E0%B8%AD%E0%B8%A2.jpg"},
    {name:"ju5", imgurl:"https://cdn.pixabay.com/photo/2017/08/10/01/46/rural-2616964_960_720.jpg"},
    {name:"ju6", imgurl:"https://images.pexels.com/photos/392540/pexels-photo-392540.jpeg?cs=srgb&dl=pexels-392540.jpg&fm=jpg"},
    {name:"ju7", imgurl:"https://cdn.pixabay.com/photo/2015/01/20/23/04/road-606160_960_720.jpg"},
    {name:"ju8", imgurl:"https://cdn.pixabay.com/photo/2015/04/20/17/00/street-731820_960_720.jpg"},
    {name:"ju9", imgurl:"https://www.trjournalnews.com/wp-content/uploads/2019/04/S__11616288-1024x710.jpg"},
    {name:"ju10", imgurl:"https://cdn.pixabay.com/photo/2015/04/19/04/52/fall-729395_960_720.jpg"},
    {name:"ju11", imgurl:"https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=pexels-237018.jpg&fm=jpg"},
    {name:"juju09", imgurl:"https://cdn.pixabay.com/photo/2017/07/31/22/19/asphalt-2561580_960_720.jpg"},
]

app.get("/mycollection", function(req,res){
    res.render("collection", {roadju : roadju});
});

app.listen(3000, function(req,res){
    console.log("My collection is road!");
});