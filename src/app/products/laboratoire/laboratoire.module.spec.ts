import { LaboratoireModule } from './laboratoire.module';

describe('LaboratoireModule', () => {
  let laboratoireModule: LaboratoireModule;

  beforeEach(() => {
    laboratoireModule = new LaboratoireModule();
  });

  it('should create an instance', () => {
    expect(laboratoireModule).toBeTruthy();
  });
});
