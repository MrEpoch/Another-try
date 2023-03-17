import React from "react";

const overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
            <>
                <li key={task.id}>{task.idNew} : {task.text}</li>
            </>
        )
      })}
    </ul>
  )

}

export default overview;
