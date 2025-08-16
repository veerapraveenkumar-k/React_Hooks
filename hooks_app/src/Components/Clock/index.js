import { useEffect, useState } from 'react'
import './index.css'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(timerId)
            console.log('Cleared')
        }
    }, [])

    return (
        <div className='clock'>
            <h1 className='timer'>Timer</h1>
            <div className='time-container'>
                <h1 className='time-text'>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    )
}

export default Clock