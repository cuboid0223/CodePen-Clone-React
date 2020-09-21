import {useEffect, useState}from 'react'
const PREFIX = 'codepen-clone-' 
const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)

        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === 'function' ){
            return initialValue()
        }else{
            return initialValue
        }
    }) 


    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])



    return [value, setValue]
}

export default useLocalStorage
// 這個 自製 hook 是用來 讓網頁重載 資料不會被清除
