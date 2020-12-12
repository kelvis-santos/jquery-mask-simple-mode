// function with mask
$(document).ready(function() {

    $('.cep').mask('00000-000');

    $('.cpf').mask('000.000.000-00', {reverse: true});
    

    $('.rg').mask('00.000.000-0', {reverse: true});

    $('.cnpj').mask('00.000.000/0000-00');

    // format  phone 8 or 9 dig
    var PhoneMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    phOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(PhoneMaskBehavior.apply({}, arguments), options);
        }
    };

    $('.tel').mask(PhoneMaskBehavior, phOptions);

    //Money values
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});

    //percent
    $('.percent').mask('##0,00%', {reverse: true});

    //dates
    $('.date').mask('00/00/0000');

});