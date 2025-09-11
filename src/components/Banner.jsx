import police from '../assets/police.jpg'
import { Box, Typography } from "@mui/material"
export default function Banner() {
    return (<>
        <Box sx={{
            backgroundImage: `url(${police})`,
            height: "35vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Typography color='white' variant='h3' sx={{
                textShadow: "2px 2px 6px black",
            }}>Breaking News</Typography>
        </Box>
    </>)
}