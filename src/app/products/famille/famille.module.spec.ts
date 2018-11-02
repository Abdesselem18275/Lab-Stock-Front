import { FamilleModule } from './famille.module';

describe('FamilleModule', () => {
  let familleModule: FamilleModule;

  beforeEach(() => {
    familleModule = new FamilleModule();
  });

  it('should create an instance', () => {
    expect(familleModule).toBeTruthy();
  });
});
