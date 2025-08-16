import { useState } from 'react'
import Clock from '../Clock'
import './index.css'

const ClockApp = () => {
    const [isMount, changeMountStatus] = useState(true)

    const toggleClock = () => {
        changeMountStatus(preVal => !preVal)
    }

    return (
        <div className='clock-app-bg'>
            <div className='clock-app-container'>
                <button className='toggle-btn' type='button' onClick={toggleClock}>{isMount ? 'Hide Clock': 'Show Clock'}</button>
                {isMount && <Clock/>}
            </div>
        </div>
    )
}

export default ClockApp