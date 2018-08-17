import sinon from 'sinon';

export const noErrorsAllowed = () => {
  beforeEach(() => {
    sinon.stub(console, 'error');
  });
  afterEach(() => {
    sinon.assert.notCalled(console.error);
    console.error.restore();
  });
};

export const expectMissingProp = (prop, component) => {
  sinon.assert.calledWithMatch(
    console.error,
    new RegExp(`Required prop \`${prop}\` was not specified in \`${component}\``)
  );
};
