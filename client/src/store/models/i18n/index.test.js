import { init, dispatch } from '@rematch/core';
import i18n from '.';

describe('i18n model', () => {
  let store;

  beforeEach(() => {
    store = init({
      models: {
        i18n,
      },
    });
  });

  it('should have a default locale of "en"', () => {
    expect(store.getState().i18n).toEqual({ locale: 'en' });
  });

  it('should update the locale correctly', () => {
    expect(store.getState().i18n).toEqual({ locale: 'en' });
    dispatch.i18n.setLocale('es');
    expect(store.getState().i18n).toEqual({ locale: 'es' });
  });
});
