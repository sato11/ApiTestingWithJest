import * as github from '../github';

jest.mock('../request');

describe('#getUser using Promises', () => {
  it('should load user data', () => {
    return github.getUser('sato11')
      .then(data => {
        expect(data).toBeDefined();
        expect(data.entity.name).toEqual('Junichi Sato');
      });
  });
});

describe('#getUser using async/await', () => {
  it('should load user data', async () => {
    const data = await github.getUser('sato11');
    expect(data).toBeDefined();
    expect(data.entity.name).toEqual('Junichi Sato');
  });
});
