import styles from '../styles/Home.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  Box,
  Typography, 
} from "@mui/material";




export default function Home() {
  return (
    <body className={styles.body}>
      <Typography variant="h3" component="div" className={styles.title}>Age Finder</Typography>
      <Box className={styles.form}>
        form
      </Box>
    </body>
  )
}
