let pessoa={
    //propriedades
	nome: 'Silvia',
	idade: 57,
	sexo: 'f',
	filhos: 3,
    //método
    //para evitar que se escreva toda hora o nome do objeto utiliza-se a palavra this - refere-se a propriedade do próprio objeto.
    imprimeEmpresa: function() {return 'Meu nome é '+this.nome+', tenho '+this.filhos +' filhos e trabalho na Digital House'}};

    console.log(pessoa.imprimeEmpresa());
