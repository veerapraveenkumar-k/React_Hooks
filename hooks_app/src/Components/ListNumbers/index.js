import { useEffect, useState } from "react"

const ListNumbers = ({getNumbers}) => {
    const [numList, setNumList] = useState([])

    useEffect(() => {
        console.log('Setting numbers')
        setNumList(getNumbers())
    }, [getNumbers])

    return numList.map((each, index) => <p key={index}>{each}</p>)
}

export default ListNumbers