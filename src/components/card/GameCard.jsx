import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { JogosContext } from '../../context/Jogos';

export default function GameCard({thumbnail, genre, id, title, description, realiseDate, gameUrl}) {

  const { resgatarJogo } = useContext(JogosContext)

  const game = {thumbnail, genre, id, title, description, realiseDate, gameUrl}
  
  return (
    <Card sx={{ maxWidth: 345 }} id={id}>
      <CardMedia
        sx={{ height: 180 }}
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
        {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={() => resgatarJogo(game)}>Resgatar</Button>
        <Button size="small" variant="text">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
