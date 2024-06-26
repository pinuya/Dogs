import React from "react";
import styles from './UserStatesGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraphs = ({ data }) => {
    const [graph, setGraph] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        const graphData = data.map(item => {
            return {
                x: item.title,
                y: Number(item.acessos)
            }
        })

        setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
        );
        setGraph(graphData);
    }, [data])

    return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={styles.total}>
                <p>Acessos: {total}</p>
            </div>
            <div>
                <VictoryPie data={graph} />
            </div>
        </section>
    )
}

export default UserStatsGraphs