var expect = require('chai').expect;

describe('Main', function () {
  var arr;
  // roda uma vez antes do bloco
  before(function() {
    // iniciar uma conexao com o banco
    // cria um conunto de dados
  });

  // roda uma vez depois do bloco
  after(function() {
    // fechar uma conexao com o banco
    // apagar esse conjunto de dados
  });

  // roda todas as vezes antes de cada bloco
  beforeEach(function() {
    arr = [1,2,3];
  });

  afterEach(function() {

  });

  // testar tipo ou se existe (smoke test)
  it('should be an array', function(){
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 3 when pop from the array', function() {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when op 3 from the array', function(){
    expect(arr.pop() === 3).to.be.true;
  })

  it('should remove 3 when use pop in the array', function() {
     arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
