import React from "react";
import styles from './UserStatesGraphs.module.css'

const UserStatsGraphs = ({ data }) => {
    const [graph, setGraph] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {

        setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0))
    }, [data])

    return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={styles.total}>
                <p>Acessos: {total}</p>
            </div>
        </section>
    )
}

export default UserStatsGraphs