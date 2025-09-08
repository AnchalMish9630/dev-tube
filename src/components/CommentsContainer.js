import React from 'react'
 const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
  

const Comment = ({data})=>{
    const {name, text, replies}=data;
    return(
        <div className='flex shadow-sm bg-gray-100 w-1/2'>
            <div className='p-2 rounded-lg'>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className='h-8 w-8 rounded-full'/>
                {name}{text}
            </div>
        </div>    
    )
}

const CommentsList = ({comments})=>{
    return( 
        <>
          {comments?.map((comment, index)=> (
            <div>
                <Comment key={index} data={comment} />
                <div className='pl-5 border border-l-black  ml-5 w-1/2'>
                {/* <CommentsList comments={comment.replies} /> */}
          </div>
            </div>
          ) )}
        </>
    )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 mx-6 pl-20 py-2 pr-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
  )
}

export default CommentsContainer