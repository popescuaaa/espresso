import React from "react";
import SideMenu from "../../components/nav/SideMenu";
import "./Home.css";
import TaskCard from "../../components/card/TaskCard";

const Home = () => {
    const user = "John Doe";

    return (
        <div className="page">
            <SideMenu />
            <div>
                <div className="home-title">
                    <p>Welcome back <span>{user}</span>.</p>
                </div>
                <div className="home-body">
                    <p>Let's take a look at the latest updates</p>
                    <div className="home-feed">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                            <TaskCard
                                key={item}
                                title={`Task number @${item}`}
                                description={`This is a description for task number @${item}`}
                                status={item % 2 == 0 ? "inProgress" : "done"}
                                dueDate="2020-01-01"
                                id={item}
                                priority="high"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;