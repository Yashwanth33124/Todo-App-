
import React from 'react'
import { Card, CardContent, colors, Typography,CardActions,Button } from "@mui/material";

const TodoItem = ({todo , FetchDetails}) => {
    console.log(todo)
  return (
   <Card sx={{
    maxWidth:250,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
   }}>
    <CardContent>
        <Typography  variant =  "h5" color={'text.secondary'}>
            {todo?.todo}
        </Typography>
    </CardContent>
    <CardActions>
     <Button onClick={() => FetchDetails(todo?.id)}
      sx={{
            backgroundColor: "#000000",
            color: "#fff",
            opacity: 0.85,
            '&:hover': {
              backgroundColor: "#333333", 
              color:"#fff",
              opacity: '1',
            },
          }}>
         details
     </Button>
    </CardActions>
   </Card>
  )
}

export default TodoItem
