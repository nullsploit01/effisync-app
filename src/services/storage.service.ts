import AsyncStorage from '@react-native-async-storage/async-storage'

class StorageService {
  set = async (key: string, value: string) => {
    const serializedValue = JSON.stringify({ [key]: value })
    await AsyncStorage.setItem(key, serializedValue)
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
