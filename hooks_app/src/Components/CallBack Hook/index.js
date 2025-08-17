import { useCallback, useState } from 'react'
import ListNumbers from '../ListNumbers'
import './index.css'

const UseCallBack = () => {
    const [number, setNumber] = useState(0)
    const [isdark, setdark] = useState(false)

    const themeStyle = {
        backgroundColor: isdark ? 'black': 'white',
        color: isdark ? 'white': 'black'
    }

    const getNumbers = useCallback(() => {
        return [number + 1, number + 2, number + 3]
    }, [number])

    return (
        <div style={themeStyle}>
            <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <button type='button' onClick={() => setdark(cur => !cur)}>Toggle Theme</button>
            <ListNumbers getNumbers={getNumbers}/>
        </div>
    )
}

export default UseCallBack