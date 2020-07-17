import { renderHook } from '@testing-library/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import { useAuth, AuthProvider } from '../../hooks/auth';
import IPublisher from '../../models/responses/overview/IPublisher';

jest.setTimeout(10000);

jest.mock('../../services/DataProvider', () => {
  return {
    setAuthCookies: () => {
      const publisher: IPublisher = {
        id: '123',
        name: 'Publisher',
        avatar_url: 'avatar.com',
      };

      return publisher;
    },
  };
});

describe('Auth hook', () => {
  const SESSION = 'test_user_kharma_session';
  const TOKEN = 'test_user_kharma_token';

  it('should be able to return publisher data when user credentials are set', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.setAuthCredentials(SESSION, TOKEN);

    await waitForNextUpdate();

    expect(AsyncStorage.multiSet).toBeCalledWith([
      ['kharma_session', SESSION],
      ['kharma_token', TOKEN],
    ]);

    expect(result.current.publisher.id).toBe('123');
    expect(result.current.publisher.name).toBe('Publisher');
    expect(result.current.publisher.avatar_url).toBe('avatar.com');
  });

  it('should return true when isAuthenticated is called and user credentials are set', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.setAuthCredentials(SESSION, TOKEN);

    await waitForNextUpdate();

    expect(result.current.isAuthenticated()).toBe(true);
  });

  it('should return false when isAuthenticated is called and user credentials are not set', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.isAuthenticated()).toBe(false);
  });

  it('should invalidate user authentication when clearCredentials is called', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.publisher = {
      id: '123',
      name: 'Publisher',
      avatar_url: 'avatar.com',
    };

    result.current.setAuthCredentials(SESSION, TOKEN);

    await waitForNextUpdate();

    expect(result.current.isAuthenticated()).toBe(true);

    result.current.clearCredentials();

    expect(result.current.isAuthenticated()).toBe(false);
  });
});
