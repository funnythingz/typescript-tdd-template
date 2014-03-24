var TEST;
(function (TEST) {
    chai.should();

    describe("Iterator", function () {
        it("create instance", function () {
            var iterator = new PATTERN.Iterator();

            iterator.should.be.instanceof(PATTERN.Iterator);
        });

        describe("use hasNext() & toNext()", function () {
            var iterator = new PATTERN.Iterator(10);

            it("when start count", function () {
                iterator.hasNext().should.be.true;
            });

            it("when completed count", function () {
                while (iterator.hasNext()) {
                    iterator.toNext();
                }

                iterator.hasNext().should.be.false;
            });
        });
    });
})(TEST || (TEST = {}));
