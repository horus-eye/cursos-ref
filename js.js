$(() => {
    $(".content").hide();
    $(".sales").hide();
    $("a").hide();
    $(".c1").click(e => { e.preventDefault(); $(".cont1").slideToggle("fast"); $("a").slideToggle("fast") });
    $(".c2").click(e => { e.preventDefault(); $(".cont2").slideToggle("fast"); $(".sales").slideToggle("fast") });
});
