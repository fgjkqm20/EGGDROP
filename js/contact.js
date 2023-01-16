const trigger = $(".trigger");
const materialIcon = $(".material-icons");
const body = $(".body");

trigger.on("click", function () {
    const index = trigger.index(this);

    for (let i = 0; i < trigger.length; i++) {
        materialIcon.eq(i).removeClass("icon1");
        body.eq(i).removeClass("by1");
    }
    
    materialIcon.eq(index).addClass("icon1");
    body.eq(index).addClass("by1");
});
