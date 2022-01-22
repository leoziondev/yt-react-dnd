import { useContext } from "react"
import { CardContext } from "../pages/tasks"
import { useDrop } from "react-dnd"
import itemTypes from "../utils/itemTypes"
import { Box } from "@chakra-ui/react"
import { ITEM } from "../types/interfaces"

interface BoxTargetProps {
    children: React.ReactNode;
}
 
const BoxTarget: React.FC<BoxTargetProps> = (props) => {
    const { children } = props
    const {markAsDone} = useContext(CardContext)
    const [{ isOver }, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item: ITEM , monitor) => markAsDone(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <Box ref={drop} w="100%" minH="200px" bg={isOver ? 'red.200' : 'transparent'}>
            {children}
        </Box>
    )
}

export default BoxTarget