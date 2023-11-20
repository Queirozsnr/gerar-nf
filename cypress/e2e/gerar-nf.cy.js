describe('Gerar site NFS-e', () => {

    beforeEach(() => {
        cy.visit('Login');
    });

    context('Login e emitir NF', () => {
        // para subir o projeto rode: npx cypress open
        it('Emitir NF', () => {
            //1° CNPJ, 2° Senha, 3° Descrição de Serviço, 4° Valor
            cy.gerarNF('0000', '00000', 'Desenvolvimento de sites e aplicativos web.', '300000');
    
        });
    });
});