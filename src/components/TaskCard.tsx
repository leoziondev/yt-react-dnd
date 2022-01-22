import { Box, Flex, Text, Badge } from "@chakra-ui/react"

interface TaskCardProps {
    title: string;
    category: string;
    details: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    const { title, category, details } = props

    return (
        <Box bg="teal.200" rounded="md" boxShadow="sm" p={3} mt={4}>
            <Flex justify="space-between" align="baseline" mb={3}>
                <Text>{title}</Text>
                <Badge variant="solid" colorScheme={category === 'chores' ? 'orange' : 'purple'}>{category}</Badge>
            </Flex>
            <Text textAlign="center">{details}</Text>
        </Box>
    )
}

export default TaskCard