import { Box, Container, Typography } from "@mui/material"
import Header from "../components/Header"
import Img from '../assets/success.gif'

const Success = () => {
    return (
       <>
            <Header title="Sucesso"  backButton/>
            <Container sx={{marginTop: 10}}>
                <Box width="100%">
                    <img src={Img} width="100%"/>
                </Box>
                <Box>
                    <Typography textAlign="center">Pedido feito com sucesso!</Typography>
                </Box>
            </Container>
       </>
    )
}

export default Success