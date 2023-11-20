'use client';

import { useCallback, useState, useEffect } from 'react';

function isJSON(data: any) {
	try {
		if (typeof data === 'string') return false;
		return !!JSON.parse(data);
	} catch (error) {
		return false;
	}
}

/**
 * Get - Set value stored in local storage
 * @param {string} key
 * @param {any} defaultValue
 */
export function useLocalStorage<T>(key: string, defaultValue?: T) {
	return useStorage(key, defaultValue, window?.localStorage);
}

/**
 * Get - Set value stored in session storage
 * @param {string} key
 * @param {any} defaultValue
 */
export function useSessionStorage<T>(key: string, defaultValue?: T) {
	return useStorage(key, defaultValue, window?.sessionStorage);
}

function useStorage<T>(key: string, defaultValue: T, storageObject: Storage): [T, React.Dispatch<T>, () => void] {
	const [value, setValue] = useState(() => {
		if (typeof window === 'undefined') return defaultValue;
		const jsonValue = storageObject.getItem(key);
		if (isJSON(jsonValue)) return JSON.parse(jsonValue!);
		if (typeof defaultValue === 'function') {
			return defaultValue();
		} else {
			return defaultValue;
		}
	});

	useEffect(() => {
		(function () {
			try {
				if (value === undefined) return storageObject.removeItem(key);
				storageObject.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.log((error as Error).message);
			}
		})();
	}, [key, value, storageObject]);

	const remove = useCallback(() => {
		setValue(undefined);
	}, []);

	return [value, setValue, remove];
}
