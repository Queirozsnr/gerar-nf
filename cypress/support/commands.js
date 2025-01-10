Cypress.Commands.add('gerarNF', (cnpj, senha, servico, cnpjEmpresa, valor) => {
    cy.get('input[placeholder="CPF/CNPJ"]').type(cnpj);
    cy.get('input[placeholder="Senha"]').type(senha);

    cy.get('[class="btn btn-lg btn-primary"]').click();
    cy.url().should('match', /^(https:\/\/www\.nfse\.gov\.br\/EmissorNacional\/Dashboard|https:\/\/www\.nfse\.gov\.br\/EmissorNacional\/)$/);

    // cy.get('a[data-original-title="Nova NFS-e"]', {timeout:5000}).click();
    cy.visit('https://www.nfse.gov.br/EmissorNacional/DPS/Pessoas');
    
    //Pessoas
    cy.url().should('eq', 'https://www.nfse.gov.br/EmissorNacional/DPS/Pessoas');

    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const ano = hoje.getFullYear().toString();
    const dataFormatada = `${dia}${mes}${ano}`;

    cy.get('input[name="DataCompetencia"]').type(dataFormatada);
    cy.get('[class="passos-servico"]').click();
    cy.contains('label', 'Brasil', {timeout: 3000}).click();
    cy.get('input[id="Tomador_Inscricao"]').type(cnpjEmpresa);
    cy.get('[class="passos-servico"]').click();
    cy.get('#btnAvancar', {timeout: 1000}).click();

    //Serviço
    cy.get('span.select2-selection.select2-selection--single').eq(0).click();
    cy.get('input[class="select2-search__field"]').type('manaus');
    cy.get('li[class="select2-results__option select2-results__option--selectable select2-results__option--highlighted"]', {timeout: 3000}).click();
    cy.get('span[aria-controls="select2-ServicoPrestado_CodigoTributacaoNacional-container"]').eq(0).click();
    cy.get('input[class="select2-search__field"]').type('computador');
    cy.get('li[class="select2-results__option select2-results__option--selectable select2-results__option--highlighted"]', {timeout: 3000}).click();
    cy.contains('label', 'Não', {timeout: 3000}).click();
    cy.get('textarea[name="ServicoPrestado.Descricao"]').type(servico);
    cy.get('[class="btn btn-lg btn-primary direita has-spin"]').click();
    
    //Valores
    cy.get('div[id="pnlValores"]').click();
    cy.get('input[id="Valores_ValorServico"]', {timeout: 3000}).type(valor);
    cy.contains('label', 'Não informar nenhum valor estimado para os Tributos (Decreto 8.264/2014)', {timeout: 3000}).click();
    cy.get('[class="btn btn-lg btn-primary direita has-spin"]').click();

    //cy.get('a[id="btnProsseguir"]').click();
});