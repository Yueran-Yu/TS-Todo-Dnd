import {useEffect, useState} from "react";

export const useLocalStorage = (key: string, defaultValue: string) => {
	const [value, setValue] = useState(() => {
		try {
			const tempValue = window.localStorage.getItem(key)
			if (tempValue) {
				return JSON.parse(tempValue)
			} else {
				return JSON.parse(defaultValue)
			}
		} catch (error) {
			console.warn(`localStorage getItem Error`, error)
		}
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
