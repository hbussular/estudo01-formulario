
var form = document.getElementById('form')

var resetarFormulario = function () {
    form.reset()
}

var obterFormulario = function (evento) {
    var campoNome = evento[0]
    var campoSobrenome = evento[1]
    var campoEmail = evento[2]
    var campoTelefone = evento[3]
    var campoDataNascimentoDia = evento[4]
    var campoDataNascimentoMes = evento[5]
    var campoDataNascimentoAno = evento[6]
    var campoDescricao = evento[7]
    var mensagem = ''

    if (form.checkValidity()) {
        mensagem = mensagem +  'Usuario cadastrado com sucesso: \n' + 
        '\n Nome: ' + campoNome.value +
        '\n Sobrenome: ' + campoSobrenome.value +
        '\n Email: ' + campoEmail.value +
        '\n Telefone: ' + campoTelefone.value + 
        '\n Data de Nascimento: ' + campoDataNascimentoDia.value + '/' + campoDataNascimentoMes.value + '/' + campoDataNascimentoAno.value +
        '\n Descrição: ' + campoDescricao.value

        alert(mensagem)
        return
    }

    if (!campoNome.validity.valid) {
        mensagem = mensagem + ' Campo [Nome] é necessário.\n'
    }

    if (!campoSobrenome.validity.valid) {
        mensagem = mensagem + ' Campo [Sobrenome] é necessário.\n'
    }

    if (!campoEmail.validity.valid) {
        mensagem = mensagem + ' Campo [Email] é necessário.\n'
    }

    if (!campoTelefone.validity.valid) {
        mensagem = mensagem + ' Campo [Telefone] é necessário.\n'
    }

    if (campoDataNascimentoDia.value === 'Dia') {
        mensagem = mensagem + ' Campo [Dia de Nascimento] é necessário.\n'
    }

    if (campoDataNascimentoMes.value === 'Mês') {
        mensagem = mensagem + ' Campo [Mes de Nascimento] é necessário.\n'
    }

    if (campoDataNascimentoAno.value === 'Ano') {
        mensagem = mensagem + ' Campo [Ano de Nascimento] é necessário.\n'
    }

    if (!campoDescricao.validity.valid) {
        mensagem = mensagem + ' Campo [Descrição] é necessário.\n'
    }
  
    alert(mensagem)
}