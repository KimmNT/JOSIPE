import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "xgwabc5rk8";

// Load the list with explicit casting
export const loadList = async (): Promise<string[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue ? (JSON.parse(jsonValue) as string[]) : [];
  } catch (e) {
    console.error("Failed to load list:", e);
    return [];
  }
};

// Save the list
const saveList = async (list: string[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save list:", e);
  }
};

// Add a string to the list (preventing duplicates)
export const addToList = async (newValue: string): Promise<void> => {
  const list = await loadList();
  if (!list.includes(newValue)) {
    list.push(newValue);
    await saveList(list);
  }
};

// Remove a string from the list
export const removeFromList = async (value: string): Promise<void> => {
  let list = await loadList();
  list = list.filter((item) => item !== value);
  await saveList(list);
};

// Remove all items from the storage
export const clearAll = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear storage:", e);
  }
};
