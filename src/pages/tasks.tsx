import { Box, Divider, Grid, Stack, Text, useColorMode } from "@chakra-ui/react"
import React, { useState } from "react"
import TaskCard from "../components/TaskCard"

const Tasks: React.FC = () => {
    const { colorMode } = useColorMode()
    const wipBG = { light: "teal.300", dark: "teal.600" }
    const doneBG = { light: "blue.300", dark: "blue.600" }

    const [taskList, setTaskList] = useState([
        {
            id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            title: 'Buy Milk',
            category: 'Shopping',
            details: 'Buy 2L lactose free milk!'
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            title: 'Buy dog food',
            category: 'Shopping',
            details: 'Gotta make my woof happy'
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: 'wip',
            title: 'Renew Gym Membership',
            category: 'chores',
            details: 'Gotta keep the muscles happy!'
        },
    ])

    return (
        <Grid gap={6} templateColumns="repeat(2,1fr)" w="80vw" h="93vh" py={4}>
            <Box bg={wipBG[colorMode]} rounded="md" p={3} boxShadow="md">
                <Stack spacing={3}>
                    <Box>
                        <Text fontSize="2xl" textAlign="center">
                            WIP Tasks
                        </Text>
                        <Divider />
                    </Box>
                </Stack>
                {taskList
                    .filter((task, i) => task.status === 'wip')
                    .map((task, i) => (
                        <TaskCard
                            title={task.title}
                            category={task.category}
                            details={task.details}
                        />
                    ))
                }
            </Box>
            <Box bg={doneBG[colorMode]} rounded="md" p={3} boxShadow="md">
                <Stack spacing={3}>
                    <Box>
                        <Text fontSize="2xl" textAlign="center">
                            DONE Tasks
                        </Text>
                        <Divider />
                    </Box>

                </Stack>
            </Box>
        </Grid>
    )
}

export default Tasks