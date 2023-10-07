import AsyncStorage from '@react-native-async-storage/async-storage'

class StorageService {
  set = async (key: string, value: Record<string, any> | string) => {
    value = typeof value === 'string' ? value : JSON.stringify(value)
    await AsyncStorage.setItem(key, value)
  }

  get = async (key: string) => {
    const value = await AsyncStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  remove = async (key: string) => {
    await AsyncStorage.removeItem(key)
  }

  clear = async () => {
    await AsyncStorage.clear()
  }
}

export const storageService = new StorageService()
