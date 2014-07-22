describe('script-error', function() {
  it('occurs in Chrome when an assertion fails in an async callback', function(done) {
    setTimeout(function() {
      expect(1).to.eql(2);
      done();
    }, 0)
  });
});
