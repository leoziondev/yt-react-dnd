import { Box, Divider, Grid, Stack, Text, useColorMode } from "@chakra-ui/react"
import React, { createContext, useState } from "react"
import BoxTarget from "../components/BoxTarget"
import TaskCard from "../components/TaskCard"
import { TASK } from "../types/interfaces"

export const CardContext = createContext({
    markAsDone: (id: string) => {},
})

const Tasks: React.FC = () => {
    const { colorMode } = useColorMode()
    const wipBG = { light: "teal.300", dark: "teal.600" }
    const doneBG = { light: "blue.300", dark: "blue.600" }

    const [taskList, setTaskList] = useState<TASK[]>([
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

    const markAsDone = (id: string) => {
        const draggedTask = taskList.filter((task, i) => task.id === id)[0]
        // console.log(draggedTask)
        draggedTask.status = 'done'
        setTaskList(taskList.filter(
            (task, i) => task.id !== id)
            .concat(draggedTask)
        )
    }

    return (
        <CardContext.Provider value={{ markAsDone }}>
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
                    <BoxTarget>
                        {taskList
                            .filter((task, i) => task.status === 'wip')
                            .map((task, i) => (
                                <TaskCard
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    category={task.category}
                                    details={task.details}
                                />
                            ))
                        }
                    </BoxTarget>
                </Box>
                <Box bg={doneBG[colorMode]} rounded="md" p={3} boxShadow="md">
                    <Stack spacing={3}>
                        <Box>
                            <Text fontSize="2xl" textAlign="center">
                                DONE Tasks
                            </Text>
                            <Divider />
                        </Box>
                        <BoxTarget>
                            {taskList
                                .filter((task, i) => task.status === 'done')
                                .map((task, i) => (
                                    <TaskCard
                                        key={task.id}
                                        id={task.id}
                                        title={task.title}
                                        category={task.category}
                                        details={task.details}
                                    />
                                ))
                            }
                        </BoxTarget>
                    </Stack>
                </Box>
            </Grid>
        </CardContext.Provider>
    )
}

export default Tasks