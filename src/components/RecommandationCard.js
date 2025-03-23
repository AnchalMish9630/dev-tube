import React from 'react'

const RecommandationCard = ({info}) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
    <>
    <div className="h-30 w-[448px] hover:shadow-lg px-2 pt-2 rounded-lg flex">
       <img  className="rounded-lg h-24 w-48"
            alt="video-thumbnail"
            src={thumbnails?.high?.url} 
           />
      <div className="mx-2">
        <h1 className="font-bold  text-sm">
          {title.length > 40 ? title.substr(0, 40) + "..." : title}
        </h1>
        <div className="flex">
          <span className="">{channelTitle}</span>
          <img className="w-4 h-3 my-2 mx-1" alt="verified" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ym7sEqvxNlijRM3UL1ExdfINPMdwBVcHEg&s" />
        </div>
        <h2 className="text-sm">
          {Number(statistics.viewCount).toLocaleString("en-US")} Views •
        </h2>
      </div>
      <div>
        <img className='w-5 h-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD7+/uVlZXc3Nzr6+uOjo6amprJycm+vr7X19fy8vK2trbDw8PS0tJwcHAwMDBeXl4eHh59fX0SEhKgoKBISEgjIyOYmJiysrIpKSk0NDRoaGh2dnb29vZjY2NTU1NBQUGmpqYWFhaJiYlWVlZpyJj/AAADqklEQVR4nO3diXKqQBAFUEfAPYKaqImJW5L//8U8spQLMNM18Krrdt3zBX0Lhdmn1yMiIiIiIiIiIrJmPsyLzXJT5MO5din/wyh31/KRdkEdGxfuXjHWLqpD2bGSr3TMtAvryqw2X8nIY0waAzq31S6uCytPQOdW2uW1N/QGdG6oXWBbo0BA58A/G9NgQOf22kW28ipI+KpdZBsTQUDnJtpltrAQJVxolxkvEwV0Drdt8yRM+KRdaLSTMOFau9BYfWFA5/rapUaaixOi9oifxQmftUuN5OtU3Eq0S400ECccaJcayX5C+7/SszjhWbvUSOG+4R/UPqK0WQrcMH0UBnzXLjSafxDqAnc4StpsQ220/fMiCviiXWYLspYpaqv0m+QhIj9C2ScR9WP4K/w6xX2R/toFAu60C2xtv/QGXKIOYFyZVqd/L4qpdnmdqJ8BLh21S+tK07gp7jhpRVY3vL+A7VHUSu9noV5T7ZI6t5+9/fWmHt9m2JOGHlk6SW39OImIiIiIiIiIiIiICFM6TgaDQTK2N+1U6o8PV3NrByP7Yy/21fXCiakJtvrVwqgrg6um64Z5/LWNlRi9tCFfycQ758ET0LkH7fLaC20jRd5A+i28mh39v3gKJjxpl9iOZBcp9MooyXZ87N/phyjhh3aZ8aTbZHHXmI6FCXGb4YdwuG8H7UKjCQM6p11oLF+D9BZq81T6N8RtnYaOF7pAPWjI/k5n+wnt7+WWHt6C2/j29+6vob5L7X8P7bdphAdhIR+F1Xzo5S3cvoX9/qHwm4/6vS/tRQmhp2gkH33wCZpTMCD4eKlgzBt+K1vo9A/gUz/+mJ978s8+wc88/TA/B9yzP4/fq1+LAdxWq2V9Pc2PdHROBsl5BNvhJSIiIiIiIiIiIiIiQ9LJZGJ21sL6OcLWz4LOPmumgD/h15lcmD+T3fq5+t67EXYGVmP0/fdbbPDXK5y8AfEX7tm/Z8b+XUEbQULo+57s39ll/t41+3fn2b//8F2YcKldaCz795Dav0tWvocUdbWw/X3A9vdy20+4FSfcapcaSbqF1LmZdqmRpI023GabdJMs8DbZkzAg7kiG9PgW3HFTacMUtVnakx6FhXsQlvRkDOg5mlwQMNcushXJhnzwqcTwGTXwO4FDzW/UjtMV/3AU7iDUFV9H2MATLDX3MVD7FBVZ/SzwEbgtU/Gwq+Tbwb9E74xuP/456gCi13y4WhfLYr0aovZ4iYiIiIiIiIiImn0B9U4kf9bof30AAAAASUVORK5CYII=" />
      </div>
    </div>

    </>
  )
}

export default RecommandationCard