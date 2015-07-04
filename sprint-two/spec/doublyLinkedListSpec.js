describe('Doubly Linked List', function(){
  var doubleList;

  beforeEach(function() {
    doubleList = doublylinkedList();
  });

  it('should have all expected functions', function() {
    expect(doubleList.addToTail).to.be.a("function");
    expect(doubleList.contains).to.be.a("function");
    expect(doubleList.removeHead).to.be.a("function");
    expect(doubleList.addToHead).to.be.a("function");
    expect(doubleList.removeTail).to.be.a("function");
  });

  it('should contain added values', function() {
    doubleList.addToTail('Bob');
    expect(doubleList.contains("Bob")).to.equal(true);
    doubleList.addToTail('Ryan');
    expect(doubleList.contains("Ryan")).to.equal(true);
    //expect(true).to.equal(true);
  });

  it('should contain new head values', function(){
    doubleList.addToTail('Jim');
    doubleList.addToTail('Joe');
    doubleList.addToHead('Bob');
    expect(doubleList.contains('Bob')).to.equal(true);
  })
});