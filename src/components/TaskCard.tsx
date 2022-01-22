import { Box, Flex, Text, Badge } from "@chakra-ui/react"
import { useDrag } from "react-dnd"
import itemTypes from "../utils/itemTypes"

interface TaskCardProps {
    id: string;
    title: string;
    category: string;
    details: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    const { id, title, category, details } = props
    const [{ isDragging }, drag] = useDrag(() => ({        
        type: itemTypes.CARD,
        item: () => {
            return {id}
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <Box
            ref={drag}
            opacity={isDragging ? 0.5 : 1}
            bg="teal.200"
            rounded="md"
            boxShadow="sm"
            p={3}
            mt={4}
        >
            <Flex justify="space-between" align="baseline" mb={3}>
                <Text>{title}</Text>
                <Badge variant="solid" colorScheme={category === 'chores' ? 'orange' : 'purple'}>{category}</Badge>
            </Flex>
            <Text textAlign="center">{details}</Text>
        </Box>
    )
}

export default TaskCard