function main() {}

$('#effects').click(function(){
    $('#show-effect').show(500);
})

$('#show-effect').click(function(){
    $('#show-effect').hide(500);
});

module.exports = { main }